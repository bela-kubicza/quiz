import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';

@NgModule({
  declarations: [
    QuizComponent
  ],
  imports: [
    QuizRoutingModule,
    CommonModule
  ]
})
export class QuizModule { }
