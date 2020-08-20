import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HitosComponent } from './hitos/hitos.component';
import { HitoDetailComponent } from './hito-detail/hito-detail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
@NgModule({
  declarations: [
    AppComponent,
    HitosComponent,
    HitoDetailComponent    
  ],
  imports: 
  [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{   
}
