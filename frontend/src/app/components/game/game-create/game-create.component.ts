import { GameService } from './../game.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {

  constructor(private GameService: GameService, private router: Router) { }

  ngOnInit(): void {
    
  }
  createGame(): void{
    this.GameService.showMessage('Game criado com sucesso !')
  }

  cancel(): void{
    this.router.navigate(['/games'])
  }

}
