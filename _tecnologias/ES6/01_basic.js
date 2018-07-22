const aDatos = [{valor: 12}, {valor: 32},{valor: 56}];

aDatos.push({valor: 68});

calcularPrecio(12);
calcularPrecio()

function calcularPrecio(iva = 22) {
  {
    const finalIva = 1 + iva/100;
    console.log(finalIva +1 );
    let precioFinal;
    aDatos.forEach( precio => {
      precioFinal = precio.valor * finalIva;
      mostrarPrecio (precioFinal);
    });
  }
}

function mostrarPrecio(precioFinal = 0) {
  console.log(`
  El precio final es:
  ${precioFinal.toFixed(2)}`)
}

