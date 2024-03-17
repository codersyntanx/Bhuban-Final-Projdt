import { useState } from "react";
import { Link } from "react-router-dom";

function About (props){
    const[nameof,setNameof]=useState("Mr X")

    return(
        <>
        This is about page        <br></br>

        <Link to="/">Go to Home</Link>
        <input type="text" name="anything" id="name" onChange={(e)=>{setNameof(e.target.value)}} />
      <button onClick={()=>{props.Gettingname(nameof)}}>GET THE NAME</button>
        <h1>{props.name}</h1>
        </>
    )
}
export default About;