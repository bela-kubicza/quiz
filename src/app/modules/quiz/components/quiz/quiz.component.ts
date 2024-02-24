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
  public readonly NOT_SELECTED = NOT_SELECTED;

  public state: State = State.QUIZ_TOPIC_SELECTOR;
  public selectedQuizIndex: number = NOT_SELECTED;
  public currentQuestionIndex: number = NOT_SELECTED;
  public rightOptionIndex: number = NOT_SELECTED;
  public selectedOptionIndex: number = NOT_SELECTED;
  public rightAnswerCount: number = 0;
  public isSubmitted: boolean = false;
  
  public onQuizTopicSelect(index: number): void {
    this.selectedQuizIndex = index;
    this.currentQuestionIndex = 0;
    this.state = State.QUIZ;
  }

  public onAnswerSelect(index: number): void {
    this.selectedOptionIndex = index;
  }

  public isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.quizzes[this.selectedQuizIndex].questions.length - 2;
  }

  public onCTACLick(): void {
    if (!this.isLastQuestion()) {
      if (this.isSubmitted) {
        this.rightOptionIndex = NOT_SELECTED;
        this.selectedOptionIndex = NOT_SELECTED;
        this.currentQuestionIndex += 1;
        this.isSubmitted = false;
      } else {
        this.rightOptionIndex = this.getRightOptionIndex();

        if (this.rightOptionIndex === this.selectedOptionIndex) {
          this.rightAnswerCount += 1;
        }

        this.isSubmitted = true;
      }
    } else {
      this.state = State.QUIZ_RESULT
    }
  }

  public getRightOptionIndex(): number {
    const currentQuestion: QuizQuestion = this.quizzes[this.selectedQuizIndex].questions[this.currentQuestionIndex];

    return currentQuestion.options.indexOf(currentQuestion.answer);
  }

  public reset() {
    this.state = State.QUIZ_TOPIC_SELECTOR;
    this.selectedQuizIndex = NOT_SELECTED;
    this.currentQuestionIndex = NOT_SELECTED;
    this.rightOptionIndex = NOT_SELECTED;
    this.selectedOptionIndex = NOT_SELECTED;
    this.rightAnswerCount = 0;
  }
}
