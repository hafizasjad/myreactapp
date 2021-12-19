import React from "react";
import ChildHome from "./Childs/ChildHome";
import ChildHeader from "./Childs/ChildHeader";
import Welcome from "./Childs/Welcome";
import { useState } from "react";
import './Childs/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const user = {
    firstname : "Asjad",
    lastname : "Alamgir",
    City : "Lahore",
    Area : "Cantt"
};

// const btnstyle = {
//     color : "red",
//     backgroundcolor : "silver",
//     outline : 0,
//     border : "5px solid black"
// };

const Parents = () => {
    const [User , setUser] = useState(user);
    return (
        
        <div className="container">
            <h1>{User.firstname}</h1>
            <button className="btn btn-primary"
            // style={btnstyle}
//             style={{
//     color : "red",
//     backgroundcolor : "silver",
//     outline : 0,
//     border : "5px solid black"
// }}
            onClick={() =>
             setUser((keepsame) => ({
                 firstname: "Ali",
                 lastname : "Abdullah",
                 City : "Faislabad",
                 Area : keepsame.Area
                }))
            }
            >
                Update Names
            </button>
            <Welcome 
            firstname = {User.firstname} 
            lastname = {User.lastname}
            City = {User.City}
            Area = {User.Area}
             />
            {/* <Welcome firstname = {firstname} lastname = {"Abdullah"} /> */}
            <ChildHome User = {User}/>
            <ChildHeader/>
            {/* <h1>FullName :{user.firstname +" "+ user.lastname}</h1> */}
        </div>
    );
};


export default Parents;