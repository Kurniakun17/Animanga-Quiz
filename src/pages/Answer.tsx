import React, { useEffect, useRef, useState } from 'react';
import {
  clearLocalStorage,
  getQuestionsFromLocalStorage,
} from '../utils/localStorageUtils';
import { isLoggedIn } from '../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { QuestionPanel } from '../components/QuestionPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

export const Answer = ({ user }: { user: string }) => {
  const [answerIndex, setAnswerIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const question = useRef(getQuestionsFromLocalStorage());
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn(user, navigate);
  }, []);

  const onXmarkHandler = () => {
    clearLocalStorage(true);
    navigate('/main-menu');
  };

  const onNavigateQuestionHandler = (type: string) => {
    setFlipped(false);
    if (type === 'next') {
      setAnswerIndex((prev) => prev + 1);
    } else {
      setAnswerIndex((prev) => prev - 1);
    }
  };

  const onFlippedHandler = () => {
    flipped ? setFlipped(false) : setFlipped(true);
  };

  return (
    <div className="flex flex-col gap-8 h-screen justify-center items-center w-[80%] max-w-[600px] m-auto">
      <div className="absolute top-0 right-0 p-4 w-full flex gap-4 text-[#2d3346] dark:text-white">
        <button
          className="p-2 px-4 bg-white w-fit rounded-md dark:bg-[#2d3346]"
          onClick={onXmarkHandler}
        >
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </button>
        <h2 className="p-2 bg-white w-fit rounded-md dark:bg-[#2d3346]">
          {answerIndex + 1}/10
        </h2>
      </div>
      <div className="w-full" onClick={onFlippedHandler}>
        <QuestionPanel
          difficulty={question.current[answerIndex].difficulty}
          text={
            flipped
              ? `Answer:  ${
                  question.current[answerIndex].correct_answer as string
                }`
              : question.current[answerIndex].question
          }
          category={question.current[answerIndex].category}
        ></QuestionPanel>
      </div>
      <div className="flex w-full justify-between">
        <button
          className="flex items-center gap-2 px-2 py-1 bg-slate-700 disabled:bg-slate-500 disabled:text-slate-300 rounded-md"
          onClick={() => {
            onNavigateQuestionHandler('back');
          }}
          disabled={answerIndex === 0}
        >
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>Back
        </button>
        <button
          className="flex items-center gap-2 px-2 py-1 bg-slate-700 disabled:bg-slate-500 disabled:text-slate-300 rounded-md"
          onClick={() => {
            onNavigateQuestionHandler('next');
          }}
          disabled={answerIndex === 9}
        >
          Next<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};
