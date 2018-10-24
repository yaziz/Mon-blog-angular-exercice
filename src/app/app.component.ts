import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: 'AIzaSyBusaruO8AlrLfU9HjLczij2BtRUAte2NA',
      authDomain: 'mon-blog-exercice.firebaseapp.com',
      databaseURL: 'https://mon-blog-exercice.firebaseio.com',
      projectId: 'mon-blog-exercice',
      storageBucket: '',
      messagingSenderId: '846349113402'
    };
    firebase.initializeApp(config);
  }


}
