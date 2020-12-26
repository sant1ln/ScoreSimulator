const tabla = document.querySelector("table");
const contenedor = document.querySelector("#bodyelements");
const contBoton = document.querySelector("#buttonCont");

const cantidad = document.querySelector("#cantidad");
cantidad.addEventListener("input", CreateNoteFields);

function CreateNoteFields(e) {
  
  contenedor.innerHTML = "";
  contBoton.innerHTML = "";

  for (let i = 0; i < e.target.value; i++) {
    
    var cont = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var inpt = document.createElement("input");
    var inpt2 = document.createElement("input");
    inpt.setAttribute("id", `note${i}`);
    inpt2.setAttribute("id", `value${i}`);
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
  button.addEventListener("click", GetData);
  return;
}

function GetData(e) {
  e.preventDefault();
  cantidadTotal = parseFloat(cantidad.value);
  const NotaMaxima = parseFloat(document.querySelector("#max").value);

  let Tnotes = [];
  let Tvalues = [];
  for (let i = 0; i < cantidadTotal; i++) {
    var note = parseFloat(document.querySelector(`#note${i}`).value);
    var value = parseFloat(document.querySelector(`#value${i}`).value);
    Tnotes.push(note);
    Tvalues.push(value);
  }
   GetEndNote(Tnotes, Tvalues, NotaMaxima, cantidadTotal);
}

function GetEndNote(Tnotes, Tvalues, NotaMaxima, cantidadTotal) {
  let porcentajeMax = 0;
  for (let i = 0; i < Tvalues.length; i++) {
    porcentajeMax += Tvalues[i];
  }
  
  
  let porcentaje = [];
  for (let i = 0; i < cantidadTotal; i++) {
    porcentaje.push((Tnotes[i] * Tvalues[i]) / NotaMaxima);
  }

  

  let sumaPorcentajes = 0;
  for (let i = 0; i < porcentaje.length; i++) {
    sumaPorcentajes += porcentaje[i];
  }

  const NotaFinal = (sumaPorcentajes * NotaMaxima) / porcentajeMax;
  
  PrintNotes(NotaFinal)
}

const PrintNotes = NotaFinal =>{
  
  Swal.fire(`Tu nota final sería ${NotaFinal}`)

}
