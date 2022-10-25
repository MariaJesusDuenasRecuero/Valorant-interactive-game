import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { VideoComponent } from './video/video.component';
import { AdivinaJugadaComponent } from './adivina-jugada/adivina-jugada.component';
import { InicioComponent } from './inicio/inicio.component';
import { AdivinaKjComponent } from './adivina-kj/adivina-kj.component';
import { AdivinaJettComponent } from './adivina-jett/adivina-jett.component';
import { QuizComponent } from './quiz/quiz.component';


@NgModule({
  declarations: [AppComponent, VideoComponent, AdivinaJugadaComponent, InicioComponent, AdivinaKjComponent, AdivinaJettComponent, QuizComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
