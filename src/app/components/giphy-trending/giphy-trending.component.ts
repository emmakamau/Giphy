import { Component, OnInit } from '@angular/core';
import { GiphyServicesService } from 'src/app/services/giphy-services.service';

@Component({
  selector: 'app-giphy-trending',
  templateUrl: './giphy-trending.component.html',
  styleUrls: ['./giphy-trending.component.css']
})
export class GiphyTrendingComponent implements OnInit {
  trendingGifs: any;

  constructor(private gifService:GiphyServicesService) { }

  ngOnInit(): void {
    //Get response from the api through the service
    this.gifService.trendingGifs()
    .subscribe(response => {
      this.trendingGifs = response['data'];
    });
  }

}
