import React from 'react';
import { type QuizResultProps } from '../utils/interfaces';

interface HighScoreProps extends QuizResultProps {
  date: string;
  user: string;
  score: number;
}

export const HighScoreTable = ({
  highScoreData,
}: {
  highScoreData: HighScoreProps[];
}) => {
  return (
    <div className="rounded-lg overflow-auto">
      <table className=" w-full text-center">
        <thead>
          <tr className="bg-[#2d3346]">
            <th className="p-3 text-xs md:text-base">Date</th>
            <th className="p-3 text-xs md:text-base">User</th>
            <th className="p-3 text-xs md:text-base">Answered</th>
            <th className="p-3 text-xs md:text-base">Correct</th>
            <th className="p-3 text-xs md:text-base">Wrong</th>
            <th className="p-3 text-xs md:text-base">Scores</th>
          </tr>
        </thead>
        <tbody>
          {highScoreData.map((data: HighScoreProps, index: number) => {
            return (
              <tr key={`highscore-${index}`}>
                <td className="p-3 text-[10px] md:text-sm bg-slate-600">
                  {data.date}
                </td>
                <td className="p-3 text-[10px] md:text-sm bg-slate-600">
                  {data.user}
                </td>
                <td className="p-3 text-[10px] md:text-sm bg-slate-600">
                  {data.correct + data.wrong}
                </td>
                <td className="p-3 text-[10px] md:text-sm bg-slate-600">
                  {data.correct}
                </td>
                <td className="p-3 text-[10px] md:text-sm bg-slate-600">
                  {data.wrong}
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
  );
};
