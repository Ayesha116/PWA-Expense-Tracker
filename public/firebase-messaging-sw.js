importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js')

const config = {
    apiKey: "AIzaSyAvlmoVcDGSTU7MqcOCnWR5frevmyzcV64",
    authDomain: "pwa-practice-8d5ce.firebaseapp.com",
    projectId: "pwa-practice-8d5ce",
    storageBucket: "pwa-practice-8d5ce.appspot.com",
    messagingSenderId: "434024461969",
    appId: "1:434024461969:web:3841eda935aa0255f03130"
}
firebase.initializeApp(config);
firebase.messaging();