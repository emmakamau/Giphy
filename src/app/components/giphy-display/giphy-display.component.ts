import { Component, OnInit } from '@angular/core';
import { GiphyServicesService } from 'src/app/services/giphy-services.service';

@Component({
  selector: 'app-giphy-display',
  templateUrl: './giphy-display.component.html',
  styleUrls: ['./giphy-display.component.css']
})
export class GiphyDisplayComponent implements OnInit {
  gifs:any;

  constructor(private gifServices:GiphyServicesService) { }

  ngOnInit(): void {
    this.gifServices.displayGifs().subscribe(response =>{
      this.gifs = response['data']
    })

  }

}
