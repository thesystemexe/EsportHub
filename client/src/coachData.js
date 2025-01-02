import coach_icon from './component/assets/coachIcon.jpeg'

export const coaches = [
  {
    id: 1,
    name: "John Doe",
    image:
      "https://i.pinimg.com/550x/97/2c/af/972caf7102df63a21ae4bdde7cf7abea.jpg",
    specialty: "FPS Games",
    tagline: "Master your aim!",
    bio: "John has over 10 years of experience coaching professional FPS players. His expertise lies in improving aim, reaction time, and game sense. He has worked with top esports teams around the world.",
    achievements: [
      "Top 10 ESL Pro League Coach",
      "Coached Team Phoenix to a championship win",
      "Pro Gamer Award 2020",
    ],
    pricePerSession: "$50/session",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: coach_icon,
    specialty: "MOBA Games",
    tagline: "Strategy is key!",
    bio: "Jane is a seasoned MOBA coach with 8 years of experience in competitive gaming. She specializes in creating winning strategies and helping players refine their skills in lane management and team coordination.",
    achievements: [
      "World MOBA Champion 2018",
      "Coached 5 pro teams to playoffs",
      "Recognized as Best MOBA Coach 2021",
    ],
    pricePerSession: "$60/session",
  },
  {
    id: 3,
    name: "Alex Johnson",
    image: coach_icon ,
    specialty: "Battle Royale",
    tagline: "Survive and conquer!",
    bio: "Alex has a knack for survival games and has been coaching players in the battle royale genre for 6 years. He focuses on map awareness, loot prioritization, and clutch decision-making.",
    achievements: [
      "Winner of Solo Survival Championship",
      "Ranked Top 1% in multiple BR games",
      "Featured in Gamer's Weekly Magazine",
    ],
    pricePerSession: "$45/session",
  },
  {
    id: 4,
    name: "Emily Davis",
    image: coach_icon ,
    specialty: "Racing Games",
    tagline: "Feel the speed!",
    bio: "Emily is a professional racing game coach who has helped players achieve precision driving and optimal racing lines. With 5 years of coaching experience, she's known for her attention to detail and personalized approach.",
    achievements: [
      "3-time Racing League Champion",
      "Coached players in F1 Esports",
      "Named Rising Coach of the Year 2022",
    ],
    pricePerSession: "$40/session",
  },
  {
    id: 5,
    name: "Michael Lee",
    image:  coach_icon ,
    specialty: "RTS Games",
    tagline: "Outsmart your opponent!",
    bio: "Michael has been coaching real-time strategy players for a decade. He emphasizes resource management, tactical planning, and efficient execution to help players dominate their opponents.",
    achievements: [
      "StarCraft Pro League Runner-Up",
      "Author of 'Mastering RTS Games'",
      "Coached Team Alpha to regional success",
    ],
    pricePerSession: "$55/session",
  },
];
