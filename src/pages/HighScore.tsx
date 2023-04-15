import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { getHighScoreFromLocalStorage } from '../utils/localStorageUtils';
import { type QuizResultProps } from '../utils/interfaces';

interface HighScoreProps extends QuizResultProps {
  date: string;
  score: number;
}

export const HighScore = () => {
  const navigate = useNavigate();
  const highScoreRef = useRef<[] | HighScoreProps[]>(getHighScoreFromLocalStorage());

  const onBackHandler = () => {
    navigate('/main-menu');
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[90%] max-w-[800px] flex flex-col px-6 py-6 bg-gray-700 gap-2 rounded-md">
        <button
          className="self-start px-3 py-1 border-solid border-2 border-sky-500 rounded-xl"
          onClick={onBackHandler}
        >
          Back
        </button>
        <h1 className="text-3xl font-bold text-center mb-2 text-[#00C8B4]">
          High Score
        </h1>
        {highScoreRef.current.length === 0 ? (
          <h1 className="font-bold text-center text-3xl my-4">No History</h1>
        ) : (
          <table className="border-solid border-2 border-slate-500 w-full text-center">
            <thead className="rounded-lg">
              <tr>
                <th className="p-2 bg-gray-500">Date</th>
                <th className="p-2 bg-gray-500">Correct</th>
                <th className="p-2 bg-gray-500">Wrong</th>
                <th className="p-2 bg-gray-500">Unanswered</th>
                <th className="p-2 bg-gray-500">Scores</th>
              </tr>
            </thead>
            <tbody>
              {highScoreRef.current
                .sort((a: HighScoreProps, b: HighScoreProps) => b.score - a.score)
                .map((data: HighScoreProps, index: number) => {
                  return (
                    <tr key={`highscore-${index}`}>
                      <td className="p-2">{data.date}</td>
                      <td className="p-2">{data.correct}</td>
                      <td className="p-2">{data.wrong}</td>
                      <td className="p-2">{data.unAnswered}</td>
                      <td className="p-2">{data.score}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
