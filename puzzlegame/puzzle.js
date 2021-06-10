const botonNumero = document.getElementsByName("numero");
const botonShuffle = document.getElementsByName("shuffle")[0];

class caja {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    bloque_arriba(){
        if(this.y===0)return null;
        return new caja(this.x, this.y-1);
    }
    bloque_abajo(){
        if(this.y===3)return null;
        return new caja(this.x, this.y+1);
    }
    bloque_izquierda(){
        if(this.y===0)return null;
        return new caja(this.x-1, this.y);
    }
    bloque_derecha(){
        if(this.y===3)return null;
        return new caja(this.x+1, this.y);
    }
}



var bloques = [[1,2,3,4],[5,6,7,8],[9,10,11,12], [13,14,15]];

var coordenadas = [[1,1], [1,2], [1,3],[1,4] [2,1],[2,2], [2,3], 
[2,4] [3,1], [3,2], [3,3], [3,4], [4,1], [4,2], [4,3],[4,4]];


botonNumero.forEach(function(boton){
    boton.addEventListener('click')
})
botonShuffle.addEventListener('click', boton)