import React, { useEffect, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router';
import { isLoggedIn } from '../utils/helpers';
import { getQuestionsFromLocalStorage } from '../utils/localStorageUtils';
import { type QuizResultProps } from '../utils/interfaces';

interface MainMenuProps {
  user: string;
  setQuizResult: React.Dispatch<React.SetStateAction<QuizResultProps>>;
}

export const MainMenu = ({ user, setQuizResult }: MainMenuProps) => {
  const isPausedRef = useRef<boolean>(
    getQuestionsFromLocalStorage().length > 1
  );
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn(user, navigate);
  }, []);

  const onPlayHandler = () => {
    setQuizResult({
      correct: 0,
      wrong: 0,
    });
    navigate('/play');
  };

  const onHighScoreHandler = () => {
    navigate('/high-score');
  };

  const onAboutHandler = () => {
    navigate('/about');
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] justify-center items-center w-[70%] max-w-[400px]">
        <h1 className="font-bold mb-8 text-4xl text-[#00C8B4] text-center">
          Quiz<span className="text-[#2d3346] dark:text-white">ifyyy</span>
        </h1>
        <div className="flex flex-col gap-4 max-w-[300px] m-auto">
          <button
            className="py-3 w-full bg-[#2D3346] rounded-xl rounded-b-xl font-bold border-b-[4px] border-b-[#00C8B4] active:translate-y-1"
            onClick={onPlayHandler}
          >
            {isPausedRef.current ? 'Resume' : 'Play'}
          </button>
          <button
            className="py-3 w-full bg-[#2D3346] rounded-xl  rounded-b-xl font-bold border-b-[4px] border-b-[#00C8B4] active:translate-y-1"
            onClick={onHighScoreHandler}
          >
            High Score
          </button>
          <button
            className="py-3 w-full bg-[#2D3346] rounded-xl rounded-b-xl font-bold border-b-[4px] border-b-[#00C8B4] active:translate-y-1"
            onClick={onAboutHandler}
          >
            About
          </button>
        </div>
      </div>
    </>
  );
};
