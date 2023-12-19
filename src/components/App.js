
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <div>
     <label htmlFor="name">Enter your name:</label>
     </div>
     <input htmlFor="name" type="text" onChange={handleClick} />

     <p>{text}</p>
    </div>
  )
}

export default App
