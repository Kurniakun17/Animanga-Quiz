import axios from 'axios';

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

export const displayCountDown = (countDown: number) => {
  if (countDown === 60) {
    return '01:00';
  } else if (countDown > 9) {
    return `00:${countDown}`;
  } else {
    return `00:0${countDown}`;
  }
};

export const getUserFromLocalStorage = () => {
  const storedUser = localStorage.getItem('user');
  const defaultUser = storedUser != null ? storedUser : '';
  return defaultUser;
};

export const getQuestionsFromLocalStorage = () => {
  const storedCountdown = localStorage.getItem('questions');
  if (storedCountdown !== null) {
    return JSON.parse(storedCountdown);
  }
  return [];
};

export const getCountdownFromLocalStorage = () => {
  const storedCountdown = localStorage.getItem('countdown');
  if (storedCountdown !== null) {
    return parseInt(storedCountdown);
  }
  return 60;
};

export const getResultFromLocalStorage = () => {
  const storedCountdown = localStorage.getItem('result');
  if (storedCountdown !== null) {
    return JSON.parse(storedCountdown);
  }
  return {
    correct: 0,
    wrong: 0,
    unAnswered: 0,
  };
};

export const getIndexFromLocalStorage = () => {
  const storedCountdown = localStorage.getItem('index');
  if (storedCountdown !== null) {
    return parseInt(storedCountdown);
  }
  return 0;
};

export const clearLocalStorage = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('countdown');
  localStorage.removeItem('questions');
  localStorage.removeItem('index');
  localStorage.removeItem('result');
};
