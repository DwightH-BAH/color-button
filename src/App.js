import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export function replaceCamelWithSpaces(colorName){
  return colorName.replace( /\B([A-Z])\B/g,' $1');
}

function App() {

  const [buttonColor, setButtonColor] = useState('red');
  const [ disable, setDisabled ] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue': 'red';

  
  return (
    
   <div>
    <button 
      style={{backgroundColor: buttonColor, color: 'white'}}
      onClick={()=> setButtonColor(newButtonColor)}
      disabled={disable}
      >Change to {newButtonColor}
    </button>

    <input 
      type="checkbox"
      id="disable-button-checkbox"
      aria-checked={disable}
      defaultChecked={disable}
      onChange={(e)=> setDisabled(e.target.checked)}/>
      <label htmlFor="disable-button-checkbox">Disable button</label>
  </div>
  );
}

export default App;
