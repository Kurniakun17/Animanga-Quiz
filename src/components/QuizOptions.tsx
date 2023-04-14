import React from 'react';
import type * as I from '../utils/interfaces';

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
        const resultData = ({ ...prev, correct: prev.correct + 1 })
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

  const option = (index: number, color: string) => {
    return (
      <button
        className={`flex text-center items-center bg-${color}-500 rounded px-3`}
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
