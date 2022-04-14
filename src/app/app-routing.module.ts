import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Import components
import { GiphyTrendingComponent } from './components/giphy-trending/giphy-trending.component';
import { GiphyDisplayComponent } from './components/giphy-display/giphy-display.component';

const routes: Routes = [
  //Define the path and component
  {path:'',component:GiphyDisplayComponent},
  {path:'trending',component:GiphyTrendingComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
