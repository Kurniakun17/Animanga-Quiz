import React, { useEffect, useState } from 'react';
import {
  displayCountDown,
  getCountdownFromLocalStorage,
} from '../utils/helpers';

interface MiscbarProps {
  questionIndex: number;
  isTimeOut: () => void;
}

export const Miscbar = ({ questionIndex, isTimeOut }: MiscbarProps) => {
  const [countdown, setCountdown] = useState<number>(
    getCountdownFromLocalStorage()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountDown) => prevCountDown - 1);
      localStorage.setItem('countdown', `${countdown}`);
      if (countdown === 0) {
        isTimeOut();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  console.log(countdown);

  return (
    <div className="flex justify-between mt-16 w-full bg-[#2D3346] rounded-lg py-2 px-4 lg:py-3 text-[16px] ">
      <h3>{questionIndex + 1}/10</h3>
      <h3>{displayCountDown(countdown)}</h3>
    </div>
  );
};
