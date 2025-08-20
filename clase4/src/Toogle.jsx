import React, { useState } from 'react';


const Toogle = () => {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => setIsOn(!isOn);
 
  return (
       <div>
      <p>Estado: {isOn ? 'Encendido' : 'Apagado'} </p>
      <button onClick={handleToggle}>Cambiar estado</button>
    </div>

  )
}

export default Toogle