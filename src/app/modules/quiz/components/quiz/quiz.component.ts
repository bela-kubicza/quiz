import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../../../../core/models/quiz';
import { NOT_SELECTED, State } from './quiz.constants';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  @Input('quizzes') quizzes: Quiz[] = [];

  public optionsToDisplay: string[] = [];
  public state: State = State.QUIZ_TOPIC_SELECTOR;

  protected readonly State = State;

  private selectedQuizIndex: number = NOT_SELECTED;
  private currentQuestionIndex: number = NOT_SELECTED;
  private selectedOptionIndex: number = NOT_SELECTED;
  private rightAnswerCount: number = 0;

  public ngOnInit(): void {
    this.optionsToDisplay = this.quizzes.map((quiz: Quiz): string => quiz.title);
  }

  public onSelect(index: number): void {
    if (this.selectedQuizIndex === NOT_SELECTED) {
      this.selectedQuizIndex = index;
      this.currentQuestionIndex = 0;
      this.optionsToDisplay = this.quizzes[this.selectedQuizIndex].questions[this.currentQuestionIndex].options;
      this.state = State.QUIZ;
    } else {
      this.selectedOptionIndex = index;
    }
  }
}
