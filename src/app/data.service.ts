import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Albums, Posts} from './models';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) { 
    console.log("service is working");
  }
  getData(){
    return this.httpclient.get<Albums[]>('https://jsonplaceholder.typicode.com/photos')
  }
  

  getDato(){
    return this.httpclient.get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
  }

}
