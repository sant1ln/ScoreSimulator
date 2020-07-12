/* let notas = {
   nota1 : {
        nota : 1,
        valor: 50,
    },
   nota2 :{
        nota : 5,
        valor: 30,
    },
   nota3 : {
        nota : 4.5,
        valor: 20,
    },
} */

/* PorcentajeObtenido = notaObtenida * ValorNota /NotaMaxima 
    NotaFinal = suma de PorcentajeObtenido * NotaMaxima / 100*/

const NotaMaxima = 5
const cantidadDenotas = 3;
/* ArrayPorcentajes.push(PorcentajeObtenido);
console.table(ArrayPorcentajes) */
/* var ArrayPorcentajes = [];
let {nota1:{nota:n1,valor:v1}} = notas;
let PorcentajeObtenido = (n1*v1)/NotaMaxima;
ArrayPorcentajes.push(PorcentajeObtenido);

let {nota2:{nota:n2,valor:v2}} = notas;
PorcentajeObtenido = (n2*v2)/NotaMaxima;
ArrayPorcentajes.push(PorcentajeObtenido);

let {nota3:{nota:n3,valor:v3}} = notas;
PorcentajeObtenido = (n3*v3)/NotaMaxima;
ArrayPorcentajes.push(PorcentajeObtenido);


console.table(ArrayPorcentajes)
var sumaPorcentajes = 0;
for(i=0;i<ArrayPorcentajes.length;i++){
    sumaPorcentajes += ArrayPorcentajes[i];
}

console.log(sumaPorcentajes)

let NotaFinal = (sumaPorcentajes*NotaMaxima)/100

 console.log(NotaFinal)

 */

 function Notes(nota,value){
    this.nota = nota;
    this.value = value;
 }

 function Porcentajes(porcentaje){
     this.porcentaje = porcentaje;
 }

 const NotaMaxima = 5
 const cantidadDeNotas = 3;

let Tnotes = []
let Tvalues = []

 for(let i=1;i<=cantidadDeNotas;i++){
    var nota1 = new Notes(2.5,20);
    Tnotes.push(nota1.nota)
    Tvalues.push(nota1.value)
 }

 let porcentaje1 = [];
 for(let i=0;i<cantidadDeNotas;i++){
    porcentaje1.push((Tnotes[i] * Tvalues[i])/NotaMaxima);
 }
 console.log(Tnotes)
 console.log(Tvalues)
 
 console.log(porcentaje1)