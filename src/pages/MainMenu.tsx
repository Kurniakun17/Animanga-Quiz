import React from 'react';
import { Navbar } from '../components/Navbar';
import type * as I from '../utils/interfaces';

interface MainMenuProps {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  setQuizResult: React.Dispatch<React.SetStateAction<I.QuizResultProps>>;
}

export const MainMenu = ({ user, setUser, setQuizResult }: MainMenuProps) => {
  return (
    <>
      <Navbar
        user={user}
        setUser={setUser}
        setQuizResult={setQuizResult}
      ></Navbar>
      <div className="h-screen justify-center items-center">
        <h1 className="font-bold mb-8 text-4xl text-[#00C8B4]">
          Quiz<span className="text-white">ify</span>
        </h1>
        <div className="flex flex-col gap-4 w-[70%] max-w-[300px] m-auto">
          <button className="py-4 w-full bg-green-500 rounded-xl">Play</button>
          <button className="py-4 w-full bg-green-500 rounded-xl">
            High Score
          </button>
          <button className="py-4 w-full bg-green-500 rounded-xl">About</button>
        </div>
      </div>
    </>
  );
};
