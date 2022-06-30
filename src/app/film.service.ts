import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from './add-or-edit-film/add-or-edit-film.component';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class FilmService {
  films: Film[]=[]
  jsonservurl = "http://localhost:3000"

  constructor(private _httpClient: HttpClient) { }
  addfilm(){}
  Getfilms(){ return this._httpClient.get<Film[]>(`http://localhost:3000/films`);
    
  }
  editfilm(){}
  suppfilm(){}
}
