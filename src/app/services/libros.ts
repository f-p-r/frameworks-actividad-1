import { Injectable } from '@angular/core';

export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  precio: number;
  editorial: string;
  anio: number;
  descripcion: string;
  sinopsis: string;
  resenas: string;
  novedad: boolean;
  masVendido: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private libros: Libro[] = [];

  constructor() {
    this.libros = [
      {
        id: 1,
        titulo: 'Siete agujas de coser',
        autor: 'Lucía Chacón',
        precio: 19.99,
        editorial: 'Editorial Fantasía',
        anio: 2020,
        descripcion: 'Una historia sobre la búsqueda de identidad y el poder de los lazos familiares.',
        sinopsis: 'En una pequeña aldea costera, una joven descubre un antiguo secreto familiar escondido entre agujas y recuerdos. Entre generaciones y tradiciones, el pasado cobra vida a través de los hilos que cosen la memoria.',
        resenas: '“Una novela conmovedora y elegante.” – El País\n“Lucía Chacón firma su mejor obra hasta la fecha.” – ABC',
        novedad: true,
        masVendido: false
      },
      {
        id: 2,
        titulo: 'El brillo de las luciérnagas',
        autor: 'Paul Pen',
        precio: 14.56,
        editorial: 'Ediciones Península',
        anio: 2018,
        descripcion: 'Una familia, un sótano, y un misterio imposible de olvidar.',
        sinopsis: 'Un niño vive encerrado con su familia en un sótano iluminado solo por luciérnagas. Poco a poco descubrirá que su mundo no es lo que parece y que el verdadero peligro está más cerca de lo que imagina.',
        resenas: '“Oscura y fascinante.” – Goodreads\n“Un thriller psicológico de altura.” – La Vanguardia',
        novedad: false,
        masVendido: true
      },
      {
        id: 3,
        titulo: 'Alas de sangre',
        autor: 'Rebecca Yarros',
        precio: 23.18,
        editorial: 'Plaza & Janés',
        anio: 2023,
        descripcion: 'Una historia de dragones, amor y guerra.',
        sinopsis: 'En el Colegio de Guerra de Basgiath, solo los más fuertes sobreviven. Violet Sorrengail deberá elegir entre seguir las reglas o convertirse en leyenda.',
        resenas: '“Una fantasía trepidante que enamora desde la primera página.” – The Guardian',
        novedad: true,
        masVendido: true
      },
      {
        id: 4,
        titulo: 'Todos los lugares que mantuvimos en secreto',
        autor: 'Inma Rubiales',
        precio: 21.38,
        editorial: 'Editorial Planeta',
        anio: 2022,
        descripcion: 'Una historia de amor, pérdida y segundas oportunidades.',
        sinopsis: 'Cuando el pasado regresa para recordarte lo que perdiste, el corazón se enfrenta a la decisión más difícil: volver a sentir o seguir huyendo.',
        resenas: '“Inma Rubiales vuelve a emocionar con una historia inolvidable.” – HarperCollins',
        novedad: false,
        masVendido: true
      },
      {
        id: 5,
        titulo: 'Arena negra',
        autor: 'Cristina Cassar Scalia',
        precio: 18.83,
        editorial: 'Alfaguara',
        anio: 2019,
        descripcion: 'Un thriller ambientado en Sicilia con una inspectora inolvidable.',
        sinopsis: 'Una serie de asesinatos en Catania pondrá a prueba la intuición de Vanina Guarrasi, una mujer que esconde más secretos que los propios criminales.',
        resenas: '“Un noir mediterráneo vibrante y adictivo.” – La Repubblica',
        novedad: true,
        masVendido: false
      },
      {
        id: 6,
        titulo: 'Los chicos de Tommen #3',
        autor: 'Chloe Walsh',
        precio: 22.8,
        editorial: 'Montena',
        anio: 2021,
        descripcion: 'El tercer volumen de la saga romántica juvenil que arrasa en TikTok.',
        sinopsis: 'Johnny y Shannon intentan reconstruir su relación mientras los secretos del pasado amenazan con destruirlo todo.',
        resenas: '“La historia más intensa de la serie Tommen.” – Goodreads',
        novedad: false,
        masVendido: true
      },
      {
        id: 7,
        titulo: 'Redes',
        autor: 'Eloy Moreno',
        precio: 16.79,
        editorial: 'Nube de Tinta',
        anio: 2023,
        descripcion: 'Una reflexión sobre el poder y los peligros de las redes sociales.',
        sinopsis: 'Lo que compartes puede cambiar tu vida. Pero lo que callas puede destruirla.',
        resenas: '“Eloy Moreno vuelve a ofrecernos un espejo de nuestra sociedad.” – El Mundo',
        novedad: true,
        masVendido: false
      },
      {
        id: 8,
        titulo: 'Magic Animals - El poder del amuleto',
        autor: 'Susanna Isern',
        precio: 21.66,
        editorial: 'La Galera',
        anio: 2021,
        descripcion: 'Una aventura mágica para los más pequeños.',
        sinopsis: 'Cuando Nora recibe un misterioso amuleto, descubre que puede comunicarse con los animales y deberá proteger su secreto de quienes quieren aprovecharse de su poder.',
        resenas: '“Una historia tierna, emocionante y llena de magia.” – PequeLectores',
        novedad: false,
        masVendido: true
      }
    ];
  }

  // 🔹 Métodos públicos

  getNovedades(): Libro[] {
    return this.libros.filter(l => l.novedad);
  }

  getMasVendidos(): Libro[] {
    return this.libros.filter(l => l.masVendido);
  }

  buscarLibros(termino: string): Libro[] {
    const texto = termino.toLowerCase().trim();
    return this.libros.filter(
      l =>
        l.titulo.toLowerCase().includes(texto) ||
        l.autor.toLowerCase().includes(texto)
    );
  }

  getTodos(): Libro[] {
    return this.libros;
  }
}
