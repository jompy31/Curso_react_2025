import React, {useState} from 'react'

const Contador = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount (count +1)
    };
    const handleDecrement = () => {
        setCount(count -1)
    };

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
    </div>
  )
}

export default Contador