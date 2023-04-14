import React from 'react';
import type * as I from '../utils/interfaces';
import { colors } from '../utils/helpers';

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
  const answers = [...incorrect_answers, correct_answer].sort(
    () => Math.random() - 0.4
  );

  const CheckAnswer = (answer: string) => {
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
    isEnded();
    setQuestionIndex((prev: number) => {
      localStorage.setItem('index', `${prev + 1}`);
      return prev + 1;
    });
  };

  const option = (index: number) => {
    switch (index) {
      case 0:
        return (
          <button
            className={`flex text-center items-center bg-cyan-500 rounded px-3`}
            onClick={() => {
              CheckAnswer(answers[index]);
            }}
          >
            <h3 className="w-full font-bold">{answers[index]}</h3>
          </button>
        );
      case 1:
        return (
          <button
            className={`flex text-center items-center bg-yellow-500 rounded px-3`}
            onClick={() => {
              CheckAnswer(answers[index]);
            }}
          >
            <h3 className="w-full font-bold">{answers[index]}</h3>
          </button>
        );
      case 2:
        return (
          <button
            className={`flex text-center items-center bg-red-500 rounded px-3`}
            onClick={() => {
              CheckAnswer(answers[index]);
            }}
          >
            <h3 className="w-full font-bold">{answers[index]}</h3>
          </button>
        );
      case 3:
        return (
          <button
            className={`flex text-center items-center bg-green-500 rounded px-3`}
            onClick={() => {
              CheckAnswer(answers[index]);
            }}
          >
            <h3 className="w-full font-bold">{answers[index]}</h3>
          </button>
        );
    }
  };

  return (
    <div className="grid grid-cols-2 w-[90%] mt-24 h-[30vh] m-auto gap-3">
      {answers.length === 2 ? (
        <>
          {option(0)}
          {option(1)}
        </>
      ) : (
        <>
          {option(0)}
          {option(1)}
          {option(2)}
          {option(3)}
        </>
      )}
    </div>
  );
};
