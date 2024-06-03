import React from 'react';
import ProfileCard from './ProfileCard';

const UserData = [{
    name: "Hari",
    city: "Erode",
    description: "Front-End- Developer",
    skills: ["HTML", "CSS", "JAVA-SCRIPT", "REACT", "EXCEL", "WEB-DEVELOPMENT","EXCEL"],
    online: false,
    profile: "images"
}, {
    name: "prasath",
    city: "salem",
    description: "Front-End- Developer",
    skills: ["HTML", "CSS", "JAVA-SCRIPT", "REACT", "EXCEL", "WEB-DEVELOPMENT"],
    online: false,
    profile: "images"
}, {
    name: "viper",
    city: "coimbatore",
    description: "Back-End- Developer",
    skills: ["HTML", "CSS", "JAVA-SCRIPT", "REACT", "EXCEL", "WEB-DEVELOPMENT", "MERN-LANGUAGES"],
    online: false,
    profile: "images"
}]

// props
function App() {
    const User = {


    }
    return (
        <><div>
            <p>offline</p>
            <img src="" alt="" />
            <h2>name</h2>
            <h3>city</h3>
            <h2>description</h2>
            <div>
                <button>Message</button>
                <button>Following</button>
            </div>
            <div>
                <h2 >
                    skills
                </h2>
                <div>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVA-SCRIPT</li>
                        <li>REACT</li>
                        <li>WEB-DEVELOPMENT</li>
                        <li>EXCEL</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default App;
