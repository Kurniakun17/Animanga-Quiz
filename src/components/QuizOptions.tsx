/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect } from 'react';
import type * as I from '../utils/interfaces';
import {
  getOptionsColor,
  type optionsColorVariants,
  shuffleArray,
} from '../utils/helpers';
import { getAnswersFromLocalStorage } from '../utils/localStorageUtils';
import { json } from 'react-router-dom';

interface QuizOptionsProps extends I.QuizAnswers {
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setQuizResult: React.Dispatch<React.SetStateAction<I.QuizResultProps>>;
  isEnded: () => void;
}
export const QuizOptions = ({
  incorrect_answers,
  correct_answer,
  setQuestionIndex,
  setQuizResult,
  isEnded,
}: QuizOptionsProps) => {
  const answers = shuffleArray([...incorrect_answers, correct_answer]);

  const CheckAnswer = (answer: string) => {
    const storageAnswers = getAnswersFromLocalStorage();
    localStorage.setItem(
      'answers',
      JSON.stringify([...storageAnswers, answer])
    );
    if (answer === correct_answer) {
      setQuizResult((prev) => {
        const resultData = { ...prev, correct: prev.correct + 1 };
        localStorage.setItem('result', JSON.stringify(resultData));
        return resultData;
      });
    } else {
      setQuizResult((prev) => {
        const resultData = { ...prev, wrong: prev.wrong + 1 };
        localStorage.setItem('result', JSON.stringify(resultData));
        return resultData;
      });
    }
    setQuestionIndex((prev: number) => {
      localStorage.setItem('index', `${prev + 1}`);
      isEnded();
      return prev + 1;
    });
  };

  const option = (index: number, color: keyof typeof optionsColorVariants) => {
    return (
      <>
        <button
          className={`flex text-center items-center ${getOptionsColor(
            color
          )} rounded-xl rounded-b-xl px-3 active:translate-y-1 w-full`}
          onClick={() => {
            CheckAnswer(answers[index]);
          }}
        >
          <h3 className="w-full font-bold">{answers[index]}</h3>
        </button>
      </>
    );
  };

  return (
    <div
      className={`absolute bottom-4 xl:bottom-8 left-0 right-0 grid grid-cols-2 xl:${
        answers.length === 2 ? 'grid-cols-2' : 'grid-cols-4'
      } w-[90%] h-[30vh] m-auto gap-3`}
    >
      {answers.length === 2 ? (
        <>
          {option(0, 'cyan')}
          {option(1, 'yellow')}
        </>
      ) : (
        <>
          {option(0, 'cyan')}
          {option(1, 'yellow')}
          {option(2, 'red')}
          {option(3, 'green')}
        </>
      )}
    </div>
  );
};
