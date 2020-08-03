import { map, catchError } from 'rxjs/operators';
import { Game } from './game.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseUrl = "http://localhost:3001/games"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg,'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }
  
  create(game: Game): Observable<Game>{
     return this.http.post<Game>(this.baseUrl, game).pipe(
       map((obj) => obj),
       catchError(e => this.errorHandler(e))
     );
  }
  read(): Observable<Game[]>{
    return this.http.get<Game[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  
  readByID(id: number): Observable<Game>{
    const url = `${this.baseUrl}/${id}`;    
    return this.http.get<Game>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(game: Game): Observable<Game>{
    const url = `${this.baseUrl}/${game.id}`; 
    return this.http.put<Game>(url,game).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Game>{
    const url = `${this.baseUrl}/${id}`; 
    return this.http.delete<Game>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro! ', true);
    return EMPTY;
  }

}
