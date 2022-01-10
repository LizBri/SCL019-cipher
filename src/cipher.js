const cipher = {

encode : function(texto1, desplazamiento) {

  if (texto1===undefined || desplazamiento=== undefined){
    
    throw new TypeError("¡Ups ERROR! olvidaste tu texto");
   }

  else if (texto1===typeof 0 || desplazamiento===0){

    throw new TypeError("¡Ups ERROR! olvidaste tu Rot");
  }

let resultado = "";
let cifrado = 0;  
desplazamiento = (desplazamiento % 26 + 26 ) %26; //Para que el desplazamiento vaya caracter x caracter.

  for (let i = 0; i<texto1.length; i++){

     const first =texto1.charCodeAt(i);

    if(first >= 65 && first <= 90){  //para el uso de mayusculas dentro de codigo ASCII
       cifrado = ((first - 65 + desplazamiento) % 26 ) + 65 ; //formula de desplazamiento

       resultado += String.fromCharCode(cifrado);
     } 

     else if (texto1 == " "){

      resultado += " ";
   }
  

   else if (texto1 == ","){

      resultado += ",";
   }
     
     else if(first >= 97 && first <= 122){  //para el uso de minusculas dentro de codigo ASCII
        cifrado = ((first - 97 + desplazamiento) % 26 ) + 97 ; //formula de desplazamiento
 
        resultado += String.fromCharCode(cifrado);
      
      }
     else if (first >=48 && first <= 57){ //para el uso de los numeros (0-9)en codigo ASCII 
       cifrado = ((first - 48 + desplazamiento) % 10 ) + 48;
       resultado += String.fromCharCode(cifrado);
     }

     else {
       resultado += String.fromCharCode(first)
     }
  }
  return resultado;
 },

 decode : function(texto1, desplazamiento) {
 
  if (texto1===undefined || desplazamiento=== undefined){
    
    throw new TypeError("¡Ups ERROR! olvidaste tu texto");
   }
   
  else if (texto1===typeof 0 || desplazamiento===0){

    throw new TypeError("¡Ups ERROR! olvidaste tu Rot");
  }

  let resultado = "";
  let cifrado = 0; 

   desplazamiento = (desplazamiento % 26 + 26 ) %26; //Para que el desplazamiento vaya caracter x caracter.
  
     for (let i = 0; i<texto1.length; i++){
  
        const first =texto1.charCodeAt(i);
  
        if(first >= 65 && first <= 90){  //para el uso de mayusculas dentro de codigo ASCII
          cifrado = ((first + 65 - desplazamiento) % 26 ) + 65 ; //formula de desplazamiento
  
          resultado += String.fromCharCode(cifrado);
        } 
        else if (texto1 == " "){//esta linea regresa 'espacio' como 'espacio'

          resultado += " ";
       }
  
       else if (texto1 == ","){//esta linea regresa 'coma' como 'coma'
  
          resultado += ",";
       }
        else if(first >= 97 && first <= 122){  //para el uso de minusculas dentro de codigo ASCII
           cifrado = ((first + 85 - desplazamiento) % 26 ) + 97 ; //formula de desplazamiento
   
           resultado += String.fromCharCode(cifrado);
        
        }
        else if (first >=48 && first <= 57){ //para el uso de los numeros (0-9)en codigo ASCII 
          cifrado = ((first + 44 - desplazamiento) % 10 ) + 46;
          /*  Originalmente la formula era la misma que el 
           alfabeto pero fue modificada ya que se cambiaba 
           cada 4 lugares del que se pedia en desplazamiento 
            la modifique para que se moviera cada un lugar en lugar de 4 */
           resultado += String.fromCharCode(cifrado);
        }
        else {
          resultado += String.fromCharCode(first)
        }
     }
     return resultado;
    }
  }

export default cipher;