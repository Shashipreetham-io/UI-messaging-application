import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config={
  apiKey:'AIzaSyDo73wwORGuV_tpC4GYGcDQmjZoDnE4t0U',
  databaseURL:'https://clanchat-a7dd0.firebaseio.com'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clanchat';
constructor(){
  firebase.initializeApp(config);
}


}
