import cipher from './cipher.js';

document.getElementById("cifrar").addEventListener("click", textocifrar, false);

   function textocifrar() { 

   var texto1 = document.getElementById('mensaje1').value;
   var desplazamiento = document.getElementById("desplazar").value;

   // console.log(texto1+" "+desplazamiento);  regresa value en la consola
   
   var mensajeCif = cipher.encode(texto1,desplazamiento);
   
   document.getElementById('mensaje2').value = mensajeCif;
}


 document.getElementById('descifrar').addEventListener("click", textodescifrar, false);

    function textodescifrar() { 

    var texto1 = document.getElementById('mensaje1').value;
    var desplazamiento = document.getElementById("desplazar").value;

    // console.log(texto1+" "+desplazamiento);  regresa value en la consola
    let mensajeCif = cipher.decode(texto1,desplazamiento);
   
    document.getElementById('mensaje2').value = mensajeCif;

 }
 
 document.getElementById("enviar").addEventListener('click', ingresar, false);

 function ingresar(){
 
    window.location= "index.html";
 
 }

console.log(cipher)