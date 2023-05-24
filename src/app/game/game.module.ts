import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { MaterialModule } from '../material/material.module';

import { GameComponent } from './pages/game/game.component';
import { GameoverComponent } from './pages/gameover/gameover.component';
import { PokemonViewComponent } from './components/pokemon-view/pokemon-view.component';
import { HabilitatsAramMateosComponent } from './components/habilitats-aram-mateos/habilitats-aram-mateos.component';
import { HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    GameComponent,
    GameoverComponent,
    PokemonViewComponent,
    HabilitatsAramMateosComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class GameModule { }
