
import React from "react";
import './../styles/App.css';
import React,{useStare} from 'react';
const App = () => {

  const [text,setText] = useState('');

  function handleClick(val){
    setText("Hello " + val.target.value + "!");
  }
  return (
    <div>
    {/* Do not remove the main div */}
    <p>Enter your name:</p>
    <input type="text" id="name" value={text} onChange={handleClick} />
    {!!text && (
      <p>{`Hello ${text}!`}</p>
    )}
    </div>
  )
}

export default App
