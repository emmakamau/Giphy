import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { GiphyDisplayComponent } from './components/giphy-display/giphy-display.component';
import { GiphyTrendingComponent } from './components/giphy-trending/giphy-trending.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    GiphyDisplayComponent,
    GiphyTrendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
