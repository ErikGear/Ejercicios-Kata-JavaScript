let calificacion = parseFloat(
  prompt('Ingrese una calificacionen una rango: \n "1 - 10"')
);

if (calificacion >= 1 && calificacion <= 10) {
  switch (calificacion) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      alert(` REPROBADO, la calificación es: ${calificacion}`);
      break;
    case 6:
    case 7:
    case 8:
      alert(`REGULAR, la calificación es: ${calificacion}`);
      break;
    case 9:
      alert(`BIEN, la calificación es: ${calificacion}`);
      break;
    case 10:
      alert(`EXCELENTE, la calificación es: ${calificacion}`);
      break;

    default:
      break;
  }
} else {
  alert(`Error`);
}
