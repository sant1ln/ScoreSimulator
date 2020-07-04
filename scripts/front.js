const tabla = document.querySelector("table");
const contenedor = document.querySelector("#bodyelements");
const contBoton = document.querySelector("#buttonCont");

const cantidad = document.querySelector("#cantidad");
cantidad.addEventListener("input", CreateNoteFields);

function CreateNoteFields(e) {
  /* console.log(e.target.value); */

  contenedor.innerHTML = "";
  contBoton.innerHTML = ""; 

  for (let i = 0; i < e.target.value; i++) {
    /* console.log(i); */
    var cont = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var inpt = document.createElement("input");
    var inpt2 = document.createElement("input");
    inpt.setAttribute('id',`note${i}`)
    inpt2.setAttribute('id',`value${i}`)
    inpt.classList.add("note");
    inpt2.classList.add("note");
    td1.appendChild(inpt);
    td2.appendChild(inpt2);
    cont.appendChild(td1);
    cont.appendChild(td2);
    contenedor.appendChild(cont);
  }
  let button = document.createElement("button");
  let contenido = document.createTextNode("Calcular");
  button.setAttribute("type", "submit");
  button.appendChild(contenido);
  contBoton.appendChild(button);
  button.addEventListener('click',SendData);
  return 
}

function SendData(){
    
    cantidadTotal = parseInt(cantidad.value);
    /* console.log(cantidadTotal) */
    NotaMaxima = parseInt(document.querySelector('#max').value)
    var notas = {
        nota: null,
        valor: null, 
    }
    
    for(let i = 0; i< cantidadTotal; i++){
       var Nota = document.querySelector(`#note${i}`).value
       var valor = document.querySelector(`#value${i}`).value
       /* let nota = new notas() */
       console.log(Nota)
       console.log(valor)
    }
    
    

}
