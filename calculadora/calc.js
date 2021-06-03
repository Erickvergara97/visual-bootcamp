/*Llamar botones de html*/
const botonnumeros=document.getElementsByName('data-number');
const botonoperacion=document.getElementsByName('data-operacion');
const botondeleteall=document.getElementsByName('data-delete-all')[0];
const botondelete=document.getElementsByName('data-delete')[0];
const botonporcentaje=document.getElementsByName('data-porcentaje')[0];
const botondecimal=document.getElementsByName('data-decimal')[0];
const botonigual=document.getElementsByName('data-igual')[0];
var result = document.getElementById('result'); 
/*Variables logicas*/
var operacionact='';
var operacionant='';
var operacion=undefined;

/*Acciones de botones*/ 

botonnumeros.forEach(function(boton){
    boton.addEventListener('click',function(){
        agregarnumero(boton.innerText)
    })
});

botonoperacion.forEach(function(boton){
    boton.addEventListener('click',function(){
        seleccionaroperacion(boton.innerText);
    })
});

botonporcentaje.addEventListener('click',function(boton){
    porcentaje(boton.innerText);
    actualizardisplay();
});

botondecimal.addEventListener('click',function(boton){
    decimal(boton.innerText);
    actualizardisplay();
});

botonigual.addEventListener('click',function(){
    calcular();
    actualizardisplay();
});

botondeleteall.addEventListener('click',function(){
    clear();
    actualizardisplay();
});

botondelete.addEventListener('click',function(){
    borrar();
    actualizardisplay();
});

/*Funciones logicas*/

function agregarnumero(num){
    operacionact=operacionact.toString()+num.toString();
    actualizardisplay();
}

function actualizardisplay(){
    if(operacionact=='Infinity'){
        operacionact="Error"
    }
    result.value=operacionact;
};

function clear(){
    operacionact = '';
    operacionant =  '';
    operacion = undefined;
}

function borrar(){
    operacionact = operacionact.toString().slice(0,-1);
    actualizardisplay();
}

function seleccionaroperacion(op){
    if(operacionact==='')
    return;
    if(operacionact!==''){
        calcular()
    }
    operacion = op.toString();
    operacionant = operacionact;
    operacionact = '';   
}

function calcular(){
    var calculo;
    const anterior = parseFloat(operacionant);
    const actual = parseFloat(operacionact);
    console.log(anterior,actual)
  
    if(isNaN(anterior)||isNaN(actual)){
        return;
    }
    switch(operacion){
        case '+':
            calculo=anterior+actual;
            break;
        case '-':
            calculo=anterior-actual;
            break;
        case '*':
            calculo=anterior*actual;
            break;
        case '/':
            calculo=anterior/actual;
            break;
        default:
            return;
        }
    
    operacionact = calculo;
    operacion = undefined;
    operacionant = '';
}
function porcentaje(){
    var calculo
    const actual = parseFloat(operacionact);
    if('%'){
        calculo=actual/100;
    }
    operacionact = calculo;
    operacion = undefined;
}

function decimal(){
    var calculo = ''
    const actual = operacionact;
    if(!(actual.includes('.'))){
        calculo = actual+'.'
    }else{
        calculo = actual;
    }
    operacionact = calculo;
}

