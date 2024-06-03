import React from 'react';

// Data
const UserData = [{
    name: "Hari",
    city: "Erode",
    description: "Front-End- Developer",
    skills: ["HTML", "CSS", "JAVA-SCRIPT", "REACT", "EXCEL", "WEB-DEVELOPMENT", "EXCEL"],
    online: true,
    profile: "src/component/images/img.jpg"
}, {
    name: "prasath",
    city: "salem",
    description: "Front-End- Developer",
    skills: ["HTML", "CSS", "JAVA-SCRIPT", "REACT", "EXCEL", "WEB-DEVELOPMENT"],
    online: false,
    profile: "src/component/images/img.jpg"
}, {
    name: "Randy",
    city: "coimbatore",
    description: "Back-End- Developer",
    skills: ["HTML", "CSS", "JAVA-SCRIPT", "REACT", "EXCEL", "WEB-DEVELOPMENT"],
    online: true,
    profile: "src/component/images/img.jpg"
}]

// blow codes refers ,  how can we create the profile card 
function User(props) {
    return (
        <><div className='container'>
            <span className={props.online ? "online" : "offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
            <img src={props.profile} alt="" />
            <h2 className='name'>{props.name}</h2>
            <h3 className='city'>{props.city}</h3>
            <h2 className='description'>{props.description}</h2>
            <div className='btn-box'>
                <button className='msg'>Message</button>
                <button className='follow'>Following</button>
            </div>
            <div className='skills'>
                <h2 className='skill-header' >
                    skills
                </h2>
                <div className='list-items'>
                    <ul>
                        {props.skills.map((skill, index) => (<li key={index}>
                            {skill}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

// export component
const UserCard = () => {
    return (
        <>
        {UserData.map((user,index)=>(
            <User key={index} name={user.name} city={user.city} description={user.description} skills={user.skills} online={user.online}   profile={user.profile}  />
    ))}
        </>
        );
}

export default UserCard;
// for singlr card create 
//  <User name="hari" city="erode" description=" Front-End Developer" skills={["HTML","CSS","JAVA-SCRIPT","REACT","WEB-DEVELOPMENT","EXCEL"]} online={true} profile="src/component/images/img.jpg"  />

