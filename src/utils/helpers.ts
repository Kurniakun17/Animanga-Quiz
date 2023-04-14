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

export const getCountDownFromLocalStorage = (): number => {
  const storedCountdown = localStorage.getItem('countdown');
  const parsedCountdown = parseInt(storedCountdown as string);
  const defaultCountdown = isNaN(parsedCountdown) ? storedCountdown : 60;
  return defaultCountdown as number;
};
