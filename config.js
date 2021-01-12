import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDp9ELxBJ92a4XXJNNOFwb8SYxkYn-S80s",
    authDomain: "storyhub-2b593.firebaseapp.com",
    projectId: "storyhub-2b593",
    storageBucket: "storyhub-2b593.appspot.com",
    messagingSenderId: "111101369845",
    appId: "1:111101369845:web:748e8ddc1d0904a13c14bc"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();