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
            <h3>Una línea de voz no utilizada dentro de los archivos del juego de Raze la tiene llamando a Jett "Joon-Hee". Al principio se pensó que este era su nombre. Finalmente se reveló que el verdadero nombre de Jett era <span style="color: #0FD2B1; font-family: 'Oswald', sans-serif; font-size:20px;" >Sunwoo Han</span>.</h3>
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
          <button type="button" class="btn btn-primary" onClick="botonPerder()">1. Raze no aparece y Jett gana la ronda defusando la spike a tiempo.</button>
          <br/><br/>
          <button type="button" class="btn btn-primary"  onClick="botonGanar()">2. Raze aparece y mata a Jett</button>
          <br/><br/>
          <button type="button" class="btn btn-primary" onClick="botonPerder()">3. Raze no aparece pero Jett no tiene suficiente tiempo para defusar la ronda y pierden.</button>
          <br/><br/>
          <button type="button" class="btn btn-primary"  onClick="botonGanar()">4. Raze aparece, Jett mata a Raze pero no tiene suficiente tiempo para defusar y pierden la ronda.</button>
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
            <strong style="font-family: 'Oswald', sans-serif">¿Qué ELO tenía nuestra Jett?</strong>          
          </h1>
          <br/>
          <button type="button" class="btn btn-primary">1. Plata 1</button>
          <br/><br/>
          <button type="button" class="btn btn-primary">2. Bronce 3</button> 
          <br/><br/>
          <button type="button" class="btn btn-primary">3. Plata 3</button>
          <br/><br/>
          <button type="button" class="btn btn-primary">4. Bronce 2</button>

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