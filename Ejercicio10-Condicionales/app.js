let programa = parseInt(
  prompt(
    "¡Bienvenido!" +
      "\n Por favor elija una opción: " +
      "\n 1. Course: $4999 MXN" +
      "\n 2. Carrera $3999 MXN" +
      "\n 3. Master: $2999 MXN"
  )
);

let beca = parseInt(
  prompt(
    "¿Cuenta con alguna Beca?" +
      "\n Por favor elija una opción: " +
      "\n 1. Beca Facebook" +
      "\n 2. Beca Google" +
      "\n 3. Beca Jesua" +
      "\n 4. No"
  )
);

let descuento = 0;
let tieneBeca = false;

switch (beca) {
  case 1:
    tieneBeca = true;
    descuento = 20;
    break;
  case 2:
    tieneBeca = true;
    descuento = 15;
    break;
  case 3:
    tieneBeca = true;
    descuento = 50;
    break;
    default: 
    tieneBeca = false;
    descuento = 0;
    break;
}

let costoPrograma = 0;
switch (programa) {
  case 1:
    costoPrograma = 4999;
    if (tieneBeca) {
        descuento = (4999 * descuento) / 100;
        costoPrograma -= descuento;
    } 
    alert(`Èl precio mensual del Course es ${costoPrograma}  MXN`);
    break;
  case 2:
    costoPrograma = 3999;
    if (tieneBeca) {
        descuento = (3999 * descuento) / 100;
        costoPrograma -= descuento;
    } 
    alert(`Èl precio mensual de la Carrera es ${costoPrograma}`);
    break;
  case 3:
    costoPrograma = 2999;
    if (tieneBeca) {
        descuento = (2999 * descuento) / 100;
        costoPrograma -= descuento;
    }
    alert(`Èl precio mensual del Master es ${costoPrograma}`);
    break;
  default:
    alert(`Ingrese una opción valida`);
    break;
}
