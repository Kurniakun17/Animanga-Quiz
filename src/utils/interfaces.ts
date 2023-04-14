export interface QuizAnswers {
  incorrect_answers: string[];
  correct_answer: string;
}

export interface QuizQuestion extends QuizAnswers {
  category: string;
  difficulty: string;
  question: string;
  type: string;
}

export interface resultProps{
  correct: number;
  wrong: number;
  unAnswered: number;
}