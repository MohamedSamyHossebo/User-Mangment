import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchCardComponent } from './search-card/search-card.component';
import { SpinnerComponent } from './spinner/spinner.component';





@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserDetailsComponent,
    SearchComponent,
    SearchCardComponent,
    SpinnerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
