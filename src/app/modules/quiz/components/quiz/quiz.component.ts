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
  public rightOptionIndex: number = NOT_SELECTED;
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
    this.rightOptionIndex = this.getRightOption();

    if (this.rightOptionIndex === this.selectedOptionIndex) {
      this.rightAnswerCount += 1;
    }

    setTimeout(()=> {
      this.rightOptionIndex = NOT_SELECTED;
      this.currentQuestionIndex += 1;
    }, 2000);
  }

  public getRightOption(): number {
    const currentQuestion: QuizQuestion = this.quizzes[this.selectedQuizIndex].questions[this.currentQuestionIndex];

    return currentQuestion.options.indexOf(currentQuestion.answer);
  }
}
