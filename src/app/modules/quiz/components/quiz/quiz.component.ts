import { Component, Input } from '@angular/core';
import { Quiz } from '../../../../core/models/quiz';
import { NOT_SELECTED, State } from './quiz.constants';
import { QuizQuestion } from '../../../../core/models/quizQuestion';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  @Input('quizzes') quizzes: Quiz[] = [];

  public readonly State = State;
  public state: State = State.QUIZ_TOPIC_SELECTOR;
  public selectedQuizIndex: number = NOT_SELECTED;
  public currentQuestionIndex: number = NOT_SELECTED;
  public rightAnswerIndex: number = NOT_SELECTED;
  public selectedOptionIndex: number = NOT_SELECTED;

  private rightAnswerCount: number = 0;

  public onQuizTopicSelect(index: number): void {
    this.selectedQuizIndex = index;
    this.currentQuestionIndex = 0;
    this.state = State.QUIZ;
  }

  public onAnswerSelect(index: number): void {
    this.selectedOptionIndex = index;
  }

  public onAnswerSubmit(): void {
    this.revealRightAnswer();
  }

  public revealRightAnswer() {
    const currentQuestion: QuizQuestion = this.quizzes[this.selectedQuizIndex].questions[this.currentQuestionIndex];

    this.rightAnswerIndex = currentQuestion.options.indexOf(currentQuestion.answer);
  }
}
