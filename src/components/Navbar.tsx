import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clearLocalStorage } from '../utils/localStorageUtils';
import type * as I from '../utils/interfaces';
import { resetQuizResult } from '../utils/helpers';

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
    resetQuizResult(setQuizResult);
  };

  return (
    <div className="w-full p-4 px-0 bg-[#2D3346] font-bold">
      <div className="flex justify-between items-center w-[90%] m-auto">
        <h2 className="">Hai, {user}</h2>
        <button className="px-3 py-1 bg-red-600 rounded-lg" onClick={onLogoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
};
