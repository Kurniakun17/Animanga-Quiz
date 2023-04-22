import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clearLocalStorage } from '../utils/localStorageUtils';
import type * as I from '../utils/interfaces';
import { resetQuizResult } from '../utils/helpers';

export const Navbar = ({ user, setUser, setQuizResult }: I.NavbarProps) => {
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    clearLocalStorage();
    setUser('');
    navigate('/');
    resetQuizResult(setQuizResult);
  };

  return (
    <div className="w-full p-4 px-0 bg-white dark:bg-[#2D3346] font-bold">
      <div className="flex justify-between items-center w-[90%] m-auto">
        <h2 className="text-[#2d3346] dark:text-white lg:text-xl">
          Hai, {user}
        </h2>
        <button
          className="px-3 py-1 bg-red-600 rounded-lg"
          onClick={onLogoutHandler}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
