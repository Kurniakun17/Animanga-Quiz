import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';

function App() {
  const [user, setUser] = useState('');

  return (
    <div className="bg-[#080B15] min-h-screen text-white font-rubik">
      <Routes>
        <Route path="/" element={<Login setUser={setUser}></Login>}></Route>
        <Route
          path="/home"
          element={<Home user={user} setUser={setUser}></Home>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
