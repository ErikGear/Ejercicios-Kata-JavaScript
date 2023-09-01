let topping = parseInt(
  prompt(
    "¡Bienvenido!" +
      "\n Por favor elija una opción: " +
      "\n 1. Helado sin topping cuesta 50 MXN" +
      "\n 2. El topping de oreo cuesta 10 MXN." +
      "\n 3. El topping de KitKat cuesta 15 MXN." +
      "\n 4. El topping de brownie cuesta 20 MXN."
  )
);
let costoElado = 50;

switch (topping) {
  case 1:
    alert(`Èl precio total del helado es ${costoElado}`);
    break;
  case 2:
    costoElado += 10;
    alert(`Èl precio total del helado es ${costoElado}`);
    break;
  case 3:
    costoElado += 15;
    alert(`Èl precio total del helado es ${costoElado}`);
    break;
  case 4:
    costoElado += 20;
    alert(`Èl precio total del helado es ${costoElado}`);
    break;
  default:
    alert(`Èl precio total del helado es ${costoElado}`);
    break;
}
