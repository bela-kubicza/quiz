import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { quizResolver } from '../../core/resolvers/quizResolver';

const routes: Routes = [
  {
    path: '',
    component: QuizComponent,
    resolve: {quizzes: quizResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
