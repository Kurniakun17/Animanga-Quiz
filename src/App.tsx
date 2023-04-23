import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Play } from './pages/Play';
import { Result } from './pages/Result';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { MainMenu } from './pages/MainMenu';
import type * as I from './utils/interfaces';
import {
  getResultFromLocalStorage,
  getThemeFromLocalStorage,
  getUserFromLocalStorage,
} from './utils/localStorageUtils';
import { HighScore } from './pages/HighScore';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { NavbarContext } from './utils/Contexts';
import { Answer } from './pages/Answer';

function App() {
  const [user, setUser] = useState<string>(() => getUserFromLocalStorage());
  const [theme, setTheme] = useState<string>(getThemeFromLocalStorage());
  const [quizResult, setQuizResult] = useState<I.QuizResultProps>(
    getResultFromLocalStorage()
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const onThemeHandler = () => {
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <NavbarContext.Provider value={{ user, setUser, setQuizResult }}>
      <div className="bg-[#e5e5e5] dark:bg-[#080B15] h-screen text-white font-rubik">
        <button
          className="absolute top-[50%] right-0 z-50 translate-y-[-50%] bg-[#2d3346] dark:bg-[#eaeaea] text-[#eaeaea] dark:text-black px-2 py-1 rounded-l-lg sm:text-xl lg:text-2xl lg:px-3 lg:py-2"
          onClick={onThemeHandler}
        >
          {theme === 'dark' ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </button>
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
            path="/play"
            element={<Play user={user} setQuizResult={setQuizResult}></Play>}
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
          <Route path="/answer" element={<Answer user={user}></Answer>}></Route>
          <Route
            path="/main-menu"
            element={<MainMenu user={user}></MainMenu>}
          ></Route>
          <Route path="/high-score" element={<HighScore></HighScore>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </NavbarContext.Provider>
  );
}

export default App;
