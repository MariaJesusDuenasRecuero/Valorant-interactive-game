import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { AdivinaJugadaComponent } from './adivina-jugada/adivina-jugada.component';
import { AdivinaKjComponent } from './adivina-kj/adivina-kj.component';
import { AdivinaJettComponent } from './adivina-jett/adivina-jett.component';
import { AdivinaRazeComponent } from './adivina-raze/adivina-raze.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path: 'general',component: AppComponent},
  {path: 'video',component: VideoComponent},
  {path: 'adivinaJugada',component: AdivinaJugadaComponent},
  {path: 'adivinaJett',component: AdivinaJettComponent},
  {path: 'adivinaKj',component: AdivinaKjComponent},
  {path: 'adivinaRaze',component: AdivinaRazeComponent},
  {path: 'quiz',component: QuizComponent},
  { path: '', redirectTo: 'general', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
