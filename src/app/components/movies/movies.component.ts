import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  view: string = 'c';

  constructor(private movieService: MoviesService){}

  ngOnInit(): void{
    this.movieService.getAllMovies().subscribe((movies) => this.movies=movies);
  }

  cardClick(): void{
    this.view='c';
  }
  gridClick(): void{
    this.view='g';
  }
}
