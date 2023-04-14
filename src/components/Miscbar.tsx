import React from 'react';

interface MiscbarProps {
  questionIndex: number;
}

export const Miscbar = ({ questionIndex }: MiscbarProps) => {
  return (
    <div className="flex justify-between mt-16 w-full bg-[#2D3346] rounded-lg py-2 px-4 lg:py-3 text-[20px]">
      <h3>{questionIndex + 1}/10</h3>
      <h3>00:50</h3>
    </div>
  );
};
