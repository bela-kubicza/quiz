import { Component } from '@angular/core';
import { ApiService } from './core/services/api.service';
import { Quiz } from './core/models/quiz';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'bk-quiz';
  public quizzes: Observable<Quiz[]> | null = null;

  constructor(
    private apiService: ApiService
  ) {
    this.quizzes = this.apiService.getQuizzes();
  }
}
