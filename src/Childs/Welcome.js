import React from "react"
import './home.css'
function Welcome(props) {
    const {firstname , lastname , City , Area} = props;

    console.log(props)
    return (
        <div id="welcome">
            <h2>Welcome to the site {firstname +" "+ lastname}</h2>
            <h2>
                {City} : {Area}
            </h2>
        </div>
    )
}

export default Welcome;