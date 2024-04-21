/*import { Component, OnDestroy, OnInit, afterNextRender } from '@angular/core';
import { BehaviorSubject, Observable, Subject, take } from 'rxjs';
import { Ialumnos } from '../users/models';

@Component({
  selector: 'app-clase10-rxjs2',
  templateUrl: './clase10-rxjs2.component.html',
  styleUrl: './clase10-rxjs2.component.scss'
})
export class Clase10Rxjs2Component implements OnInit {

   cambioElAlumno$ = new Subject<boolean>();
   


    alumnoConfirmado$ =new BehaviorSubject<Ialumnos|null>(null);
  logIn(): void {
    this.cambioElAlumno$.next(true)
   }

  

  ngOnInit(): void {
    const obtenerAlumno$ = new Observable((observer) => {
      observer.next()

    });

    this.cambioElAlumno$.subscribe(
      {next:(value)=>{
        console.log(value);
        this.alumnoConfirmado$.next({
          nombre:'valeria',
          apellido:'suarez',
          dni:33085583,
          email:'vale@gmail.com',
          materia:'Desarrollo wed',
          nota:8,
          estado:'Aprobado'

        })
      },})

      this.alumnoConfirmado$.subscribe({
        next:(value)=>{
          console.log(value)
        }
      })
    
      }

  }
*/