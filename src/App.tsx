import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Result } from './pages/Result';
import { MainMenu } from './pages/MainMenu'; 
import type * as I from './utils/interfaces';
import {
  getResultFromLocalStorage,
  getUserFromLocalStorage,
} from './utils/localStorageUtils';
import { HighScore } from './pages/HighScore';
import { About } from './pages/About';

function App() {
  const [user, setUser] = useState<string>(() => getUserFromLocalStorage());
  const [quizResult, setQuizResult] = useState<I.QuizResultProps>(
    getResultFromLocalStorage()
  );

  return (
    <div className="bg-[#080B15] h-screen text-white font-rubik">
      <Routes>
        <Route
          path="/"
          element={
            <Login
              user={user}
              setUser={setUser}
              setQuizResult={setQuizResult}
            ></Login>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <Home
              user={user}
              setUser={setUser}
              setQuizResult={setQuizResult}
            ></Home>
          }
        ></Route>
        <Route
          path="/result"
          element={
            <Result
              user={user}
              quizResult={quizResult}
              setQuizResult={setQuizResult}
            ></Result>
          }
        ></Route>
        <Route path='/main-menu' element={<MainMenu user={user} setUser={setUser} setQuizResult={setQuizResult}></MainMenu>}>
        </Route>
        <Route path='/high-score' element={<HighScore></HighScore>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
