let dia = "";
let dias = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo"
];

let esAlfa = false;
let minuscula = "";

function isAlfanumerico(cadena) {
  const alfanumerico = /^[0-9]+$/;
  if (typeof cadena !== "string") {
    return true;
  }
  return cadena.match(alfanumerico);
}

do {
  dia = prompt("Ingrese un día de la semana");
  esAlfa = isAlfanumerico(dia);

  if (esAlfa) {
    alert(`El dato ingresado es alafanumerico, por favor vuelva a intentar`);
  } else {
    minuscula = dia.toLowerCase();
    let esDia = dias.includes(minuscula);
    let mensaje = (esDia) ?  minuscula : "Por favor ingresar un dia se la semana valido";
    alert(`El dia es: ${mensaje}`);
  }


} while (dia === "" || esAlfa);
