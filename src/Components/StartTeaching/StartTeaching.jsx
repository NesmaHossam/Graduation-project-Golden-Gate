import React from "react";
import "./StartTeaching.css"
import Pana from "../Assests/pana.png"

const StartTeaching = () =>{

    return(
        <div className="start-teaching">

            <div className="start-teaching-texts">
                <h1>Become an instructor</h1>
                <p>if you’re interested in teaching, We provide the tools and skills to teach what you love</p>

               <button>Start teaching now</button>

            </div>

            <div className="start-teaching-img">
                <img src={Pana} alt=""/>
            </div>

        </div>
    )
}


export default StartTeaching 