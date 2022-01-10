window.addEventListener("load", function(){

    var imagenes = [];
    imagenes[0]= "slide/2.jpg";
    imagenes[1]= "slide/3.jpg";
    imagenes[2]= "slide/4.jpg";
    imagenes[3]= "slide/5.jpg";
    imagenes[4]= "slide/0.jpg";

 var imagenSlide = 0;
 var timeLapse = 3000;

function changeImg (){

slider.src=imagenes[imagenSlide];

    if(imagenSlide < 2){
        imagenSlide++;
    }
    else{
       imagenSlide = 0;
    }
}
 this.setInterval(changeImg, timeLapse);
   });
 
document.getElementById("login").addEventListener('click', ingresar, true);

var usuario= document.getElementById("user");
var usuarioOf= "maria@lookup.com";

// function ingresar(usuario, usuarioOf){
function ingresar(){  
//  if( usuario === usuarioOf){

     location.href= "index.html";
//  }

//  else{
//      alert("Usuario incorrecto");
//   }
}

