import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
  }

  getMovies(): void {
    this.httpService.getMovieList()
  }

  deleteMovie(id: number): void {
    this.httpService.deleteMovie(movie).subscribe(
      ()=>{
        this.movies=this.httpService.getMovieList();
      }
    )
  }

}
