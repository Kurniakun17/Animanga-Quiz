import axios from 'axios';
import type * as I from './interfaces';
import { type NavigateFunction } from 'react-router';

export const colors = ['cyan', 'yellow', 'red', 'green'];

export const fetchQuestion = async () => {
  try {
    const response = await axios.get(
      'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy'
    );
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const isLoggedIn = (user: string, navigate: NavigateFunction) => {
  if (user === '') {
    navigate('/');
  }
};

export const displayCountDown = (countDown: number) => {
  if (countDown === 60) {
    return '01:00';
  } else if (countDown > 9) {
    return `00:${countDown}`;
  } else {
    return `00:0${countDown}`;
  }
};

export const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.4);
};

export const generateDate = () => {
  const date = new Date();
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
}

export const colorVariants = {
  cyan: 'bg-cyan-500 hover:bg-cyan-600 border-b-8 border-b-cyan-700',
  yellow: 'bg-yellow-500 hover:bg-yellow-600 border-b-8 border-b-yellow-700',
  red: 'bg-red-500 hover:bg-red-600 border-b-8 border-b-red-700',
  green: 'bg-green-500 hover:bg-green-600 border-b-8 border-b-green-700',
};

export const resetQuizResult = (
  setQuizResult: React.Dispatch<React.SetStateAction<I.QuizResultProps>>
) => {
  setQuizResult({
    correct: 0,
    wrong: 0,
    unAnswered: 0,
  });
};

export const getColorVariant = (color: keyof typeof colorVariants) => {
  return colorVariants[color];
};
