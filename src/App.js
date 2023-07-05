import {useState} from 'react';
import './App.css';
import { useDebugValue } from 'react';
function App() {
  const [color,setColor]=useState('green')
  const [label, setLabel]=useState(0)
  return (
    <div class="container" style={{backgroundColor:'yellowgreen'}} >

      <h1 style={{color:color}} >Mochi Counter</h1>
      <button style={{padding:10,color:color=="green"? "blue":"green"}} onClick={()=>{
        if(color=="green")
        setColor("blue")
        else
        setColor("green")

      }} >Toggle</button> 

      <h1>Let's-Calculate</h1>
      <div className="buttons">
      <button style={{gap:10, padding:30}} onClick={()=>{
        setLabel(label+1)
      }}>+</button>
      <button style={{gap:10, padding:30}} onClick={()=>{
        setLabel(label-1)
      }}>-</button>
      </div>
      <img src="https://media.tenor.com/T0ukP_Jb3q4AAAAC/peach-and-goma-dancing-gif.gif" alt="Mochi-gif" />
      <label  >
        {label}
      </label>
      


    </div>
    
  );
}

export default App;
