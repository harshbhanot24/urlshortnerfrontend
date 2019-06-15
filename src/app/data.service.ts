import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }
  createurl(resource){
   let url={
     "url":resource.url
   }
    return this.http.post('https://harshurl.herokuapp.com/shortner',url)   
}
getURL(url){
  let url={
    "url":url.shorturl
  }
  console.log('the url being pposted is '+(url.url))
  return this.http.post('https://harshurl.herokuapp.com/expand',url)  
}
}
