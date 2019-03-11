import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
@Input() dato;
  constructor() { }

  ngOnInit() {
  }

}
