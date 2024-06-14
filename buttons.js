import { estadoPadrao, updateTimer, contagem, audios, 
        minutosAplicacao, segundosAplicacao } from "./main.js";


/*------- PLAY OU PAUSE --------*/

export function playPauseTimer(){
    estadoPadrao.isRunning = document.documentElement.classList.toggle('running');
    console.log(estadoPadrao.isRunning)

    contagem();
}


/*------- RESETA  ------- */

export function resetTimer(){
    estadoPadrao.isRunning = false;
    document.documentElement.classList.remove('running');
    updateTimer();
   
}


/*-------- ADICIONA 5  -----------*/

export function plusTimer(){

    if(Number(minutosAplicacao.textContent) <= 55){
        let atualizaMin = Number(minutosAplicacao.textContent) + 5;
        updateTimer(atualizaMin, segundosAplicacao.textContent)
    }
    else{
        return
    }
}


/*-------- RETIRA 5  --------------- */

export function minusTimer(){
    if(Number(minutosAplicacao.textContent) >= 5){
        let atualizaMin = Number(minutosAplicacao.textContent) - 5;
        updateTimer(atualizaMin, segundosAplicacao.textContent)
    }
    else{
        return
    }
}


/*----------- AUDIO NATUREZA E FIXA O BOTÃO ------------ */

export function playAudioNatureza(){
    
    audios.floresta.loop = true;

    if(estadoPadrao.isMute == true){
        audios.floresta.play();
        estadoPadrao.isMute = false;

        audios.chuva.pause();
        audios.cafeteria.pause();
        audios.lareira.pause();

        document.documentElement.classList.add('activeNature')
        document.documentElement.classList.remove('activeRain', 'activeCoffe', 'activeCampfire')

    }
    else{
        audios.floresta.pause();
        estadoPadrao.isMute = true;
        document.documentElement.classList.remove('activeNature')
    }
    
}


/*----------- AUDIO CHUVA E FIXA O BOTÃO ------------ */

export function playAudioChuva(){

    audios.chuva.loop = true;

    if(estadoPadrao.isMute == true){
        audios.chuva.play();
        estadoPadrao.isMute = false;

        audios.floresta.pause();
        audios.cafeteria.pause();
        audios.lareira.pause();

        document.documentElement.classList.add('activeRain');
        document.documentElement.classList.remove('activeNature', 'activeCoffe', 'activeCampfire');
    }
    else{
        audios.chuva.pause();
        estadoPadrao.isMute = true;

        document.documentElement.classList.remove('activeRain')
    }

}


/*-----------AUDIO CAFETERIA E FIXA O BOTÃO ------------ */

export function playAudioCafeteria(){

    audios.cafeteria.loop = true;

    if(estadoPadrao.isMute == true){
        audios.cafeteria.play();
        estadoPadrao.isMute = false;

        audios.chuva.pause();
        audios.floresta.pause();
        audios.lareira.pause();

        document.documentElement.classList.add('activeCoffe')
        document.documentElement.classList.remove('activeNature', 'activeRain', 'activeCampfire')
    }
    else{
        audios.cafeteria.pause();
        estadoPadrao.isMute = true;

        document.documentElement.classList.remove('activeCoffe')
    }
}


/*----------- AUDIO LAREIRA E FIXA O BOTÃO ------------ */

export function playAudioLareira(){

    audios.lareira.loop = true;

    if(estadoPadrao.isMute == true){
        audios.lareira.play();
        estadoPadrao.isMute = false;

        audios.chuva.pause();
        audios.cafeteria.pause();
        audios.floresta.pause();

        document.documentElement.classList.add('activeCampfire')
        document.documentElement.classList.remove('activenature', 'activeRain', 'activeCoffe')
    }
    else{
        audios.cafeteria.pause();
        estadoPadrao.isMute = true;

        document.documentElement.classList.remove('activeCampfire')
    }
}
