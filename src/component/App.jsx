import React from 'react';
import ProfileCard from './ProfileCard';

const UserData = [{
    name : "Hari",
    city : "Erode",
    description :"Front-End- Developer",
    skills :["HTML","CSS","JAVA-SCRIPT","REACT","EXCEL","WEB-DEVELOPMENT"],
    online:false,
    profile:"images"
},{
    name : "prasath",
    city : "salem",
    description :"Front-End- Developer",
    skills :["HTML","CSS","JAVA-SCRIPT","REACT","EXCEL","WEB-DEVELOPMENT"],
    online:false,
    profile:"images"
},{
    name : "viper",
    city : "coimbatore",
    description :"Back-End- Developer",
    skills :["HTML","CSS","JAVA-SCRIPT","REACT","EXCEL","WEB-DEVELOPMENT","MERN-LANGUAGES"],
    online:false,
    profile:"images"
}]

// props
function App() {
    const User = {

    
    }
    return (
        <div>
            <h1>
                welcome
                <ProfileCard mySelf={mySelf}/>
            </h1>
        </div>
    )
}

export default App ;
