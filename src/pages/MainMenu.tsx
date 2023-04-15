import React, { useEffect, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import type * as I from '../utils/interfaces';
import { useNavigate } from 'react-router';
import { isLoggedIn } from '../utils/helpers';
import { getQuestionsFromLocalStorage } from '../utils/localStorageUtils';

interface MainMenuProps {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  setQuizResult: React.Dispatch<React.SetStateAction<I.QuizResultProps>>;
}

export const MainMenu = ({ user, setUser, setQuizResult }: MainMenuProps) => {
  const isPausedRef = useRef<boolean>(
    getQuestionsFromLocalStorage().length > 1
  );
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn(user, navigate);
  }, []);

  const onPlayHandler = () => {
    navigate('/home');
  };

  const onHighScoreHandler = () => {
    navigate('/high-score');
  };

  const onAboutHandler = () => {
    navigate('/about');
  };

  return (
    <>
      <Navbar
        user={user}
        setUser={setUser}
        setQuizResult={setQuizResult}
      ></Navbar>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] justify-center items-center w-[70%] max-w-[400px]">
        <h1 className="font-bold mb-8 text-4xl text-[#00C8B4] text-center">
          Quiz<span className="text-white">ify</span>
        </h1>
        <div className="flex flex-col gap-4 max-w-[300px] m-auto">
          <button
            className="py-3 w-full bg-blue-500 rounded-xl rounded-b-xl font-bold border-b-[6px] border-b-blue-600 active:translate-y-1"
            onClick={onPlayHandler}
          >
            {isPausedRef.current ? 'Resume' : 'Play'}
          </button>
          <button
            className="py-3 w-full bg-blue-600 rounded-xl  rounded-b-xl font-bold border-b-[6px] border-b-blue-700 active:translate-y-1"
            onClick={onHighScoreHandler}
          >
            High Score
          </button>
          <button
            className="py-3 w-full bg-blue-700 rounded-xl rounded-b-xl font-bold border-b-[6px] border-b-blue-800 active:translate-y-1"
            onClick={onAboutHandler}
          >
            About
          </button>
        </div>
      </div>
    </>
  );
};
