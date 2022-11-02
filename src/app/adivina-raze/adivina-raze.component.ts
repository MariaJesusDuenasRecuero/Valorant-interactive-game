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
            <style>
              img{
                width: 300px;
                height: auto;
                margin:auto;
                display:block;
              }
              a{
                text-decoration:none;
              }
  
            </style>
            
            <div>
              <br>
              <br>
              <h1>
                <strong style="font-family: 'Oswald', sans-serif">¿Sabías que...?</strong>
              </h1>
              <br/>
              <h3>A Raze le encanta el breakdance y formó parte de un grupo de B-Girls en Salvador. Se puede ver mas de salvador en el video de música <a href="https://www.youtube.com/watch?v=ZGvz7jTVbc8" target="_blank" style="color: #FD4556; font-family: 'Oswald', sans-serif; font-size:20px;"> “The color of the town” </a>.</h3>
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
          <style>
  
            .btn-primary{
              font-size: 17px !important;
            }
            
            .btn-primary:hover{
              background-color: #FD4556;
            }
  
            .btn-primary:active{
              background-color: #BD3944 !important;
            }
  
            #ganar{
              display:none;
            }
  
            #perder{
              display:none;
            }
            
          </style>
          <div>
            <br>
            <br>
            <h1>
              <strong style="font-family: 'Oswald', sans-serif">¿Qué ocurre a continuación?</strong>          
            </h1>
            <br/>
            <button type="button" class="btn btn-primary" onClick="botonPerder()">1.Jett está en la puerta y mata a KillJoy haciéndoles perder la ronda</button>
            <br/><br/>
            <button type="button" class="btn btn-primary" onClick="botonPerder()">2. Jett empieza a desactivar la bomba y KJ no llega a tiempo para detenerla </button>
            <br/><br/>
            <button type="button" class="btn btn-primary"  onClick="botonGanar()">3. KillJoy detona su granada matando a Jett</button>
            <p id="ganar">SI, ES CORRECTO</p>
            <p id="perder">NO, MAS SUERTE LA PROXIMA VEZ</p>
          </div>
  
          <script>
          function botonGanar(){
            document.getElementById('ganar').style.display='block';
          }
  
          function botonPerder(){
            document.getElementById('perder').style.display='block';
          }
        </script>
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
          <style>
  
            .btn-primary{
              font-size: 17px !important;
            }
            
            .btn-primary:hover{
              background-color: #FD4556;
            }
  
            .btn-primary:active{
              background-color: #BD3944 !important;
            }
            
          </style>
          <div>
            <br>
            <br>
            <h1>
              <strong style="font-family: 'Oswald', sans-serif">¿Qué ELO tenía nuestra Raze?</strong>          
            </h1>
            <br/>
            <button type="button" class="btn btn-primary">1. Platino 3</button>
            <br/><br/>
            <button type="button" class="btn btn-primary">2. Inmortal 2</button>
            <br/><br/>
            <button type="button" class="btn btn-primary">3. Radiante</button>
            <br/><br/>
            <button type="button" class="btn btn-primary">4. Inmortal 3</button>
  
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