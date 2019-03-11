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

  constructor(private dataservice: DataService) {

    this.dataservice.getData().subscribe(data => {
      console.log("imagenes", data.length);
      this.albums = data;
    })
    this.dataservice.getDato().subscribe(data => {

      this.posts = data.filter(data => data.id > 14);
      console.log("post", this.posts.length);
    })

  }
  filtrado() {
    console.log("filtrado");
  }

}
