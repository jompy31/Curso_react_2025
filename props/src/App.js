import React from 'react';
import UserCard from './UserCard';
import UserProfile from './UserProfile';
import './App.css';

function App() {
  const users = [
    { name: 'Ana López', role: 'Desarrolladora', ciudad: 'Madrid' },
    { name: 'Juan Pérez', role: 'Diseñador', ciudad: 'Barcelona' },
  ];
  return (
    <div className="App">
      <h1 >Usuarios</h1>
      {users.map((user, index) => (
        <div key={index} >
          <UserCard name={user.name} role={user.role} ciudad={user.ciudad} />
          <UserProfile name={user.name} role={user.role} ciudad={user.ciudad} />
        </div>
      ))}
    </div>
  );
}

export default App;
