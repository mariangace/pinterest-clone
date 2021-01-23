  import firebase from 'firebase';
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB2PlBmGmdd71oSu4RG4s6upUat6iqfFlA",
    authDomain: "pinterest-clone-3d680.firebaseapp.com",
    projectId: "pinterest-clone-3d680",
    storageBucket: "pinterest-clone-3d680.appspot.com",
    messagingSenderId: "953112253957",
    appId: "1:953112253957:web:6957cc4a8cc95baf512e6c",
    measurementId: "G-9G7B68M4MH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db; 

