import { Injectable } from '@angular/core'; //Import the injectable decorator
import { HttpClient } from '@angular/common/http'; //Import Httpclient -helps in communicating with the API

@Injectable({
  providedIn: 'root'
})
export class GiphyServicesService {
  private query: string;
  constructor(private http:HttpClient) { } //Create a property http with the type HttpClient class

  /*
    -Add functions to get gifs from the API
    -We add any to typecast since http.get is by default returning an object 
      (This is why we create interfaces - refer to the Goals app)
  */
  searchGifs(query:string){
    this.query = query;
  }

  displayGifs(){
    return this.http.get<any>("https://api.giphy.com/v1/gifs/search?api_key=bF6FWo81vSpoc7d8XFDBKJ7GHDxFFNkB&q=q&limit=12&offset=0&rating=g&lang=en")
  }

  trendingGifs(){
    return this.http.get<any>("https://api.giphy.com/v1/gifs/trending?api_key=bF6FWo81vSpoc7d8XFDBKJ7GHDxFFNkB&limit=25&rating=g")
  }

  randomGifs(){
    return this.http.get<any>("https://api.giphy.com/v1/gifs/random?api_key=bF6FWo81vSpoc7d8XFDBKJ7GHDxFFNkB&tag=&rating=g")
  }

}
