const tabla = document.querySelector('table')
const contenedor = document.querySelector('#bodyelements');
const contBoton = document.querySelector('#buttonCont');

document.querySelector('#cantidad').addEventListener('input',(e)=>{
    console.log(e.target.value);
    
    contenedor.innerHTML = '';
    
     for(let i=0;i<e.target.value;i++){
         console.log(i)
         var cont = document.createElement("tr");
         var td1 = document.createElement("td");
         var td2 = document.createElement("td");
         var inpt = document.createElement("input")
         var inpt2 = document.createElement("input")
         inpt.classList.add('note')
         inpt2.classList.add('note')
         td1.appendChild(inpt);
         td2.appendChild(inpt2);
         cont.appendChild(td1);
         cont.appendChild(td2);
         contenedor.appendChild(cont)
    }

 /*    let button = document.createElement('button');
    let contenido = document.createTextNode("Calcular")
    button.appendChild(contenido)
    contBoton.appendChild(button) */
   
})