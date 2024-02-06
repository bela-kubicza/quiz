import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizSelectorComponent } from './components/quiz-selector/quiz-selector.component';
import { QuizSelectorRoutingModule } from './quiz-selector-routing.module';



@NgModule({
  declarations: [
    QuizSelectorComponent
  ],
  imports: [
    QuizSelectorRoutingModule,
    CommonModule
  ]
})
export class QuizSelectorModule { }
