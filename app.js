var str = prompt("Ingrese la frase");

//Validadno que la cadena no este vacia
if(str ==='')
{
    alert("Tienes que ingresar una frase");

}
// Validando que solo permita el ingreso de  letras minusculas y mayusculas

if((str.charCodeAt()>=97 && str.charCodeAt()<=122 ) || (str.charCodeAt()>=65 && str.charCodeAt()<=90))
    {
        alert("muy bien");
    }
    else{
        alert("No es valido ingresar numeros");
    
function cipher (str){
    // recorre toda la cadena ingresada
    //var cadena='';
    for (var i = 0; i < str.length; i++) {
       //Este if para letras mayusculas  y minusculas
        if((str[i].charCodeAt()>=65 && str[i].charCodeAt()<=90 ) || (str[i].charCodeAt()>=97 && str[i].charCodeAt()<=122))

         {
            console.log(str[i]);
                var str1= (str[i].charCodeAt()+33)  ;
                   return String.fromCharCode(str1)  ;

                    //str1= cadena[i];
                    //return str1;

         }

    }


}
