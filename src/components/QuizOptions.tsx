import React from 'react';
import type * as I from '../utils/interfaces';

interface QuizOptionsProps extends I.QuizAnswers {
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setResult: React.Dispatch<React.SetStateAction<I.resultProps>>;
  isEnded: () => void;
}
export const QuizOptions = ({
  incorrect_answers,
  correct_answer,
  setQuestionIndex,
  setResult,
  isEnded,
}: QuizOptionsProps) => {
  const answers = [...incorrect_answers, correct_answer].sort(
    () => Math.random() - 0.4
  );

  const CheckAnswer = (answer: string) => {
    if (answer === correct_answer) {
      setResult((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setResult((prev) => ({ ...prev, wrong: prev.wrong + 1 }));
    }
    isEnded();
    setQuestionIndex((prev: number) => prev + 1);
  };

  const option = (index: number, color: string) => {
    return (
      <button
        className={`flex text-center items-center bg-${color}-500 rounded`}
        onClick={() => {
          CheckAnswer(answers[index]);
        }}
      >
        <h3 className="w-full font-bold">{answers[index]}</h3>
      </button>
    );
  };

  return (
    <div className="grid grid-cols-2 w-[90%] mt-24 bg-black h-[30vh] m-auto gap-3">
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
