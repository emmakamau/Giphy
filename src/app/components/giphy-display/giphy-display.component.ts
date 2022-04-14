import { Component, OnInit } from '@angular/core';
import { GiphyServicesService } from 'src/app/services/giphy-services.service';

@Component({
  selector: 'app-giphy-display',
  templateUrl: './giphy-display.component.html',
  styleUrls: ['./giphy-display.component.css']
})

export class GiphyDisplayComponent implements OnInit {
  gifs:any;
  searchQuery: string;
  notFound = false;

  constructor(private gifServices:GiphyServicesService) { }

  searchGifs(){
    this.gifServices.searchGifs(this.searchQuery);
    console.log(this.searchQuery)
    this.gifServices.displayGifs().subscribe(results => {
      console.log(results['data']);
      this.gifs = results['data'];
    }, error => {
      alert('not found :(');
    });
    this.searchQuery = '';
  }

  ngOnInit(): void {
    this.gifServices.displayGifs().subscribe(response=>{
      this.gifs = response['data']
    })
  }

}
