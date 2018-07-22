let oDatos = { precio: 12, iva : 1.16};

console.log(oDatos);

oDatos.calculaIvaAsync = function() {
  setTimeout(() => {
    let precioFinal = this.precio * this.iva;
    console.log(`
    Usando una función clásica:
    El precio final es ${precioFinal.toFixed(2)}`)
  }, 5000);
}

console.log(oDatos);

oDatos.calculaIvaAsync();
