import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./Data"

export default function App(){

  const card = Data.map((data)=>{
    return(
      <Card 
      key={data.id}
      {...data}
      />
    )
  })

  console.log(card);

  return(
    <div>
      <Navbar />
      <Hero />
      <div className="card-container">
        {card}
      </div>
    </div>
  )
}