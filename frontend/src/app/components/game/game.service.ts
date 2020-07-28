import { Game } from './game.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseUrl = "http://localhost:3001/games"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg,'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  
  create(game: Game): Observable<Game>{
     return this.http.post<Game>(this.baseUrl, game);
  }
  
  read(): Observable<Game[]>{
    return this.http.get<Game[]>(this.baseUrl)
  }
  
  readByID(id: number): Observable<Game>{
    const url = `${this.baseUrl}/${id}`;    
    return this.http.get<Game>(url);
  }

  update(game: Game): Observable<Game>{
    const url = `${this.baseUrl}/${game.id}`; 
    return this.http.put<Game>(url,game);
  }

  delete(id: number): Observable<Game>{
    const url = `${this.baseUrl}/${id}`; 
    return this.http.delete<Game>(url);
  }

}
