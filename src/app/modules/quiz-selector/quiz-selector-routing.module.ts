import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizSelectorComponent } from './components/quiz-selector/quiz-selector.component';

const routes: Routes = [
  {
    path: '',
    component: QuizSelectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizSelectorRoutingModule { }
