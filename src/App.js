  import React, { useState } from 'react';
  import './App.css';
  import Login from './component/Login';
  import Register from './component/Register';
  import Checklist from './component/Checklist';

  function App() {
    const [token, setToken] = useState('');
    console.log('Token:', token);
    return (
      <div className="App">
        <h1>Checklist App</h1>
        {!token ? (
          <>
            <Register />
            <Login setToken={setToken} />
          </>
        ) : (
          <Checklist token={token} />
        )}
      </div>
    );
  }

  export default App;
