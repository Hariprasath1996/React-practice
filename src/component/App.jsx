import React from 'react';
import Practice from './practice';

// props
function App() {
    const mySelf = {
        name : 'hari',
        age:27,
        city:'erode',
        size:50
    }
    return (
        <div>
            <h1>
                welcome
                <Practice mySelf={mySelf}/>
            </h1>
        </div>
    )
}

export default App ;
