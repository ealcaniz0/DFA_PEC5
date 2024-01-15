import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]>{
   // return this.http.get<Movie[]>('https://imdb-top-100-movies.p.rapidapi.com/' ,{headers: {'X-RapidAPI-Key': '09589c6527mshbaf66fa1663b019p16f3d0jsn54e3c05c7cbd', 'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'},});
    return this.http.get<Movie[]>('https://imdb-top-100-movies.p.rapidapi.com/' ,{headers: {'X-RapidAPI-Key': '4bc64dc86emsh90adf1be4fd0048p176dc7jsneb562685de31', 'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'},});
  }

  getMovieById(id: String): Observable<Movie>{
    //return this.http.get<Movie>('https://imdb-top-100-movies.p.rapidapi.com/' + id ,{headers: {'X-RapidAPI-Key': '09589c6527mshbaf66fa1663b019p16f3d0jsn54e3c05c7cbd', 'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'},});
    return this.http.get<Movie>('https://imdb-top-100-movies.p.rapidapi.com/' + id ,{headers: {'X-RapidAPI-Key': '4bc64dc86emsh90adf1be4fd0048p176dc7jsneb562685de31', 'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'},});
  }
}
