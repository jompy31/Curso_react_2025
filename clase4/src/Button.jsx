import React from 'react'

const Button = () => {
    const handleClick = () => alert('¡Clic en el botón!');

  return (
    <div>
        <button onClick={handleClick}>Haz clic</button>;
    </div>
  )
}

export default Button