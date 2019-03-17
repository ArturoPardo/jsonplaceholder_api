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
  ejemplo = [1, 8, 9, 10, 11, 12]
  ejemplo_resultado = []
  primero = this.ejemplo[0];
  longitud = this.ejemplo.length;
  ultimo: number = this.ejemplo[this.longitud - 1];
  // --------------Pruebas
  comparativa = [];
  mio = [];
 // --------------albums
 posts = [];
 defecto = '';

  albums = [];
  username: string = '';
 
  

  constructor(private dataservice: DataService) {
   

   while (this.ejemplo_resultado.length < 4) {
      var aleatorio = Math.round(Math.random() * (this.ultimo - this.primero) + this.primero);
     // --------------aleatorio es un numero entre 1 y 7
  
      let indice = this.ejemplo.find(data => data == aleatorio);
       // --------------indice es el dato dentro dela array que coincide con aleatorio
        // --------------si el numero ya esta dentro del nuevo array de resultados o no existe indice....
      if(indice ==this.ejemplo_resultado.find(data => data == indice)|| indice != this.ejemplo.find(data => data == aleatorio) ){}
     else{ this.ejemplo_resultado.push(indice);}
    }
   var miArray = this.ejemplo_resultado;
   var valor_resto = miArray.shift();
   console.log("miArray",this.ejemplo_resultado);
   console.log("resto",valor_resto);
    

    // --------------sacamos albums del api
    this.dataservice.getData().subscribe(data => {
     var random = Math.round(Math.random() * (21 - 11) + 11);
      // --------------sacamos un numero del 10 al 20. random es la cantidad que de datos a mostrar

      for (let i = 1; i < random; i++) {
        var ides = Math.round(Math.random() * (data.length - i) + i);
         // --------------sacamos un ides entre 1 y 5000 y los metemos en comparativa y colores
        this.comparativa.push(ides);
      
      }
       // --------------cargamos array de albums
      let arreglo = data;
      for (let i = 0; i < this.comparativa.length; i++) {
        let busqueda = this.comparativa[i]; // -------------sacamos el valor de la posicion 0,1,2.. del array
        let indice = arreglo.find(data => data.id == busqueda);
        // -------------lo buscamos dentro del array de albums y lo metemos en el nuevo
        this.mio.push(indice);
      }
    })
  

 // --------------POSTS
    this.dataservice.getDato().subscribe(data => {
 
 // -------------lo buscamos dentro del array de albums y lo metemos en el nuevo
      this.posts = data.filter(data => data.body.match(this.defecto));
       // -------------post es un array de un filtro que coincide con "" =Todos
     
    })

  }
  

  albumFinder() {
     // query es el ngmodel enviado
       var query = this.username;
       this.dataservice.getDato().subscribe(data => {
       this.posts = data.filter(data => data.title.match(query));
      }
    )
  }
  borrar() {
    var query = '';
    this.dataservice.getDato().subscribe(data => {
      this.posts = data.filter(data => data.title.match(query));
      this.username='';
    })

  }

}
