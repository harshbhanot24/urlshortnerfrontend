import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   url;
   originalurl;
   redirecturl;
  constructor(private service:DataService){

  }
  title = 'urlAPP';
  urlForm = new FormGroup(
    {
      url: new FormControl('', [Validators.required])
    }
    
);
expandForm = new FormGroup(
  {
    shorturl: new FormControl('', [Validators.required])
  }
);
shorten(){
  console.log(this.urlForm.value);
  this.service.createurl(this.urlForm.value).subscribe(
    (data)=>{
      console.log(data);
      let temp=(data['url']);
      this.originalurl=temp['url'];
      this.url=temp['shortenedUrl'];
    },
    (err)=>{
      alert('url already exist')
      this.urlForm.reset();
    }
  )
}
redirect(){
  console.log(this.expandForm.value);
  this.service.getURL(this.expandForm.value).subscribe(
    (data)=>{
      console.log(data);
      let temp=(data['url']);
      // this.originalurl=temp['url'];
      this.redirecturl=temp['url'];
      window.open(this.redirecturl, '_self');
    },
    (err)=>{
      alert('url doesnot exist')
      this.expandForm.reset();
    }
  )
}
}
