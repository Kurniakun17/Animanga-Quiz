import React, { useEffect } from 'react';
import type * as I from '../utils/interfaces';
import { useNavigate } from 'react-router-dom';
import {
  clearLocalStorage,
  getHighScoreFromLocalStorage,
} from '../utils/localStorageUtils';
import { generateDate, resetQuizResult } from '../utils/helpers';

interface ResultComponentProps {
  user: string;
  quizResult: I.QuizResultProps;
  setQuizResult: React.Dispatch<React.SetStateAction<I.QuizResultProps>>;
}

export const Result = ({
  user,
  quizResult,
  setQuizResult,
}: ResultComponentProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn();
  }, []);

  const isLoggedIn = () => {
    if (user === '') {
      navigate('/');
    }
  };

  const onButtonHandler = (clicked: string) => {
    resetQuizResult(setQuizResult);
    const currentScore = {
      ...quizResult,
      user,
      score: quizResult.correct * 10,
      date: generateDate(),
    };
    let highScoreHistory = getHighScoreFromLocalStorage();
    highScoreHistory = [...highScoreHistory, currentScore];
    localStorage.setItem('highscore', JSON.stringify(highScoreHistory));
    if (clicked === 'see the answer') {
      navigate('/answer');
      return;
    }
    clearLocalStorage(true);
    clicked === 'play again' ? navigate('/play') : navigate('/main-menu');
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col bg-[#13192A] gap-6 text-center px-6 py-9 rounded-lg border-t-4 border-t-[#00C8B4] w-[70%] max-w-[300px]">
          <h1 className="text-xl font-bold">
            Score: {quizResult.correct * 10}/100
          </h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-gray-300">{`Answered ${
              quizResult.correct + quizResult.wrong
            }`}</h2>
            <h2 className="text-[#00C8B4]">{`Correct ${quizResult.correct}`}</h2>
            <h2 className="text-red-500">{`Wrong ${quizResult.wrong}`}</h2>
          </div>
          <button
            className="font-bold bg-[#00C8B4] rounded-md w-full py-2"
            onClick={() => {
              onButtonHandler('play again');
            }}
          >
            Play Again
          </button>
          <button
            className="font-bold bg-[#00C8B4] rounded-md w-full py-2"
            onClick={() => {
              onButtonHandler('see the answer');
            }}
          >
            See the Answer
          </button>
          <button
            className="font-bold bg-[#00C8B4] rounded-md w-full py-2"
            onClick={() => {
              onButtonHandler('main menu');
            }}
          >
            Go to Main Menu
          </button>
        </div>
      </div>
    </>
  );
};
