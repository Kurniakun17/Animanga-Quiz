import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn, resetQuizResult } from '../utils/helpers';
import { clearLocalStorage } from '../utils/localStorageUtils';
import type * as I from '../utils/interfaces';


export const Login = ({ user, setUser, setQuizResult }: I.NavbarProps) => {
  const userInput = useRef<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn(user, navigate);
  }, []);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    userInput.current = (e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearLocalStorage();
    setUser(userInput.current);
    resetQuizResult(setQuizResult);
    localStorage.setItem('user', userInput.current);
    navigate('/main-menu');
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="font-bold mb-8 text-4xl text-[#00C8B4]">
        Quiz<span className="text-[#2d3356] dark:text-white">ifyyy</span>
      </h1>
      <form
        className="flex flex-col bg-white dark:bg-[#2d3346] gap-6 text-center px-6 py-9 rounded-lg border-b-4 border-b-[#00C8B4] w-[70%] max-w-[300px]"
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
      >
        <h1 className="font-bold text-2xl text-[#2d3356] dark:text-white">
          Login
        </h1>
        <input
          className="rounded-lg bg-[#eaeaea] text-black px-2 py-2 text-xs w-full "
          type="text"
          onChange={(e) => {
            onChangeHandler(e);
          }}
          placeholder="username"
          required
        />
        <button className="font-bold bg-[#00C8B4] rounded-md py-1 w-full">
          Login
        </button>
      </form>
    </div>
  );
};
