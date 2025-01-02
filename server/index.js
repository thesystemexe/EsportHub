const port = 4001;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { error } = require('console');
const router = express.Router();


app.use(express.json());
app.use(cors());
app.use('/',router)

mongoose.connect('mongodb+srv://thesystemexee:practice345@cluster0.7oaoc.mongodb.net/e-sports');

app.get('/',(req,resp)=>{
    resp.send("Express app is running")
})

//creating a schema for users

const Users = mongoose.model('users',{
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['admin','organization','user'],
        default:'user',
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    status:{
        type:String,
        enum:['pending','approved','rejected'],
        required: function(){
            return this.role==='organization'
        }
    },
    date:{
        type:Date,
        default:Date.now
    }
})



app.post('/signup',async(req,resp)=>{
    try {
        const {name , email, password, role} = req.body;
        if(!['user','organization'].includes(role)){
            resp.status(400).json({success:false,error:"Invalid role selected"})
        }
        let check = await Users.findOne({email});
        if (check) {
          return resp
            .status(400)
            .json({ success: false, error: "Existing user found" });
        }
        const user = new Users({
          name, email,password,role,...(role==='organization' && {status:'pending'} )
        });
        await user.save();
        const data = {
            user:{
                id:user._id,
                role:user.role
            }
        };
        const token = jwt.sign(data,'secret_key');
        resp.json({
            success:true,
            token
        })
        
    } catch (error) {
        console.log('Error during signUp',error);
        resp.json({
            success:false,
            error:"Internal server error"
        })
    }
;})


app.post('/login',async(req,resp)=>{
    const {email , password} = req.body;
    const user = await Users.findOne({email});
    if(user){
        const passCompare = user.password === password;
        if(passCompare){
            const data = {
                user:{
                    id:user._id,
                    role:user.role,
                    isAdmin:user.isAdmin
                }
            }

            const token = jwt.sign(data,'secret_key');
            resp.json({
                success:true,
                token
            })
        }else{
            resp.json({success:false,error:"Incorrect password"})
        }
    }else{
        resp.json({
            success:false,
            error:'Incorrect email id'
        })
    }
});

// Middleware for role based access

const requireRole =(roles)=>(req,resp,next)=>{
    const token =req.header('auth-token');
    if(!token){
        return resp.status(400).send('Access denied')
    }
    try {
        const decoded = jwt.verify(token,'secret_key');
        if(!roles.include(decoded.role)){
            return resp.status(403).send('Unauthorized')
        }
        req.user = decoded;
        next();
    } catch (error) {
        resp.status(400).send('Invalid token')
    }
}

//End point to get pending organization requests for the admin dashboard

router.get('/admin/requests',requireRole(['admin']),async (req,resp)=>{
    const pendingOrgs = await Users.find({role:'organization', status:'pending'});
    resp.json(pendingOrgs);
})


//Admin to approve or reject the requests

router.post('/admin/approve', requireRole(['admin']), async(req,resp)=>{
    const {userId,status} = req.body;
    if(!req.user.isAdmin){
        return resp.status(403).json({success:false,error:"Unauthorized access"})
    }
    if(!['approved', 'rejected'].includes(status)){
        return resp.status(400).send('Invalid Status')
    }
    try {
       const updatedOrg = await Users.findByIdAndUpdate(userId, { status }, {new:true});
        resp.json({
          success: true,
        });
        
    } catch (error) {
        console.error("Error updating organization status", error);
        resp
          .status(500)
          .json({ success: false, error: "Internal server error" });
    }
})

router.post('/tournament', requireRole(['organization']), async (req,resp)=>{
    if(req.user.status!='approved'){
        resp.status(400).send("You are not authorized to create a tournament")
    }

    //Tournament creation logic over here
    resp.json({
        success:true
    })
})

const fetchUser = (req,resp,next)=>{
    const token = req.header('auth-token');
    if(!token){
        resp.status(401).send({error:"Please authenticate the user by validating the valid token"})
    }else{
        try {
            const data = jwt.verify(token, "secret_key");
            req.user = data.user;
            next();
            
        } catch (error) {
            resp.status(401).send({error:"Please authenticate using  valid token"})
        }
    }
}




app.listen(port ,(error)=>{
    if(!error){
        console.log('server running on Port'+port);
    }else{
        console.log('Error'+error);
        
    }
})