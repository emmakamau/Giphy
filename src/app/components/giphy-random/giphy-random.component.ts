import { Component, OnInit } from '@angular/core';
import { GiphyServicesService } from 'src/app/services/giphy-services.service';

@Component({
  selector: 'app-giphy-random',
  templateUrl: './giphy-random.component.html',
  styleUrls: ['./giphy-random.component.css']
})
export class GiphyRandomComponent implements OnInit {
  randomGif:any;

  constructor(private giphyService:GiphyServicesService) { }

  ngOnInit(): void {
    this.giphyService.randomGifs().subscribe(response=>{
      this.randomGif = response['data']
    })
  }

}
