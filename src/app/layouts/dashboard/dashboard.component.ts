import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../app/core/auth.service';
import { Observable,Subscription } from 'rxjs';
import { Ialumnos } from './pages/users/models/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;

  authUser$:Observable<Ialumnos |null>;

    constructor(private  authService: AuthService){
    this.authUser$ = this.authService.alumnoAutenticado$;
  }
  
  ngOnInit():void{}

  login():void{
    this.authService.login();
  }
  logout():void{
    this.authService.logout()
  }
}
