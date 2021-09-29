import { MovieService } from './../../Service/movie.service';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Movie } from '../Interface/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movies: Array<any> = new Array();

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovie();
  }
  getMovie() {
    this.movieService
      .getMovie()
      .then((res) => {
        this.movies = res;
        console.log(this.movies);
      })
      .catch((errors) => console.log(errors));
  }

  onSubmit(data: any){
    const movie : Movie = {
      name : data.nome,
      category: data.categoria,
      description:data.descricao
    }
     this.movieService.addMovie(movie)
       .then(movie => console.log(movie));
       location.reload();

  }


}
