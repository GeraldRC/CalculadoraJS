/** variables para obtener acceso a botones */
var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var num3 = document.querySelector('#num3');
var num4 = document.querySelector('#num4');
var num5 = document.querySelector('#num5');
var num6 = document.querySelector('#num6');
var num7 = document.querySelector('#num7');
var num8 = document.querySelector('#num8');
var num9 = document.querySelector('#num9');
var num0 = document.querySelector('#numcero');
var mul = document.querySelector('#multiplicar');
var divi = document.querySelector('#dividir');
var suma = document.querySelector('#sumar');
var resta = document.querySelector('#restar');
var clear = document.querySelector('#clear');
var tot = document.querySelector('#tot');
var input = document.querySelector('#input1');


/** variables globales para guardar valores ingresados */
var operando1 =0;
var operando2 =0;
var operador ="";
var resultado =0;

/*funciones para pintar numeros en el input */
num0.addEventListener("click",function(){
    input.value+="0";
});
num1.addEventListener("click",function(){
    input.value+="1";
});
num2.addEventListener("click",function(){
    input.value+="2";
});
num3.addEventListener("click",function(){
    input.value+="3";
});
num4.addEventListener("click",function(){
    input.value+="4";
});
num5.addEventListener("click",function(){
    input.value+="5";
});
num6.addEventListener("click",function(){
    input.value+="6";
});
num7.addEventListener("click",function(){
    input.value+="7";
});
num8.addEventListener("click",function(){
    input.value+="8";
});
num9.addEventListener("click",function(){
    input.value+="9";
});