import { Component, OnInit } from '@angular/core';
import { ApiService } from './core/services/api.service';
import { Quizzes } from './core/models/quizzes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'bk-quiz';
  public quizzes: Quizzes | null = null;

  constructor(
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.apiService.getQuizzes()
      .subscribe((response: Quizzes) => {
        this.quizzes = response;
      })
  }
}
