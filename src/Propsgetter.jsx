import { useState } from "react"
import { Link } from "react-router-dom"

function Propsgetter (props){
   
    return(
        <>
                <h1>This is Home page</h1>
<h1>{props.name}</h1>
        This is the props page<br></br>
        <Link to="/about">Go to About Page</Link>
        </>
    )
}
export default Propsgetter