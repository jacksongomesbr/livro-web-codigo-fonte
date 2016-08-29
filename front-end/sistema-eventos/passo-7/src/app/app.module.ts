import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { EventosListComponent } from './eventos-list.component';
import { EventosEditorComponent } from './eventos-editor.component';
import { EventosDetalhesComponent } from './eventos-detalhes.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpModule 
  ],
  declarations: [ 
    AppComponent, 
    EventosListComponent, 
    EventosEditorComponent, 
    EventosDetalhesComponent 
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }