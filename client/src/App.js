import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [loggedInUser, setLoggedInUser] = React.useState('')
  const [password, setPassword] = React.useState('')


  const handleLogInSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/api/Users', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        "username": "stringsdsd3",
        "email": "string3434@g.com",
        "emailVerified": false,
        "password": "helflf"
      }) // body data type must match "Content-Type" header
    }).then(res => res.json()).then(res => console.log(res))
  }

  return (
    <div className="App">
      <h3>Welcome to FreeCodeClone, {loggedInUser}</h3>
      <form onSubmit={e => handleLogInSubmit(e)}>
        username
        <input type="text" value={loggedInUser} onChange={e => setLoggedInUser(e.target.value)} />
        Password
        <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="submit" />
      </form>

    </div>
  );
}

export default App;
