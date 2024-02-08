import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/quiz/quiz.module').then(m => m.QuizModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        bindToComponentInputs: true
      })

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
