//1. Eres bellisimo
const isBeautiful = prompt("¿Eres bellisimo/a?");

switch (isBeautiful) {
  case "si":
  case "SI":
  case "Si":
  case "sI":
    alert("Ciertamente");
    break;
  case "no":
  case "NO":
  case "No":
  case "nO":
    alert("No te creo");
    break;
  default:
    alert("Debe ingresar una opción valida: SI - NO");
    break;
}
