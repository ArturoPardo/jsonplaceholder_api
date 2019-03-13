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
  defecto='';
  colores=[];
  clase:string="true";

  
  constructor(private dataservice: DataService) {
  
   this.dataservice.getData().subscribe(data => {
    var random = Math.round(Math.random()*(21-11)+11);
    this.albums = data.filter(data => data.id < random); 
    var random2 = Math.round(Math.random()*(random-1)+1);
      for(let i=1;i<random;i++){    
        this.colores.push(i*random2);
       
      }
      console.log("imagenes",  this.albums.length);
      console.log ("colores",JSON.stringify(this.colores));
   
    })
    
   

    this.dataservice.getDato().subscribe(data => {
    
    
      this.posts = data.filter(data => data.body.match(this.defecto));
      console.log("post", this.posts.length);
     
     

      for(let i=0;i<this.posts.length;i++){
        
        
        if (i%2!=0){console.log("impar", i);
        }
        else{  console.log("par", i);
        }
        
      
      
      }
      
      
    
    
   
    })
  
  }

  albumFinder(ev:string) {
  //  ev++;
  //   this.dataservice.getDato().subscribe(data => {
  //     this.posts = data.filter(data => data.id < ev);
   
  //     console.log("post", this.posts.length);
  //   })
var query = ev;
    this.dataservice.getDato().subscribe(data => {
      this.posts = data.filter(data => data.body.match(query));





 }
     
    )

  
  }
  borrar(){

    var query = '';
    this.dataservice.getDato().subscribe(data => {
      this.posts = data.filter(data => data.body.match(query));
     
      console.log("post", this.posts.length);
    })


  }
}
