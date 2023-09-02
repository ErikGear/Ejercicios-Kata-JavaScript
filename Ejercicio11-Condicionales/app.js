let litros = 0;
let litrosConsumidos
let vehiculos = ["coche", "moto", "autobus"];
let precioKilometro = 0;
let costo = 0;

function obtenerVehiculo(n) {
  if (n < 1 || n > 3) {
    return -1;
  }
  return vehiculos[n - 1];
}

function precioKilometraje(vehiculo, litros) {
  switch (vehiculo) {
    case "coche":
        costo = litros + 0.20;
        alert(`El costo del recorrido es de: ${costo}`);
      break;
    case "moto":
        costo = litros + 0.10;
        alert(`El costo del recorrido es de: ${costo}`);
      break;
    case "autobus":
        costo = litros + 0.5;
        alert(`El costo del recorrido es de: ${costo}`);
      break;

    default:
      break;
  }
}
function litrosCosto(litros) {
  if (litros >= 0 && litros <= 100) {
    return 5;
  } else if (litros > 100) {
    return 10;
  } else {
    return 0;
  }
}

let vehiculo = parseInt(
  prompt(
    "¡Bienvenido!" +
      "\n Seleccione una opción: " +
      "\n 1. coche" +
      "\n 2. moto" +
      "\n 3. autobus"
  )
);

let v = obtenerVehiculo(vehiculo);

litrosConsumidos = parseInt(
  prompt("¡Litros Consumidos!" 
  + "\n Seleccione una opción: " 
  + "\n \"0 - 100\" ")
);

litros = litrosCosto(litrosConsumidos);

precioKilometraje(v, litros);