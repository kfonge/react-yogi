import React from 'react'
import CorePoses from ".//CorePoses"
import ChestOpeningPoses from ".//ChestPoses"
import SeatedPoses from ".//SeatedPoses"
import StrengthPoses from ".//StrengthPoses"
import { Link, Routes, Switch, Route, useNavigate } from "react-router-dom"



const Home = () => {
  const navigate = useNavigate()
    return (
      <div>
        <h1>
          Home
        </h1>

        <h2> Choose a category of yoga poses below:</h2>
      
        <div className="categoryContainer">
          <button onClick={() => navigate("/core_poses")}> Core Poses</button>
          <button onClick={() => navigate("/seated_poses")}> Seated Poses</button>
          <button onClick={() => navigate("/strength_poses")}> Strengthening Poses</button>
          
                  <button onClick={() => navigate("/chest_poses")}> Chest Opening Poses</button>
                  {/* <img className='buttonImg' src= 'https://www.thegoodbody.com/wp-content/uploads/2019/07/Yoga-Poses-for-Strength.png'
                  onClick={() => navigate("/chest_poses")}/> */}
          
        </div>
        </div>
    )
}
  
export default Home