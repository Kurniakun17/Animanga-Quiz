import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Result } from './pages/Result';
import type * as I from './utils/interfaces';
import {
  getResultFromLocalStorage,
  getUserFromLocalStorage,
} from './utils/helpers';

function App() {
  const [user, setUser] = useState<string>(() => getUserFromLocalStorage());
  const [quizResult, setQuizResult] = useState<I.QuizResultProps>(
    getResultFromLocalStorage()
  );

  return (
    <div className="bg-[#080B15] min-h-screen text-white font-rubik">
      <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser}></Login>}></Route>
        <Route
          path="/home"
          element={
            <Home user={user} setUser={setUser} setQuizResult={setQuizResult}></Home>
          }
        ></Route>
        <Route
          path="/result"
          element={<Result quizResult={quizResult} setQuizResult={setQuizResult} user={user}></Result>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
