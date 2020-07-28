import { GameDeleteComponent } from './components/game/game-delete/game-delete.component';
import { GameCreateComponent } from './components/game/game-create/game-create.component';
import { GameUpdateComponent } from './components/game/game-update/game-update.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {GameCrudComponent} from './views/game-crud/game-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "games",
    component: GameCrudComponent
  },
  {
    path:"games/create",
    component: GameCreateComponent
  },
  {
    path:"games/update/:id",
    component: GameUpdateComponent
  },
  {
    path:"games/delete/:id",
    component: GameDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
