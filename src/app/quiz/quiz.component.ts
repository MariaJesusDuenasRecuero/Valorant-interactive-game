import { Component, OnDestroy, OnInit } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  player?: videojs.Player;

  constructor() { }

  // Instantiate a Video.js player OnInit
  ngOnInit(): void {
    this.player = videojs('videojs', {
      controlBar: {
        fullscreenToggle: false
      },
      sources: [
        {
          src: '../../assets/videos/video-quiz.mp4',
          type: 'video/mp4',
        },
      ],
    });

    var myPlayer = videojs('videojs');
    let firstTime = true;
    let secondTime = true;
    let thirdTime = true;
    let fourthTime = true;
    let fifthTime = true;
    let sixthTime = true;
    let seventhTime = true;
    let eightTime = true;
    let ninethTime = true;
    let tenthTime = true;


    this.player.on('timeupdate', function (e) {
      if (myPlayer.currentTime() >= 7 && firstTime == true) {
        firstTime = false;
        const contentEl = document.createElement('div');
        contentEl.innerHTML = `
          <style>
          img{
            width: 150px !important;
          }
        </style>

        <div>
          <br>
          <br>
          <h1>
            <strong style="font-family: 'Oswald', sans-serif">¿Qué otro agente a partee de Raze aparece?</strong>
          </h1>
          <button type="button" id='boton1' class="btn btn-primary" onClick="
            document.getElementById('perder').style.display='block';
            document.getElementById('imgperder').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2').disabled=true;
            document.getElementById('boton3Correcta').disabled=true;


          ">1. Viper</button>
          <br/><br/>
          <button type="button" id='boton2' class="btn btn-primary" onClick="
            document.getElementById('perder').style.display='block';
            document.getElementById('imgperder').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2').disabled=true;
            document.getElementById('boton3Correcta').disabled=true;

          ">2. Su hermana Reyna </button>
          <br/><br/>
          <button type="button" id='boton2' class="btn btn-primary" onClick="
          document.getElementById('ganar').style.display='block';
          document.getElementById('imgperder').style.display='block';
          document.getElementById('boton1').disabled=true;
          document.getElementById('boton2').disabled=true;
          document.getElementById('boton3Correcta').disabled=true;

        ">2. Su amiga del alma Killjoy </button>




          <p id="ganar">SI, ES CORRECTO! :D</p>
          <p id="perder">NO :(, MÁS SUERTE LA PRÓXIMA VEZ</p>
          <img id='imgperder' height=250px src="../../assets/grafitis/grafiti1.jpg">
        </div>
        `;
        myPlayer.play();

        const modal = myPlayer.createModal(contentEl, {});

        if (myPlayer.currentTime() >= 10) {
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
            width: 150px !important;
          }
        </style>
        <div>
          <br>
          <br>
          <h1>
            <strong style="font-family: 'Oswald', sans-serif">¿Qué agente esta llamando? y ¿Qué le envia?</strong>
          </h1>
          <button type="button" id='boton1' class="btn btn-primary" onClick="
            document.getElementById('perder').style.display='block';
            document.getElementById('imgperder').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2Correcta').disabled=true;
            document.getElementById('boton3').disabled=true;
          ">1.Brimstone, le envia un video de su nuevo brazalete</button>
          <br/><br/>
          <button type="button" id='boton2Correcta' class="btn btn-primary" onClick="
            document.getElementById('ganar').style.display='block';
            document.getElementById('imgperder').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2Correcta').disabled=true;
            document.getElementById('boton3').disabled=true;
          ">2. Breach, con las actualziaciones del nuevo mapa </button>
          <br/><br/>
          <button type="button" id='boton3' class="btn btn-primary"  onClick="
            document.getElementById('perder').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2Correcta').disabled=true;
            document.getElementById('boton3').disabled=true;
          ">3. Yoru, le enseña su nuevo peine mariposa</button>
          <p id="ganar">SI, ES CORRECTO! :D</p>
          <p id="perder">NO :(, MÁS SUERTE LA PRÓXIMA VEZ</p>
          <img id='imgperder' height=250px src="../../assets/grafitis/grafiti11.jpg">
        </div>
        `;

        const modal = myPlayer.createModal(contentEl, {});

        if (myPlayer.currentTime() >= 43) {
          modal?.close();
        }

        modal?.on('modalclose', () => {
          myPlayer.play();
        });
      }

      if (myPlayer.currentTime() >= 80 && fourthTime == true) {
        myPlayer.pause();
        fourthTime = false;
        const contentEl = document.createElement('div');
        contentEl.innerHTML = `
          <style>
          img{
            width: 150px;
          }
        </style>
        <div>
          <br>
          <br>
          <h1>
            <strong style="font-family: 'Oswald', sans-serif">¿Le dará algun cuchillo a Phoenix?</strong>
          </h1>
          <button type="button" id='boton1' class="btn btn-primary" onClick="
            document.getElementById('perder').style.display='block';
            document.getElementById('imgperder').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2').disabled=true;
            document.getElementById('boton3').disabled=true;
            document.getElementById('boton4Correcta').disabled=true;
          ">1.Si, los cinco</button>
          <br/><br/>
          <button type="button" id='boton2' class="btn btn-primary" onClick="
            document.getElementById('perder').style.display='block';
            document.getElementById('imgperder').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2').disabled=true;
            document.getElementById('boton3').disabled=true;
            document.getElementById('boton4Correcta').disabled=true;
          ">2. Si, dos uno en el hombro derecho y otro en el brazo izquierdo </button>
          <br/><br/>
          <button type="button" id='boton3' class="btn btn-primary"  onClick="
            document.getElementById('perder').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2').disabled=true;
            document.getElementById('boton3').disabled=true;
            document.getElementById('boton4Correcta').disabled=true;
          ">3. No, que dices como va a darle ts</button>
          <br/><br/>
          <button type="button" id='boton4Correcta' class="btn btn-primary"  onClick="
            document.getElementById('ganar').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2').disabled=true;
            document.getElementById('boton3').disabled=true;
            document.getElementById('boton4Correcta').disabled=true;
          ">4. Si, uno en el hombro derecho</button>

          <p id="ganar">SI, ES CORRECTO! :D</p>
          <p id="perder">NO :(, MÁS SUERTE LA PRÓXIMA VEZ</p>
          <img id='imgperder' height=250px src="../../assets/grafitis/grafiti5.jpg">
        </div>
        `;
        myPlayer.play();

        const modal = myPlayer.createModal(contentEl, {});

        if (myPlayer.currentTime() >= 84) {
          modal?.close();
        }

        modal?.on('modalclose', () => {
          myPlayer.play();
        });
      }

      if (myPlayer.currentTime() >= 85 && fifthTime == true) {
        myPlayer.pause();
        fifthTime = false;
        const contentEl = document.createElement('div');
        contentEl.innerHTML = `
            <style>
            img{
              width: 150px !important;
            }
          </style>
          <div>
            <br>
            <br>
            <h1>
              <strong style="font-family: 'Oswald', sans-serif">¿A que te recuerdan estas calles?</strong>
            </h1>
            <button type="button" id='boton1' class="btn btn-primary" onClick="
              document.getElementById('perder').style.display='block';
              document.getElementById('imgperder').style.display='block';
              document.getElementById('boton1').disabled=true;
              document.getElementById('boton2').disabled=true;
              document.getElementById('boton3Correcta').disabled=true;
              document.getElementById('boton4').disabled=true;
            ">1.Sevilla , España</button>
            <br/><br/>
            <button type="button" id='boton2' class="btn btn-primary" onClick="
              document.getElementById('perder').style.display='block';
              document.getElementById('imgperder').style.display='block';
              document.getElementById('boton1').disabled=true;
              document.getElementById('boton2').disabled=true;
              document.getElementById('boton3Correcta').disabled=true;
              document.getElementById('boton4').disabled=true;
            ">2. Zaragoza, España </button>
            <br/><br/>
            <button type="button" id='boton3' class="btn btn-primary"  onClick="
              document.getElementById('ganar').style.display='block';
              document.getElementById('boton1').disabled=true;
              document.getElementById('boton2').disabled=true;
              document.getElementById('boton3Correcta').disabled=true;
              document.getElementById('boton4').disabled=true;
            ">3. Venecia , Italia</button>
            <br/><br/>
            <button type="button" id='boton4Correcta' class="btn btn-primary"  onClick="
              document.getElementById('perder').style.display='block';
              document.getElementById('boton1').disabled=true;
              document.getElementById('boton2').disabled=true;
              document.getElementById('boton3Correcta').disabled=true;
              document.getElementById('boton4').disabled=true;
            ">4. Hawai</button>

            <p id="ganar">SI, ES CORRECTO! :D</p>
            <p id="perder">NO :(, MÁS SUERTE LA PRÓXIMA VEZ</p>
            <img id='imgperder' height=250px src="../../assets/grafitis/grafiti5.jpg">
          </div>
          `;
        const modal = myPlayer.createModal(contentEl, {});
        if (myPlayer.currentTime() >= 89) {
          modal?.close();
        }
        modal?.on('modalclose', () => {
          myPlayer.play();
        });
      }
      if (myPlayer.currentTime() >= 100 && sixthTime == true) {
        myPlayer.pause();
        sixthTime = false;
        const contentEl = document.createElement('div');
        contentEl.innerHTML = `
          <style>
          img{
            width: 150px !important;
          }
        </style>
        <div>
          <br>
          <br>
          <h1>
            <strong style="font-family: 'Oswald', sans-serif">¿Qué arma usa Phoenix?</strong>
          </h1>
          <button type="button" id='boton1' class="btn btn-primary" onClick="
            document.getElementById('perder').style.display='block';
            document.getElementById('imgperder').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2').disabled=true;
            document.getElementById('boton3Correcta').disabled=true;

          ">1.Guardian</button>
          <br/><br/>
          <button type="button" id='boton2' class="btn btn-primary" onClick="
            document.getElementById('perder').style.display='block';
            document.getElementById('imgperder').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2').disabled=true;
            document.getElementById('boton3Correcta').disabled=true;

          ">2. Phantom </button>
          <br/><br/>
          <button type="button" id='boton3' class="btn btn-primary"  onClick="
            document.getElementById('ganar').style.display='block';
            document.getElementById('boton1').disabled=true;
            document.getElementById('boton2').disabled=true;
            document.getElementById('boton3Correcta').disabled=true;

          ">3. Vandal</button>
          <br/><br/>


          <p id="ganar">SI, ES CORRECTO! :D</p>
          <p id="perder">NO :(, MÁS SUERTE LA PRÓXIMA VEZ</p>
          <img id='imgperder' height=250px src="../../assets/grafitis/grafiti5.jpg">
        </div>
        `;
        myPlayer.play();

        const modal = myPlayer.createModal(contentEl, {});

        if (myPlayer.currentTime() >= 106) {
          modal?.close();
        }

        modal?.on('modalclose', () => {
          myPlayer.play();
        });
      }
      if (myPlayer.currentTime() >= 119 && seventhTime == true) {
        myPlayer.pause();
        seventhTime = false;
        const contentEl = document.createElement('div');
        contentEl.innerHTML = `
        <style>
        img{
          width: 150px !important;
        }
      </style>
      <div>
        <br>
        <br>
        <h1>
          <strong style="font-family: 'Oswald', sans-serif">¿Quién le habla por pinganillo a Phoenix?</strong>
        </h1>
        <button type="button" id='boton1' class="btn btn-primary" onClick="
          document.getElementById('ganar').style.display='block';
          document.getElementById('imgperder').style.display='block';
          document.getElementById('boton1').disabled=true;
          document.getElementById('boton2').disabled=true;
          document.getElementById('boton3').disabled=true;
          document.getElementById('boton4').disabled=true;

        ">1. Viper</button>
        <br/><br/>
        <button type="button" id='boton2' class="btn btn-primary" onClick="
          document.getElementById('perder').style.display='block';
          document.getElementById('imgperder').style.display='block';
          document.getElementById('boton1').disabled=true;
          document.getElementById('boton2').disabled=true;
          document.getElementById('boton3').disabled=true;
          document.getElementById('boton4').disabled=true;

        ">2. Sage </button>
        <br/><br/>
        <button type="button" id='boton3' class="btn btn-primary"  onClick="
          document.getElementById('perder').style.display='block';
          document.getElementById('boton1').disabled=true;
          document.getElementById('boton2').disabled=true;
          document.getElementById('boton3').disabled=true;
          document.getElementById('boton4').disabled=true;

        ">3. Raze</button>
        <br/><br/>
        <button type="button" id='boton4' class="btn btn-primary"  onClick="
        document.getElementById('perder').style.display='block';
        document.getElementById('boton1').disabled=true;
        document.getElementById('boton2').disabled=true;
        document.getElementById('boton3').disabled=true;
        document.getElementById('boton4').disabled=true;

      ">4. Skye</button>


        <p id="ganar">SI, ES CORRECTO! :D</p>
        <p id="perder">NO :(, MÁS SUERTE LA PRÓXIMA VEZ</p>
        <img id='imgperder' height=250px src="../../assets/grafitis/grafiti5.jpg">
      </div>
      `;
        myPlayer.play();

        const modal = myPlayer.createModal(contentEl, {});

        if (myPlayer.currentTime() >= 121) {
          modal?.close();
        }

        modal?.on('modalclose', () => {
          myPlayer.play();
        });
      }

      if (myPlayer.currentTime() >= 155 && eightTime == true) {
        myPlayer.pause();
        eightTime = false;
        const contentEl = document.createElement('div');
        contentEl.innerHTML = `
      <style>
      img{
        width: 150px !important;
      }
    </style>
    <div>
      <br>
      <br>
      <h1>
        <strong style="font-family: 'Oswald', sans-serif">¿Qué esta hacinedo Killjoy?</strong>
      </h1>
      <button type="button" id='boton1' class="btn btn-primary" onClick="
        document.getElementById('perder').style.display='block';
        document.getElementById('imgperder').style.display='block';
        document.getElementById('boton1').disabled=true;
        document.getElementById('boton2Correcta').disabled=true;
        document.getElementById('boton3').disabled=true;


      ">1. Analizar la spike</button>
      <br/><br/>
      <button type="button" id='boton2' class="btn btn-primary" onClick="
        document.getElementById('ganar').style.display='block';
        document.getElementById('imgperder').style.display='block';
        document.getElementById('boton1').disabled=true;
        document.getElementById('boton2Correcta').disabled=true;
        document.getElementById('boton3').disabled=true;


      ">2. Desactivar la spike </button>
      <br/><br/>
      <button type="button" id='boton3' class="btn btn-primary"  onClick="
        document.getElementById('perder').style.display='block';
        document.getElementById('boton1').disabled=true;
        document.getElementById('boton2Correcta').disabled=true;
        document.getElementById('boton3').disabled=true;


      ">3. Plantar la spike</button>

      <p id="ganar">SI, ES CORRECTO! :D</p>
      <p id="perder">NO :(, MÁS SUERTE LA PRÓXIMA VEZ</p>
      <img id='imgperder' height=250px src="../../assets/grafitis/grafiti3.jpg">
    </div>
    `;
        myPlayer.play();

        const modal = myPlayer.createModal(contentEl, {});

        if (myPlayer.currentTime() >= 160) {
          modal?.close();
        }

        modal?.on('modalclose', () => {
          myPlayer.play();
        });
      }
      if (myPlayer.currentTime() >= 174 && ninethTime == true) {
        myPlayer.pause();
        ninethTime = false;
        const contentEl = document.createElement('div');
        contentEl.innerHTML = `
    <style>
    img{
      width: 150px !important;
    }
  </style>
  <div>
    <br>
    <br>
    <h1>
      <strong style="font-family: 'Oswald', sans-serif">¿Contra quien se enfrenta phoenix?</strong>
    </h1>
    <button type="button" id='boton1' class="btn btn-primary" onClick="
      document.getElementById('perder').style.display='block';
      document.getElementById('imgperder').style.display='block';
      document.getElementById('boton1').disabled=true;
      document.getElementById('boton2Correcta').disabled=true;
      document.getElementById('boton3').disabled=true;


    ">1. Yoru</button>
    <br/><br/>
    <button type="button" id='boton2' class="btn btn-primary" onClick="
      document.getElementById('ganar').style.display='block';
      document.getElementById('imgperder').style.display='block';
      document.getElementById('boton1').disabled=true;
      document.getElementById('boton2Correcta').disabled=true;
      document.getElementById('boton3').disabled=true;


    ">2. Su doble del planeta Beta </button>
    <br/><br/>
    <button type="button" id='boton3' class="btn btn-primary"  onClick="
      document.getElementById('ganar').style.display='block';
      document.getElementById('boton1').disabled=true;
      document.getElementById('boton2Correcta').disabled=true;
      document.getElementById('boton3').disabled=true;


    ">3. Su hermano gemelo</button>

    <p id="ganar">SI, ES CORRECTO! :D</p>
    <p id="perder">NO :(, MÁS SUERTE LA PRÓXIMA VEZ</p>
    <img id='imgperder' height=250px src="../../assets/grafitis/grafiti3.jpg">
  </div>
  `;
        myPlayer.play();

        const modal = myPlayer.createModal(contentEl, {});

        if (myPlayer.currentTime() >= 180) {
          modal?.close();
        }

        modal?.on('modalclose', () => {
          myPlayer.play();
        });
      }
      if (myPlayer.currentTime() >= 227 && tenthTime == true) {
        myPlayer.pause();
        tenthTime = false;
        const contentEl = document.createElement('div');
        contentEl.innerHTML = `
  <style>
  img{
    width: 150px !important;
  }
</style>
<div>
  <br>
  <br>
  <h1>
    <strong style="font-family: 'Oswald', sans-serif">¿Explotará la spike?</strong>
  </h1>
  <button type="button" id='boton1' class="btn btn-primary" onClick="
    document.getElementById('perder').style.display='block';
    document.getElementById('imgperder').style.display='block';
    document.getElementById('boton1').disabled=true;
    document.getElementById('boton2').disabled=true;


  ">1. Sí</button>
  <br/><br/>
  <button type="button" id='boton2' class="btn btn-primary" onClick="
    document.getElementById('perder').style.display='block';
    document.getElementById('imgperder').style.display='block';
    document.getElementById('boton1').disabled=true;
    document.getElementById('boton2').disabled=true;



  ">2. Si pero más abajo </button>


  <p id="ganar">SI, ES CORRECTO! :D</p>
  <p id="perder">NO :(, MÁS SUERTE LA PRÓXIMA VEZ</p>
  <img id='imgperder' height=250px src="../../assets/grafitis/grafiti11.jpg">
</div>
`;
        myPlayer.play();

        const modal = myPlayer.createModal(contentEl, {});

        if (myPlayer.currentTime() >= 230) {
          modal?.close();
        }

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






















































