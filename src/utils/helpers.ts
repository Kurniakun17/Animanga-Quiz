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

