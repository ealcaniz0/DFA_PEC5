import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
  movie: Movie;
  panelOpenState = false;
  
  constructor(private movieService: MoviesService, private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit(): void{
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
  if  (identifier !== null){
      this.movieService.getMovieById(identifier).subscribe((movie) => {
        if (!movie) {
          this.router.navigateByUrl("/");
        }
        this.movie=movie;
      })
    }
  }
}
