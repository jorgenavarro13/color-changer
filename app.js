let color='#4738b9ff';

const nombreColor=document.getElementById('color');
nombreColor.innerText=color;

const boton=document.getElementById('boton');
boton.style.background=color;

const body=document.getElementsByTagName('body')[0];
console.log(body);
body.style.backgroundColor=color;


function cambiaColor(){
    let colorfinal='#';
    for(let i=0; i<6; i=i+1){
        let numeroDecimalAleatorio = Math.floor(Math.random()*16);
        numeroDecimalAleatorio=(numeroDecimalAleatorio==10)?('A'):numeroDecimalAleatorio;
        numeroDecimalAleatorio=(numeroDecimalAleatorio==11)?('B'):numeroDecimalAleatorio;
        numeroDecimalAleatorio=(numeroDecimalAleatorio==12)?('C'):numeroDecimalAleatorio;
        numeroDecimalAleatorio=(numeroDecimalAleatorio==13)?('D'):numeroDecimalAleatorio;
        numeroDecimalAleatorio=(numeroDecimalAleatorio==14)?('E'):numeroDecimalAleatorio;
        numeroDecimalAleatorio=(numeroDecimalAleatorio==15)?('F'):numeroDecimalAleatorio;
        colorfinal=colorfinal+numeroDecimalAleatorio;
    }
    color=colorfinal;
    nombreColor.innerText=color;
    boton.style.background=color;
    body.style.backgroundColor=color;
    console.log(colorfinal); // Un número entre 0 (incluido) y 1 (excluido)
}

boton.addEventListener('click', cambiaColor);