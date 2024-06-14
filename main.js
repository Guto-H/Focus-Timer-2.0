import * as acoesDefinidas from './buttons.js'

/*----------------    MUDANDO O MODO DE EXIBIÇÃO    --------------------*/

const btnMode = document.getElementById('toogleMode');

btnMode.addEventListener('click', () =>{
    document.documentElement.classList.toggle('dark');
})


/*----------------------- ESTADO PADRÃO DA APLICAÇÃO  --------------------- */

export const estadoPadrao = {
    minutosPadrao: 0,
    segundosPadrao: 0,
    countDownId: null,
    isRunning: false,
    isMute: true,

};

/*------------- ELEMENTOS UTILITARIOS PARA A CONFIGURAÇÃO DA APLICAÇÃO ---------------- */

export const minutosAplicacao = document.getElementById('minutos');
export const segundosAplicacao = document.getElementById('segundos');
const controlesAplicaca = document.getElementById('controles');
const sonsAplicacao = document.getElementById('sons')

export const audios = {
    floresta: new Audio('./assets/Floresta.wav'),
    chuva: new Audio('./assets/Chuva.wav'),
    cafeteria: new Audio('./assets/Cafeteria.wav'),
    lareira: new Audio('./assets/Lareira.wav')
}

/*-------------------- FUNÇÕES PARA FUNCIONAMENTO DA APLICAÇÃO  ------------------------*/


/*----- CHAMANDO AS FUNÇÕES PARA FUNCIONAMENTO ----- */

start(25, 0);
registarClickControles();
registarClickAudios();


/*--- FUNÇÃO DE START DA APLICAÇÃO */

function start(minutes, seconds){
    estadoPadrao.minutosPadrao = minutes;
    estadoPadrao.segundosPadrao = seconds;

    updateTimer();
}

/*--- FUNÇÃO DE ALTERAÇÃO DO TIMER DA APLICAÇÃO ---*/

export function updateTimer(minutes, seconds){
    minutes = minutes ?? estadoPadrao.minutosPadrao;
    seconds = seconds ?? estadoPadrao.segundosPadrao;

    minutosAplicacao.textContent = String(minutes).padStart(2, '0');
    segundosAplicacao.textContent = String(seconds).padStart(2, '0');
}

export function contagem(){

    clearTimeout(estadoPadrao.countDownId);

    if(!estadoPadrao.isRunning){
        return;
    }

    let min = Number(minutosAplicacao.textContent);
    let sec = Number(segundosAplicacao.textContent);

    sec--;

    if(sec < 0){
        sec = 59;
        min--;
    }

    if(min < 0){
        acoesDefinidas.resetTimer()
        return
    }

    updateTimer(min, sec);

    estadoPadrao.countDownId = setTimeout(() => contagem(), 1000)
}



/*--- FUNCÕES PARA AÇÕES SEREM REALIZADAS DEPENDENDO DO CLICK ---*/

function registarClickControles(){
    controlesAplicaca.addEventListener('click', (event) =>{

        const acao = event.target.dataset.action;

        if(typeof acoesDefinidas[acao] != 'function'){
            return;
        }

        acoesDefinidas[acao]();

    })
}

function registarClickAudios(){
    sonsAplicacao.addEventListener('click', (event) =>{
        const acao = event.target.dataset.action;

        if(typeof acoesDefinidas[acao] != 'function'){
            return;
        }

        acoesDefinidas[acao]();

    })
}
