import {Component, OnDestroy, OnInit} from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-adivina-kj',
  templateUrl: './adivina-kj.component.html',
  styleUrls: ['./adivina-kj.component.scss']
})

export class AdivinaKjComponent implements OnInit, OnDestroy {
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
          src: '../../assets/videos/clip-kj.mp4',
          type: 'video/mp4',
        },
      ],
    });

    var myPlayer = videojs('videojs');
    let firstTime = true;
    let secondTime = true;
    let thirdTime = true;
    
    this.player.on('timeupdate', function(e) {
      if (myPlayer.currentTime() >= 17 && firstTime == true) {
          firstTime = false;
          const contentEl = document.createElement('div');
          contentEl.innerHTML = `
          <style>
            img{
              width: 300px;
              height: auto;
              margin:auto;
              display:block;
              border-radius:15px;

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
            <h3>KillJoy y Raze desarrollaron un robot de entrenamiento conocido como "Max Bot", que está diseñado para imitar y replicar los poderes y habilidades de su oponente. Este se puede ver en la cinemática del episodio 4 <a href="https://www.youtube.com/watch?v=OyLHi34Qzv4" target="_blank" style="color: #FD4556; font-family: 'Oswald', sans-serif; font-size:20px;"> “CALENTAMIENTO” </a>.</h3>
            <img  height=250px src="../../assets/images/maxBot.jpg"> 
            </div>


          `;
          myPlayer.play();

      const modal = myPlayer.createModal(contentEl, {});

      if (myPlayer.currentTime() >= 18){
        modal?.close();
      }  

      modal?.on('modalclose', () => {
        myPlayer.play();
      });
      }

      if (myPlayer.currentTime() >= 42 && secondTime == true) {
        myPlayer.pause();
        secondTime = false;
        const contentEl = document.createElement('div');
        contentEl.innerHTML = `
        <style>
          img{
            width: 150px;
            margin:auto;
            display:block;
            border-radius:15px;
          }

          #imgperder{
            display:none;
          }

          .btn-primary{
            font-size: 17px !important;
          }

          .btn-primary:disabled{
            background-color: transparent !important;
          }

          #boton3Correcta:disabled{
            opacity:1 !important;
            background-color: #0FD2B1 !important;
          }
          
          .btn-primary:hover{
            background-color: #FD4556;
          }

          .btn-primary:active{
            background-color: #BD3944 !important;
          }

          #ganar{
            display:none;
            color: #0FD2B1;
            font-family: 'Oswald', sans-serif;
            font-size: 25px;
            text-align: center;
            padding-top:3%;
          }

          #perder{
            display:none;
            color: #FD4556;
            font-family: 'Oswald', sans-serif;
            font-size: 25px;
            text-align: center;
            padding-top:3%;
          }
          
        </style>
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
            document.getElementById('boton2').disabled=true;
            document.getElementById('boton3Correcta').disabled=true;
          ">1.Jett está en la puerta y mata a KillJoy haciéndoles perder la ronda</button>
          <br/><br/>
          <button type="button" id='boton2' class="btn btn-primary" onClick="
            document.getElementById('perder').style.display='block';
            document.getElementById('imgperder').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2').disabled=true;
            document.getElementById('boton3Correcta').disabled=true;
          ">2. Jett empieza a desactivar la bomba y KJ no llega a tiempo para detenerla </button>
          <br/><br/>
          <button type="button" id='boton3Correcta' class="btn btn-primary"  onClick="
            document.getElementById('ganar').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2').disabled=true;
            document.getElementById('boton3Correcta').disabled=true;
          ">3. KillJoy detona su granada matando a Jett</button>
          <p id="ganar">SI, ES CORRECTO! :D</p>
          <p id="perder">NO :(, MÁS SUERTE LA PRÓXIMA VEZ</p>
          <img id='imgperder' height=150px src="../../assets/grafitis/grafiti9.jpg"> 
        </div>
        `;

        const modal = myPlayer.createModal(contentEl, {});

        if (myPlayer.currentTime() >= 43){
          modal?.close();
        }  
  
        modal?.on('modalclose', () => {
          myPlayer.play();
        });
      }

      if (myPlayer.currentTime() >= 50 && thirdTime == true) {
        myPlayer.pause();
        thirdTime = false;
        const contentEl = document.createElement('div');
        contentEl.innerHTML = `
        <style>

        img{
          width: 150px;
          margin:auto;
          display:block;
          border-radius:15px;
        }

        #imgperder{
          display:none;
        }

        .btn-primary{
          font-size: 17px !important;
        }

        .btn-primary:disabled{
          background-color: transparent !important;
        }

        #boton1Correcta:disabled{
          opacity:1 !important;
          background-color: #0FD2B1 !important;
        }
        
        .btn-primary:hover{
          background-color: #FD4556;
        }

        .btn-primary:active{
          background-color: #BD3944 !important;
        }

        #ganar{
          display:none;
          color: #0FD2B1;
          font-family: 'Oswald', sans-serif;
          font-size: 25px;
          text-align: center;
        }

        #perder{
          display:none;
          color: #FD4556;
          font-family: 'Oswald', sans-serif;
          font-size: 25px;
          text-align: center;
        }
        </style>
      
        <div>
        <br>
        <br>
        <h1>
          <strong style="font-family: 'Oswald', sans-serif">¿Qué rango tenía nuestra KillJoy?</strong>          
        </h1>
        <button type="button" id='boton1Correcta' class="btn btn-primary" onClick="
          document.getElementById('ganar').style.display='block';
          document.getElementById('boton1Correcta').disabled=true;
          document.getElementById('boton2').disabled=true;
          document.getElementById('boton3').disabled=true;
          document.getElementById('boton4').disabled=true;
        ">1. Plata 1</button>
        <br/><br/>
        <button type="button" id='boton2' class="btn btn-primary" onClick="
          document.getElementById('perder').style.display='block';
          document.getElementById('imgperder').style.display='block';
          document.getElementById('boton1Correcta').disabled=true;
          document.getElementById('boton2').disabled=true;
          document.getElementById('boton3').disabled=true;
          document.getElementById('boton4').disabled=true;
        ">2. Oro 1 </button>
        <br/><br/>
        <button type="button" id='boton3' class="btn btn-primary"  onClick="
          document.getElementById('perder').style.display='block';
          document.getElementById('imgperder').style.display='block';
          document.getElementById('boton1Correcta').disabled=true;
          document.getElementById('boton2').disabled=true;
          document.getElementById('boton3').disabled=true;
          document.getElementById('boton4').disabled=true;
        ">3. Plata 3</button>
        <br/><br/>
        <button type="button" id='boton4' class="btn btn-primary"  onClick="
          document.getElementById('perder').style.display='block';
          document.getElementById('imgperder').style.display='block';
          document.getElementById('boton1Correcta').disabled=true;
          document.getElementById('boton2').disabled=true;
          document.getElementById('boton3').disabled=true;
          document.getElementById('boton4').disabled=true;
        ">4. Bronce 3</button>
        <p id="ganar">SI, ES CORRECTO! :D</p>
        <p id="perder">NO :(, MÁS SUERTE LA PRÓXIMA VEZ</p>
        <img id='imgperder' height=150px src="../../assets/grafitis/grafiti13.jpg"> 
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