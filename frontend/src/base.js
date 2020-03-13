import *as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCvZHTl5ujtyyQn26MIN_---HhmlMF4SBQ",
    authDomain: "projecthope-web.firebaseapp.com",
    databaseURL: "https://projecthope-web.firebaseio.com",
    projectId: "projecthope-web",
    storageBucket: "projecthope-web.appspot.com",
    messagingSenderId: "1060643906970",
    appId: "1:1060643906970:web:f74b469c6028966c334623",
    measurementId: "G-EXQG21Q7QV"
});

export default app;