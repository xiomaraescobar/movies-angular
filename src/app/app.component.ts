import { Component } from '@angular/core';

type Movie = {
  name: String;
  available: number;
  quantity: number;
};

type Movies = Array<Movie>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: String = 'Peliculas';

  movies: Movies = [
    {
      name: 'Harry Potter',
      available: 5,
      quantity: 0,
    },
    {
      name: 'Furiosa',
      available: 12,
      quantity: 0,
    },
    {
      name: 'La Trampa',
      available: 4,
      quantity: 0,
    },
  ];

  addMovieQuantity(movieName: String) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );
    this.movies[movieIndex].quantity += 1;
  }

  removeMovieQuantity(movieName: String) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );
    this.movies[movieIndex].quantity -= 1;
  }
}
