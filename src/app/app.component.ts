import {
  Component
} from '@angular/core';
import {
  DataService
} from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebas';
  alumnos = ['mariela', 'poppy'];
  albums = [];
  posts = [];

  defecto=5;

  
  constructor(private dataservice: DataService) {
 
   this.dataservice.getData().subscribe(data => {
    this.albums = data.filter(data => data.id < 21);
    console.log("imagenes",  this.albums.length);
    })
    
    this.dataservice.getDato().subscribe(data => {
     
      this.posts = data.filter(data => data.id < this.defecto);
      console.log("post", this.posts.length);
    })

  }

  albumFinder(ev:number) {
   ev++;
    this.dataservice.getDato().subscribe(data => {
      this.posts = data.filter(data => data.id < ev);
      console.log("post", this.posts.length);
    })
  
  
  }
}
