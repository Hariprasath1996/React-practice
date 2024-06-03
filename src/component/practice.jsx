import React from "react"

// props practice
function Practice(props) {
    return (
        <div>
            <h3>
                this is {props.mySelf.name}
            </h3>
            <div>
                <p>i am <span style={{ color: '${props.mySelf.age}' }}></span> {props.mySelf.age} </p>
                <p>i am from <span style={{ color: '${props.mySelf.city}' }}></span> {props.mySelf.city} </p>
            </div>
        </div>
    )
}



export default Practice