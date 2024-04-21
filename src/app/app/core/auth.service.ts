import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Ialumnos } from "../../layouts/dashboard/pages/users/models";

@Injectable({providedIn:'root'})
export class AuthService{

    
    
    alumnoAutenticado$ = new BehaviorSubject<Ialumnos |null>(null);

    login():void{
        this.alumnoAutenticado$.next({
            nombre:'valeria',
            apellido:'suarez',
            dni:33085583,
            email:'vale@gmail.com',
            materia:'Desarrollo wed',
            nota:8,
            estado:'Aprobado'
  
        })
    }
    logout():void{
        this.alumnoAutenticado$.next(null)
    }

}