import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HitosComponent } from './hitos/hitos.component';

@NgModule({
  declarations: [
    AppComponent,
    HitosComponent
  ],
  imports: 
  [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{   
}
