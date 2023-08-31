// 2. Divisibilidad de un numero por 2

const number1 = prompt("Ingrese un numero");
const parseo = parseInt(number1);
const digitos = number1.split(""); 




if (parseo >=1 && parseo <= 9) {
    const mensaje = (parseo % 2 === 0) ? `El numero ${parseo} es divisible por 2`: `El numero ${parseo} no es divisible por 2`;
    alert(mensaje)
} else if (parseo >= 10) {
    const ultimaCifra = parseInt(digitos[digitos.length - 1]);
    const mensaje = (ultimaCifra % 2 === 0) ? `El numero ${parseo} es divisible por 2`: `El numero ${parseo} no es divisible por 2`;
    alert(mensaje)
} else {
    alert (`Ingreso ${number1} debe digitar un numero valido`);
}