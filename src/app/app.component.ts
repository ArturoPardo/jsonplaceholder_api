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

  albums = [];
  posts = [];
  defecto = '';
  colores = [];
  clase: string = "true";
  username: string = '';
  comparativa=[];
mio=[];
 
  constructor(private dataservice: DataService) {

    this.dataservice.getData().subscribe(data => {
      var random = Math.round(Math.random() * (21 - 11) + 11);
      // this.albums = data.filter(data => data.id < random);
     
      for (let i = 1; i < random; i++) {
        var random2 = Math.round(Math.random() * (data.length- i) + i);
        this.comparativa.push(random2);
        this.colores.push(random2);
      } 



      let arreglo = data;
      for (let i=0;i<this.comparativa.length;i++){
        let busqueda = this.comparativa[i];
              let indice = arreglo.find(data => data.id ==busqueda);
              console.log(indice);
              this.mio.push(indice);
       
      
      
      }

    })



    this.dataservice.getDato().subscribe(data => {


      this.posts = data.filter(data => data.body.match(this.defecto));
      console.log("post", this.posts.length);



      for (let i = 0; i < this.posts.length; i++) {


        if (i % 2 != 0) {
          console.log("impar", i);
        } else {
          console.log("par", i);
        }

      }

    })

  }

  albumFinder() {
  
    var query = this.username;
    this.dataservice.getDato().subscribe(data => {
        this.posts = data.filter(data => data.body.match(query));


      }

    )


  }
  borrar() {

    var query = '';
    this.dataservice.getDato().subscribe(data => {
      this.posts = data.filter(data => data.body.match(query));

      console.log("post", this.posts.length);
    })


  }
}
