import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QUIZ_URL } from '../constants/urls';
import { Observable, take } from 'rxjs';
import { Quizzes } from '../models/quizzes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  public getQuizzes(): Observable<Quizzes> {
    return this.http.get<Quizzes>(QUIZ_URL).pipe(take(1));
  }
}
