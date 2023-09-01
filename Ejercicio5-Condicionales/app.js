let num1 = 0;
let num2 = 0;
do {
  num1 = parseInt(prompt("Ingrese un numero"));
  num2 = parseInt(prompt("Ingrese otro numero"));

  if (num1 > num2) {
    alert(`El numero ${num1} es mayor que ${num2}`);
  } else if (num2 > num1) {
    alert(`El numero ${num2} es mayor que ${num1}`);
  } else {
    alert("Vuelva a digitar los numeros");
  }
} while (num1 === num2);

