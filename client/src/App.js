import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [loggedInUser, setLoggedInUser] = React.useState('you')
  React.useEffect(() => {
    fetch('http://localhost:3000/api/freecodeclones?access_token=5dcd00b2546d7d5f7d84c345').then(res =>
      res.json()).then(res => setLoggedInUser(res[1].username))
  })

  return (
    <div className="App">
      <h3>Welcome to FreeCodeClone, {loggedInUser}</h3>

    </div>
  );
}

export default App;
