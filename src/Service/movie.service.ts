import { API_PATH } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/Interface/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovie() {
    return this.http.get<Movie[]>(`${API_PATH}movie`).toPromise();
  }

  addMovie(movie: Movie){
    return this.http.post<Movie>(`${API_PATH}movie/`,movie).toPromise();
}

}
