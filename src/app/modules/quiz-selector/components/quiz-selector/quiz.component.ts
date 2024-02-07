import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../../../core/models/quiz';
import { ApiService } from '../../../../core/services/api.service';
import { NOT_SELECTED, State } from './quiz.constants';

@Component({
  selector: 'app-quiz-selector',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  public optionsToDisplay: string[] = [];

  private quizzes: Quiz[] = [];
  private state: State = State.QUIZ_TOPIC_SELECTOR;
  private selectedQuizIndex: number = NOT_SELECTED;
  private currentQuestionIndex: number = NOT_SELECTED;
  private selectedOptionIndex: number = NOT_SELECTED
  private rightAnswerCount: number = 0;

  constructor(
    private apiService: ApiService
  ) {
  }

  public ngOnInit(): void {
    this.loadQuizzes();
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



  private loadQuizzes() {
    this.apiService.getQuizzes()
      .subscribe((allQuizzes: Quiz[]) => {
        this.quizzes = allQuizzes;
        this.optionsToDisplay = allQuizzes.map((quiz: Quiz) => quiz.title);
      });
  }
}
