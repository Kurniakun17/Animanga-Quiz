import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';

function App() {
  const [user, setUser] = useState('');

  return (
    <div className="bg-[#080B15] text-white font-rubik">
      <Routes>
        <Route path="/" element={<Login setUser={setUser}></Login>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
