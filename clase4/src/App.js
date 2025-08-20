import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Toogle from './Toogle';
import Contador from './Contador';

function App() {
  
  const [count, setCount] = useState(0);
  return (
    <div className="App">
     <div>
      {/* <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button> */}
      <Contador/>
      <Button/>
      <Toogle/>
    </div>

    </div>
  );
}

export default App;
