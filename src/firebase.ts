import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC7GZtgzHRkhMo_cD16mb4OO4nmrJ3qvgw',
  authDomain: 'yaspa-cb163.firebaseapp.com',
  databaseURL: 'https://yaspa-cb163.firebaseio.com',
  projectId: 'yaspa-cb163',
  storageBucket: 'yaspa-cb163.appspot.com',
  messagingSenderId: '161920615535',
  appId: '1:161920615535:web:0db5a626c190ee60',
};
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const database = firebase.database();

export default firebase;
