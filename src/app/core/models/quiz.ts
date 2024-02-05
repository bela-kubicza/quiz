import { QuizQuestion } from './quizQuestion';

export interface Quiz {
  title: string;
  icon: string;
  questions: [QuizQuestion]
}
