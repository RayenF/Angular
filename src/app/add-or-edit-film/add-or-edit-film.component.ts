import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';



export interface Film {
   title: string|null,
   synopsis: string|null,
   note:number|null

}
@Component({
  selector: 'app-add-or-edit-film',
  templateUrl: './add-or-edit-film.component.html',
  styleUrls: ['./add-or-edit-film.component.css']
})
export class AddOrEditFilmComponent {
 
    
    
    film_form = new FormGroup({
      title: new FormControl('',[Validators.required]),
      synopsis: new FormControl('',[]),
      note: new FormControl<number |null>(null,[Validators.min(0),Validators.max(5)]),

    })

    @Output() Film: EventEmitter<any> = new EventEmitter();
    movies: Movie[] | undefined;

  constructor(private movieService: MovieService) { }


    submitFilm() {
        
        console.log(this.film_form.value);
        console.log("salut");
        const film: Film= {
          title: this.film_form.controls.title.value,
          synopsis: this.film_form.controls.synopsis.value,
          note: this.film_form.controls.note.value,
        }
        this.Film.emit(film);
      }

}


