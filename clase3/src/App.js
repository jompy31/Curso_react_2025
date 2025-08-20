import React from 'react';
import UserCard from './UserCard';
import UserProfile from './UserProfile';
import './App.css';

function App() {
  const users = [
    { name: 'Ana López', role: 'Desarrolladora', ciudad: 'Madrid' },
    { name: 'Juan Pérez', role: 'Diseñador', ciudad: 'Barcelona' },
  ];
  const diseñadores = users.filter((diseñador) => diseñador.role == "Diseñador")
  return (
    <div className="App">
      <h1 >Usuarios</h1>
      {users.map((user, index) => (
        <div key={index} >
          <UserCard name={user.name} role={user.role} ciudad={user.ciudad} />
          {/* <UserProfile name={user.name} role={user.role} ciudad={user.ciudad} /> */}
        </div>
      ))}
      <ul>
        {diseñadores.map((diseñador, index) => (
          <li key ={index}>
           De los usuarios tenemos al diseñador {diseñador.name} de la ciudad de
          </li>
        ))
        }
      </ul>
    </div>
  );
}

export default App;
