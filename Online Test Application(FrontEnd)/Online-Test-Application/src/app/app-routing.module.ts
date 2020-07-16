import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ListComponent } from './list/list.component';
import { StoreComponent } from './store/store.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ScoreComponent } from './score/score.component';


const routes: Routes = [
 {path:'playQuiz',component:QuizComponent},
 {path:'review',component:ListComponent},
 {path:'store',component:StoreComponent},
 {path: 'back',component:QuizComponent},
 {path: 'instructions',component:InstructionsComponent},
 {path: 'score',component:ScoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
