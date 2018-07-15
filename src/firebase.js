import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDnNAzrR6P6kypAve8WZ1tiuDvEZiG8zZo",
    authDomain: "forms-test-cf340.firebaseapp.com",
    databaseURL: "https://forms-test-cf340.firebaseio.com",
    projectId: "forms-test-cf340",
    storageBucket: "forms-test-cf340.appspot.com",
    messagingSenderId: "861161509644"
  };

  firebase.initializeApp(config);

  firebase.database().ref().set('it works');