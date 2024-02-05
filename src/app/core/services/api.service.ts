import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QUIZ_URL } from '../constants/urls';
import { map, Observable, take } from 'rxjs';
import { Quizzes } from '../models/quizzes';
import { Quiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  public getQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quizzes>(QUIZ_URL)
      .pipe(
        take(1),
        map((res: Quizzes) => res.quizzes)
      );
  }
}
