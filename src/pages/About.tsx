/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import type * as I from '../utils/interfaces';

export const About = ({ user, setUser, setQuizResult }: I.NavbarProps) => {
  const navigate = useNavigate();

  const onBackHandler = () => {
    navigate('/main-menu');
  };
  return (
    <div className="relative h-screen">
      <Navbar
        user={user}
        setUser={setUser}
        setQuizResult={setQuizResult}
      ></Navbar>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex justify-center items-center">
        <div className="absolute flex flex-col rounded-lg p-10 py-16 justify-center items-center bg-[#fafafa] dark:bg-[#2D3346] text-center w-[80%] max-w-[650px] gap-6">
          <button
            className="absolute top-6 left-10 w-fit self-start px-3 md:text-lg pr-3.5 py-1 bg-[#2d3446] dark:bg-white dark:text-[#2d3446]  rounded-lg font-bold"
            onClick={onBackHandler}
          >
            {'<'}
          </button>
          <h1 className="font-bold text-2xl md:text-3xl text-[#00C8B4] text-center">
            Quiz<span className="text-[#2d3346] dark:text-white">ifyyy</span>
          </h1>
          <p className="text-sm text-[#2d3346] dark:text-white">
            Quizifyyy is a web application based on quizzes that I created for
            my internship submission challenge at DOT Indonesia. This project is
            built on top of the React Typescript environment. It's the second
            version of my quiz project that I built four months ago, with
            improvements made to the cleanliness of the code and the addition of
            new features.
          </p>
        </div>
      </div>
    </div>
  );
};
