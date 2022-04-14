import { Injectable } from '@angular/core'; //Import the injectable decorator
import { HttpClient } from '@angular/common/http'; //Import Httpclient -helps in communicating with the API

@Injectable({
  providedIn: 'root'
})
export class GiphyServicesService {

  constructor(http:HttpClient) { } //Create a property http with the type HttpClient class

  trendingGifs(){
    return this.http.get("https://api.giphy.com/v1/gifs/trending?api_key=bF6FWo81vSpoc7d8XFDBKJ7GHDxFFNkB&limit=25&rating=g")
  }

}
