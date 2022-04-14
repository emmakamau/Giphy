import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiphyTrendingComponent } from './components/giphy-trending/giphy-trending.component';

const routes: Routes = [
  {path:'trending',component:GiphyTrendingComponent} //Define the path,name and component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
