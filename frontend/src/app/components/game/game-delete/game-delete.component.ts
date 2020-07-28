import { Router, ActivatedRoute } from '@angular/router';
import { GameService } from './../game.service';
import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';

@Component({
  selector: 'app-game-delete',
  templateUrl: './game-delete.component.html',
  styleUrls: ['./game-delete.component.css']
})
export class GameDeleteComponent implements OnInit {

  game: Game;

  constructor(private gameService: GameService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.readByID(id).subscribe(game =>{
      this.game = game;
    });
  }

  deleteGame(): void {
    this.gameService.delete(this.game.id).subscribe(()=>{
      this.gameService.showMessage('Game excluído com sucesso!');
      this.router.navigate(['/games']);
    });
  }

  cancel(): void {
    this.router.navigate(['/games']);
  }

}
