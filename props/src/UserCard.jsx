import React from 'react';

function UserCard({ name, role, ciudad }) {
  return (
    <div >
      <h2 >{name}</h2>
      <p >Rol: {role}</p>
      <p >Ciudad: {ciudad}</p>
    </div>
  );
}

export default UserCard;