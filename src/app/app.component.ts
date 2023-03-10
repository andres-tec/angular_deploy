import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoggingService } from './loggin.service';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<fromApp.AppState>,
    private loggingService: LoggingService
  ) {}
  ngOnInit(): void {
    this.store.dispatch(new AuthActions.AutoLogin());

    this.loggingService.printLog('Hellos from AppComponent NgOnInit ');
  }

  //  loadedfeature:string ='recipe';
  //  onNavigate(feature:string){
  //   this.loadedfeature=feature;
  //  }
}
