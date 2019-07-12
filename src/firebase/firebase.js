import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBmQ5F-70OdIpFgFTS-bMPCqVDsKxErEaU",
    authDomain: "expensify-34e6b.firebaseapp.com",
    databaseURL: "https://expensify-34e6b.firebaseio.com",
    projectId: "expensify-34e6b",
    storageBucket: "expensify-34e6b.appspot.com",
    messagingSenderId: "259189967736",
    appId: "1:259189967736:web:96276f5e551c55af"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };