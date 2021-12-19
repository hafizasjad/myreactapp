import React from 'react'
import './home.css'
function ChildHome({User}) {
    return (
        <div id='ChildHome'>
            <h2>Hello From Child Home !</h2>
            <h3>User is from {User.City}</h3>
        </div>
    )
}

export default ChildHome
