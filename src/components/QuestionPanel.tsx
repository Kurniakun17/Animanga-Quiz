import React from 'react';
import {
  toCamelCase,
  type difficultyColorVariants,
  getDifficultyColor,
} from '../utils/helpers';
import he from 'he';
interface QuestionPanelProps {
  difficulty: string;
  category: string;
  question: string;
}

export const QuestionPanel = ({
  difficulty,
  category,
  question,
}: QuestionPanelProps) => {
  return (
    <div className="relative flex items-center text-center bg-[#2D3346] h-[30vh] rounded-lg px-8">
      <div className="absolute top-2 left-0 flex w-full px-4 py-2 justify-between">
        <h4
          className={`block py-1 px-2 font-bold bg-white ${getDifficultyColor(
            difficulty as keyof typeof difficultyColorVariants
          )} rounded text-[10px] md:text-xs`}
        >
          {toCamelCase(difficulty)}
        </h4>
        <h4 className="block py-1 px-2 font-bold bg-[#00C8B4] rounded text-[10px] md:text-xs">
          {category}
        </h4>
      </div>
      <h3 className="w-full font-bold xl:text-lg">
        {he.decode(question)}
      </h3>
    </div>
  );
};
