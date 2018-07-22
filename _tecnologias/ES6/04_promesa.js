function hacerAlgoPromesa() {
  return new Promise( function (resolve, reject){
    setTimeout(() => {
      console.log('Hace algo que ha ocupado un tiempo');
      let number = Math.random();
      if (number < 0.7) {
        resolve(number);
      }
      else {
        reject(number);
      }
    }, 2500)
  })
}

hacerAlgoPromesa()
  .then( (data) => {
    console.log('OK', data);
  })
  .catch( (error) => {
    console.error('ERROR', error)
  });
