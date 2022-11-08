import {Component, OnDestroy, OnInit} from '@angular/core';
import videojs from 'video.js';


@Component({
  selector: 'app-adivina-jett',
  templateUrl: './adivina-jett.component.html',
  styleUrls: ['./adivina-jett.component.scss']
})
export class AdivinaJettComponent implements OnInit {
  player?: videojs.Player;

  constructor() {}

  // Instantiate a Video.js player OnInit
  ngOnInit(): void {
    this.player = videojs('videojs', {
      controlBar: {
        fullscreenToggle: false
      },
      sources: [
        {
          src: '../../assets/videos/clip-jett.mp4',
          type: 'video/mp4',
        },
      ],
    });

    var myPlayer = videojs('videojs');
    let firstTime = true;
    let secondTime = true;
    let thirdTime = true;
    
    this.player.on('timeupdate', function(e) {
      if (myPlayer.currentTime() >= 3 && firstTime == true) {
          firstTime = false;
          const contentEl = document.createElement('div');
          contentEl.innerHTML = `
          <div>
            <br>
            <br>
            <h1>
              <strong>¿Sabías que...?</strong>
            </h1>
            <br/>
            <h3>Una línea de voz no utilizada dentro de los archivos del juego de Raze la tiene llamando a Jett "Joon-Hee". Al principio se pensó que este era su nombre. Finalmente se reveló que el verdadero nombre de Jett era <span style="color: #0FD2B1; font-family: 'Oswald', sans-serif; font-size:20px;" >Sunwoo Han</span>.</h3>
            <img height=200px src="../../assets/images/jett.jpg"> 
            </div>
          `;
          myPlayer.play();

      const modal = myPlayer.createModal(contentEl, {});

      if (myPlayer.currentTime() >= 4){
        modal?.close();
      }  

      modal?.on('modalclose', () => {
        myPlayer.play();
      });
      }

      if (myPlayer.currentTime() >= 20 && secondTime == true) {
        myPlayer.pause();
        secondTime = false;
        const contentEl = document.createElement('div');
        contentEl.innerHTML = `
        <div>
          <br>
          <br>
          <h1>
            <strong style="font-family: 'Oswald', sans-serif">¿Qué ocurre a continuación?</strong>          
          </h1>
          <button type="button" id='boton1Correcta' class="btn btn-primary" onClick="
          document.getElementById('ganar').style.display='block';
          document.getElementById('boton1Correcta').disabled=true;
          document.getElementById('boton2').disabled=true;
          document.getElementById('boton3').disabled=true;
          document.getElementById('boton4').disabled=true;
          ">1. Raze no aparece y Jett gana la ronda defusando la spike a tiempo.</button>
          <br/><br/>
          <button type="button" id='boton2' class="btn btn-primary"  onClick="
          document.getElementById('perder').style.display='block';
          document.getElementById('imgperder').style.display='block';
          document.getElementById('boton1Correcta').disabled=true;
          document.getElementById('boton2').disabled=true;
          document.getElementById('boton3').disabled=true;
          document.getElementById('boton4').disabled=true;
          ">2. Raze aparece y mata a Jett</button>
          <br/><br/>
          <button type="button" id='boton3' class="btn btn-primary" onClick="
          document.getElementById('perder').style.display='block';
          document.getElementById('imgperder').style.display='block';
          document.getElementById('boton1Correcta').disabled=true;
          document.getElementById('boton2').disabled=true;
          document.getElementById('boton3').disabled=true;          
          document.getElementById('boton4').disabled=true;
          ">3. Raze no aparece pero Jett no tiene suficiente tiempo para defusar la ronda y pierden.</button>
          <br/><br/>
          <button type="button" id='boton4' class="btn btn-primary"  onClick="
          document.getElementById('perder').style.display='block'
          document.getElementById('imgperder').style.display='block';
          document.getElementById('boton1Correcta').disabled=true;
          document.getElementById('boton2').disabled=true;
          document.getElementById('boton3').disabled=true;
          document.getElementById('boton4').disabled=true;
          ">4. Raze aparece, Jett mata a Raze pero no tiene suficiente tiempo para defusar y pierden la ronda.</button>
            <p id="ganar">SI, ES CORRECTO! :D</p>
            <p id="perder">NO :(, MÁS SUERTE LA PRÓXIMA VEZ</p>
            <img id='imgperder' height=150px src="../../assets/grafitis/grafiti10.jpg"> 
          </div>
        `;

        const modal = myPlayer.createModal(contentEl, {});

        if (myPlayer.currentTime() >= 21){
          modal?.close();
        }  
  
        modal?.on('modalclose', () => {
          myPlayer.play();
        });
      }

      if (myPlayer.currentTime() >= 32 && thirdTime == true) {
        myPlayer.pause();
        thirdTime = false;
        const contentEl = document.createElement('div');
        contentEl.innerHTML = `
        <div>
          <br>
          <br>
          <h1>
            <strong style="font-family: 'Oswald', sans-serif">¿Qué rango tenía nuestra Jett?</strong>          
            </h1>
            <button type="button" id='boton1' class="btn btn-primary" onClick="
              document.getElementById('perder').style.display='block';
              document.getElementById('imgperder').style.display='block';
              document.getElementById('boton1').disabled=true;
              document.getElementById('boton2Correcta').disabled=true;
              document.getElementById('boton3').disabled=true;
              document.getElementById('boton4').disabled=true;
            ">1. Plata 1</button>
            <br><br>
            <button type="button" id='boton2Correcta' class="btn btn-primary" onClick="
              document.getElementById('ganar').style.display='block';
              document.getElementById('boton1').disabled=true;
              document.getElementById('boton2Correcta').disabled=true;
              document.getElementById('boton3').disabled=true;
              document.getElementById('boton4').disabled=true;
            ">2. Bronce 3 </button>
            <br/><br/>
            <button type="button" id='boton3' class="btn btn-primary"  onClick="
              document.getElementById('perder').style.display='block';
              document.getElementById('imgperder').style.display='block';
              document.getElementById('boton1').disabled=true;
              document.getElementById('boton2Correcta').disabled=true;
              document.getElementById('boton3').disabled=true;
              document.getElementById('boton4').disabled=true;
            ">3. Plata 2</button>
            <br/><br/>
            <button type="button" id='boton4' class="btn btn-primary"  onClick="
              document.getElementById('perder').style.display='block';
              document.getElementById('imgperder').style.display='block';
              document.getElementById('boton1').disabled=true;
              document.getElementById('boton2Correcta').disabled=true;
              document.getElementById('boton3').disabled=true;
              document.getElementById('boton4').disabled=true;
            ">4. Bronce 2</button>
            <p id="ganar">SI, ES CORRECTO! :D</p>
            <p id="perder">NO :(, MÁS SUERTE LA PRÓXIMA VEZ</p>
            <img id='imgperder' height=150px src="../../assets/grafitis/grafiti6.jpg"> 
          </div>
        `;

        const modal = myPlayer.createModal(contentEl, {});
        modal?.on('modalclose', () => {
          myPlayer.play();
        });
      }

    });
  }

  // Dispose the player OnDestroy
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}