import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../../../../core/models/quiz';
import { ApiService } from '../../../../core/services/api.service';

@Component({
  selector: 'app-quiz-selector',
  templateUrl: './quiz-selector.component.html',
  styleUrls: ['./quiz-selector.component.scss']
})
export class QuizSelectorComponent {
  public quizzes: Observable<Quiz[]> | null = null;

  constructor(
    private apiService: ApiService
  ) {
    this.quizzes = this.apiService.getQuizzes();
  }
}
