import { Component, OnInit } from '@angular/core';
import { GiphyServicesService } from 'src/app/services/giphy-services.service';

@Component({
  selector: 'app-giphy-trending',
  templateUrl: './giphy-trending.component.html',
  styleUrls: ['./giphy-trending.component.css']
})
export class GiphyTrendingComponent implements OnInit {
  trendingGifs:any;

  constructor(private gifService:GiphyServicesService) { }

  ngOnInit(): void {
    this.gifService.trendingGifs()
    .subscribe(response => {
      // tslint:disable-next-line: no-string-literal
      this.trendingGifs = response['data'];
    });
  }

}
