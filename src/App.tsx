import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Result } from './pages/Result';
import type * as I from './utils/interfaces';

function App() {
  const [user, setUser] = useState('');
  const [result, setResult] = useState<I.resultProps>({
    correct: 0,
    wrong: 0,
    unAnswered: 0,
  });

  return (
    <div className="bg-[#080B15] min-h-screen text-white font-rubik">
      <Routes>
        <Route path="/" element={<Login setUser={setUser}></Login>}></Route>
        <Route
          path="/home"
          element={<Home user={user} setUser={setUser} setResult={setResult}></Home>}
        ></Route>
        <Route path="/result" element={<Result result={result}></Result>}></Route>
      </Routes>
    </div>
  );
}

export default App;
