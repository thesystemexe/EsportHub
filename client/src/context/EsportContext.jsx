import React, { createContext, useState } from 'react'
import { data } from '../tournamentdata'
export const EsportContext = createContext(null);


const EsportContextProvider = () =>{
    const [data , setData] = useState([]);
    
}