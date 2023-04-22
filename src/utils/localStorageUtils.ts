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
  const storedIndex = localStorage.getItem('index');
  if (storedIndex !== null) {
    return parseInt(storedIndex);
  }
  return 0;
};


export const getHighScoreFromLocalStorage = () => {
  const storedHighScore = localStorage.getItem('highscore');
  if (storedHighScore !== null ) {
    return JSON.parse(storedHighScore);
  }
  return [];
};

export const getThemeFromLocalStorage = () => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme !== null) {
    return storedTheme;
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.setItem('theme', 'dark');
    return 'dark';
  } else {
    localStorage.setItem('theme', 'light');
    return 'light';
  }
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
