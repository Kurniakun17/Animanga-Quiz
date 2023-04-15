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
    clearLocalStorage(true);
    resetQuizResult(setQuizResult);
    const currentScore = {
      ...quizResult,
      score: quizResult.correct * 10,
      date: generateDate(),
    };
    let HighScore = getHighScoreFromLocalStorage();
    HighScore = [...HighScore, currentScore];
    localStorage.setItem('highscore', JSON.stringify(HighScore));
    clicked === 'play again' ? navigate('/home') : navigate('/main-menu');
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col bg-[#13192A] gap-6 text-center px-6 py-9 rounded-lg border-t-4 border-t-[#00C8B4] w-[70%] max-w-[300px]">
          <h2 className="text-[#00C8B4] font-bold">{`Correct ${quizResult.correct}`}</h2>
          <h2 className="text-red-500 font-bold">{`Wrong ${quizResult.wrong}`}</h2>
          <h2 className="text-gray-300 font-bold">{`Unanswered ${quizResult.unAnswered}`}</h2>
          <div className="flex "></div>
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
