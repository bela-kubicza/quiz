import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz-selector/quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    QuizComponent
  ],
  imports: [
    QuizRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class QuizModule { }
