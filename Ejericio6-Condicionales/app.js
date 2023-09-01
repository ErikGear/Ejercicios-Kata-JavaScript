let num1 = 0;
let num2 = 0;
let num3 = 0;

num1 = parseInt(prompt("Ingrese un primer numero"));
num2 = parseInt(prompt("Ingrese un segundo numero"));
num3 = parseInt(prompt("Ingrese un tercer numero"));

if (num1 > num2 && num2 < num3 && num1 > num3 ) {
    alert(`El numero ${num1} es el mayor`);
} else if (num2 > num1 && num1 < num3 && num2 > num3){
    alert(`El numero ${num2} es le mayor`);
} else if (num3 > num2 && num2 < num1 && num1 < num3 ) {
    alert(`El numero ${num3} es le mayor`);
} else {
    alert(`Los numeros ${num1}, ${num2} y ${num3} son iguales`);
}