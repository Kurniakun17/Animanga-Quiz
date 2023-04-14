import React, { useEffect } from 'react';
import type * as I from '../utils/interfaces';
import { useNavigate } from 'react-router-dom';
import { clearLocalStorage } from '../utils/helpers';

interface ResultComponentProps{
  quizResult: I.QuizResultProps;
  user: string;
  setQuizResult: React.Dispatch<React.SetStateAction<I.QuizResultProps>>;
}

export const Result = ({
  quizResult,
  user,
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

  const onPlayAgainHandler = () => {
    clearLocalStorage();
    setQuizResult({
      correct: 0,
      wrong: 0,
      unAnswered: 0
    });
    navigate('/home');
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col bg-[#13192A] gap-6 text-center px-6 py-9 rounded-lg border-t-4 border-t-[#00C8B4] w-[70%] max-w-[300px]">
        <h2>{`Correct ${quizResult.correct}`}</h2>
        <h2>{`Wrong ${quizResult.wrong}`}</h2>
        <h2>{`Unanswered ${quizResult.unAnswered}`}</h2>
        <button
          className="font-bold bg-[#00C8B4] rounded-md w-full py-2"
          onClick={onPlayAgainHandler}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};
