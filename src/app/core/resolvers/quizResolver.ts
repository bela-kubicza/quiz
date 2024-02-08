import { ResolveFn } from '@angular/router';
import { ApiService } from '../services/api.service';
import { inject } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Quiz } from '../models/quiz';

export const quizResolver: ResolveFn<Observable<Quiz[]>> =
  (): Observable<Quiz[]> => inject(ApiService).getQuizzes();
