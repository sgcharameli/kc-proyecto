class Libro {
  constructor(autor, titulo){
    this.autor = autor;
    this.titulo = titulo;
  }
  mostrar(){
    console.log(this);
  };
}

let libro1 = new Libro('Flipe', 'Lotas');
libro1.mostrar();

class LibroTec extends Libro {
  constructor(autor, titulo, categoria = "Informática"){
    super(autor, titulo);
    this.categoria =  categoria;
  };
}

let libro2 = new LibroTec("Flipa", "Flipping");
libro2.mostrar();



