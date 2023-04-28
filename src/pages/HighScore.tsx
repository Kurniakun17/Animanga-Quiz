import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { getHighScoreFromLocalStorage } from '../utils/localStorageUtils';
import { type QuizResultProps } from '../utils/interfaces';
import { HighScoreTable } from '../components/HighScoreTable';

interface HighScoreProps extends QuizResultProps {
  date: string;
  user: string;
  score: number;
}

export const HighScore = () => {
  const navigate = useNavigate();
  const [highScoreData, setHighScoreData] = useState<[] | HighScoreProps[]>(
    getHighScoreFromLocalStorage()
  );
  const onBackHandler = () => {
    navigate('/main-menu');
  };

  const onResetHandler = () => {
    localStorage.removeItem('highscore');
    setHighScoreData([]);
  };

  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="w-[90%] max-w-[800px] flex flex-col gap-2 rounded-md">
        <div className="flex justify-between">
          <button
            className="px-3 md:text-lg pr-3.5 py-1 bg-[#2d3446] rounded-lg font-bold"
            onClick={onBackHandler}
          >
            {'<'}
          </button>
          <button
            className="px-3 md:text-md pr-3.5 py-1 bg-yellow-600 rounded-lg font-bold"
            onClick={onResetHandler}
          >
            Reset
          </button>
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold text-center mb-4 text-[#00C8B4]">
          High Score
        </h1>
        {highScoreData.length === 0 ? (
          <h1 className="font-bold text-center text-3xl my-4 bg-[#2d3346] p-3 rounded-lg">
            No History!
          </h1>
        ) : (
          <HighScoreTable
            highScoreData={highScoreData
              .sort((a: HighScoreProps, b: HighScoreProps) => b.score - a.score)
              .slice(0, 5)}
          ></HighScoreTable>
        )}
      </div>
    </div>
  );
};
