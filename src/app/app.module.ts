import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //Import HttpClient
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { GiphyDisplayComponent } from './components/giphy-display/giphy-display.component';
import { GiphyTrendingComponent } from './components/giphy-trending/giphy-trending.component';
import { GiphyRandomComponent } from './components/giphy-random/giphy-random.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    GiphyDisplayComponent,
    GiphyTrendingComponent,
    GiphyRandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
