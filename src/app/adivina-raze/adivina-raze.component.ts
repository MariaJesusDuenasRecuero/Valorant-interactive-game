import {Component, OnDestroy, OnInit,} from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-adivina-raze',
  templateUrl: './adivina-raze.component.html',
  styleUrls: ['./adivina-raze.component.scss']
})
export class AdivinaRazeComponent implements OnInit, OnDestroy {
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
            src: '../../assets/videos/clip-raze.mp4',
            type: 'video/mp4',
          },
        ],
      });
  
      var myPlayer = videojs('videojs');
      let firstTime = true;
      let secondTime = true;
      let thirdTime = true;
      
      this.player.on('timeupdate', function(e) {
        if (myPlayer.currentTime() >= 31 && firstTime == true) {
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
              <h3>A Raze le encanta el breakdance y formó parte de un grupo de B-Girls en Salvador. Se puede ver mas de salvador en el video de música <a href="https://www.youtube.com/watch?v=ZGvz7jTVbc8" target="_blank" style="color: #FD4556; font-family: 'Oswald', sans-serif; font-size:20px;"> “The color of the town” </a>.</h3>
              <img  height=250px src="../../assets/images/raze.jpg"> 
              </div>
            `;
            myPlayer.play();
  
        const modal = myPlayer.createModal(contentEl, {});
  
        if (myPlayer.currentTime() >= 32){
          modal?.close();
        }  
  
        modal?.on('modalclose', () => {
          myPlayer.play();
        });
        }
  
        if (myPlayer.currentTime() >= 46 && secondTime == true) {
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
            <button type="button" id='boton1' class="btn btn-primary" onClick="
            document.getElementById('perder').style.display='block';
            document.getElementById('imgperder').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2Correcta').disabled=true;
            document.getElementById('boton3').disabled=true;
            ">1.Jett está detrás de Raze y la mata con un cuchillo</button>
            <br/><br/>
            <button type="button" id='boton2Correcta' class="btn btn-primary" onClick="
            document.getElementById('ganar').style.display='block'
            document.getElementById('imgGanar').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2Correcta').disabled=true;
            document.getElementById('boton3').disabled=true;
            ">2. Jett apunta con una operator a Raze pero falla y Raze mata a Jett consiguiendo la ACE </button>
            <br/><br/>
            <button type="button" id='boton3' class="btn btn-primary"  onClick="
            document.getElementById('perder').style.display='block';
            document.getElementById('imgperder').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2Correcta').disabled=true;
            document.getElementById('boton3').disabled=true;
            ">3. Jett está esperando a que Raze pickee y mata a Raze con la operator</button>
            <p id="ganar">SI, ES CORRECTO! :D</p>
            <p id="perder">NO :(, MÁS SUERTE LA PRÓXIMA VEZ</p>
            <img id='imgperder' height=150px src="../../assets/grafitis/grafiti5.jpg"> 
            <img id='imgGanar' height=150px src="../../assets/grafitis/grafiti20.webp"> 
            </div>

          `;
  
          const modal = myPlayer.createModal(contentEl, {});
  
          if (myPlayer.currentTime() >= 47){
            modal?.close();
          }  
    
          modal?.on('modalclose', () => {
            myPlayer.play();
          });
        }
  
        if (myPlayer.currentTime() >= 52 && thirdTime == true) {
          myPlayer.pause();
          thirdTime = false;
          const contentEl = document.createElement('div');
          contentEl.innerHTML = `
          <div>
          <br>
          <br>
          <h1>
            <strong style="font-family: 'Oswald', sans-serif">¿Qué rango tenía nuestra Raze?</strong>          
          </h1>
          <button type="button" id='boton1' class="btn btn-primary" onClick="
            document.getElementById('perder').style.display='block';
            document.getElementById('imgperder').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2').disabled=true;
            document.getElementById('boton3Correcta').disabled=true;
            document.getElementById('boton4').disabled=true;
          ">1. Platino 3</button>
          <br/><br/>
          <button type="button" id='boton2' class="btn btn-primary" onClick="
            document.getElementById('perder').style.display='block';
            document.getElementById('imgperder').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2').disabled=true;
            document.getElementById('boton3Correcta').disabled=true;
            document.getElementById('boton4').disabled=true;
          ">2. Inmortal 3 </button>
          <br/><br/>
          <button type="button" id='boton3Correcta' class="btn btn-primary"  onClick="
            document.getElementById('ganar').style.display='block';
            document.getElementById('imgGanar').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2').disabled=true;
            document.getElementById('boton3Correcta').disabled=true;
            document.getElementById('boton4').disabled=true;
          ">3. Radiante</button>
          <br/><br/>
          <button type="button" id='boton4' class="btn btn-primary"  onClick="
            document.getElementById('perder').style.display='block';
            document.getElementById('imgperder').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2').disabled=true;
            document.getElementById('boton3Correcta').disabled=true;
            document.getElementById('boton4').disabled=true;
          ">4. Inmortal 2</button>
          <p id="ganar">SI, ES CORRECTO! :D</p>
          <p id="perder">NO :(, MÁS SUERTE LA PRÓXIMA VEZ</p>
          <img id='imgperder' style="width: 150px;" src="../../assets/grafitis/grafiti7.jpg"> 
          <img id='imgGanar' height=150px src="../../assets/grafitis/grafiti21.webp"> 
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