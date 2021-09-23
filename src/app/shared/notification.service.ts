
import { Injectable, TemplateRef } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { Subject } from 'rxjs';
import { mergeMapTo, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private afMessaging: AngularFireMessaging) {
  }
  requestPermission(): void {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges), take(1))
      .subscribe(
        (token) => {
          this.afMessaging.onTokenRefresh(tokenRefresh => {
            console.log('Token has been refreshed.', tokenRefresh);
          });
          console.log('Permission granted! Save to the server!', token);
          this.listen();
        },
        (error) => { console.error(error); },
      );
  }

  listen(): void {
    console.log('litions');
    this.afMessaging.onMessage(payload => {
      console.log('Message received. ', payload);
    });
  }
}