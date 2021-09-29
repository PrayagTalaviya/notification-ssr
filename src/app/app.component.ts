import { Component } from '@angular/core';
import { NotificationService } from './shared/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoAmgular';
  constructor(public noti:NotificationService){
    this.noti.requestPermission()
  }
  send(){
    this.noti.requestPermission()
  }
}
