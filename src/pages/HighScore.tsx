import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { getHighScoreFromLocalStorage } from '../utils/localStorageUtils';
import { type QuizResultProps } from '../utils/interfaces';

interface HighScoreProps extends QuizResultProps {
  date: string;
  user: string;
  score: number;
}

export const HighScore = () => {
  const navigate = useNavigate();
  const [highScore, setHighScore] = useState<[] | HighScoreProps[]>(
    getHighScoreFromLocalStorage()
  );
  const onBackHandler = () => {
    navigate('/main-menu');
  };

  const onResetHandler = () => {
    localStorage.removeItem('highscore');
    setHighScore([]);
  };

  return (
    <div className="h-screen flex justify-center items-center">
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
        {highScore.length === 0 ? (
          <h1 className="font-bold text-center text-3xl my-4 bg-[#2d3346] p-3 rounded-lg">
            No History!
          </h1>
        ) : (
          <div className="rounded-lg overflow-auto">
            <table className=" w-full text-center">
              <thead>
                <tr className="bg-[#2d3346]">
                  <th className="p-3 text-xs md:text-base">Date</th>
                  <th className="p-3 text-xs md:text-base">User</th>
                  <th className="p-3 text-xs md:text-base">Correct</th>
                  <th className="p-3 text-xs md:text-base">Wrong</th>
                  <th className="p-3 text-xs md:text-base">Unanswered</th>
                  <th className="p-3 text-xs md:text-base">Scores</th>
                </tr>
              </thead>
              <tbody>
                {highScore
                  .sort(
                    (a: HighScoreProps, b: HighScoreProps) => b.score - a.score
                  )
                  .slice(0, 10)
                  .map((data: HighScoreProps, index: number) => {
                    return (
                      <tr key={`highscore-${index}`}>
                        <td className="p-3 text-[10px] md:text-sm bg-slate-600">
                          {data.date}
                        </td>
                        <td className="p-3 text-[10px] md:text-sm bg-slate-600">
                          {data.user}
                        </td>
                        <td className="p-3 text-[10px] md:text-sm bg-slate-600">
                          {data.correct}
                        </td>
                        <td className="p-3 text-[10px] md:text-sm bg-slate-600">
                          {data.wrong}
                        </td>
                        <td className="p-3 text-[10px] md:text-sm bg-slate-600">
                          {data.unAnswered}
                        </td>
                        <td className="p-3 text-[10px] md:text-sm bg-slate-600">
                          {data.score}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
