importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAUcGPl43PX4zcwqny2lYqIuG0iavTGIQM",
    authDomain: "notification-efa6f.firebaseapp.com",
    projectId: "notification-efa6f",
    storageBucket: "notification-efa6f.appspot.com",
    messagingSenderId: "1027665847677",
    appId: "1:1027665847677:web:63d0e14f1eebcd50069814"
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});