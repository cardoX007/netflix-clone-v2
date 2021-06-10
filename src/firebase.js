import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCnt48TxclhwsnWIKAoqs4ZBJNRCCk1YFw",
    authDomain: "netflix-clone-v2-3badd.firebaseapp.com",
    projectId: "netflix-clone-v2-3badd",
    storageBucket: "netflix-clone-v2-3badd.appspot.com",
    messagingSenderId: "448429253484",
    appId: "1:448429253484:web:b846de63d848b03ae64949"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;