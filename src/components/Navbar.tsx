import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clearLocalStorage } from '../utils/helpers';
import type * as I from '../utils/interfaces'

interface NavbarProps {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  setQuizResult: React.Dispatch<React.SetStateAction<I.QuizResultProps>>;
}

export const Navbar = ({ user, setUser, setQuizResult }: NavbarProps) => {
  const navigate = useNavigate();
  const onLogoutHandler = () => {
    clearLocalStorage();
    setUser('');
    navigate('/');
    setQuizResult({
      correct: 0,
      wrong: 0,
      unAnswered: 0,
    });
  };

  return (
    <div className="w-full p-4 px-0 bg-[#2D3346] font-bold">
      <div className="flex justify-between w-[90%] m-auto">
        <h2 className="">Hai, {user}</h2>
        <button className="" onClick={onLogoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
};
