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

export const clearLocalStorage = (keepUser: boolean = false) => {
  if (!keepUser) {
    localStorage.removeItem('user');
  }
  localStorage.removeItem('countdown');
  localStorage.removeItem('questions');
  localStorage.removeItem('index');
  localStorage.removeItem('result');
};
