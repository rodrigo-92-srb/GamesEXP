import { GameCreateComponent } from './components/game/game-create/game-create.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
