
import React from "react";
import './../styles/App.css';
import {useStare} from 'react';
const App = () => {

  const [text,setText] = useState('');
  
  function handleClick(val){
    setText("Hello " + val.target.value + "!");
  }
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
