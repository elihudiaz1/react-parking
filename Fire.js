
import * as firebase from 'firebase/app';
import "firebase/firestore"

var firebaseConfig = {
 apiKey: "AIzaSyB3Q5DZGJNm0QtYO9ByHGVJpi3wha8RyfA",
 authDomain: "university-parking-3bfc0.firebaseapp.com",
 databaseURL: "https://university-parking-3bfc0.firebaseio.com",
 projectId: "university-parking-3bfc0",
 storageBucket: "university-parking-3bfc0.appspot.com",
 messagingSenderId: "977186464598",
 appId: "1:977186464598:web:600f142814b83b291a2cf7"
};



firebase.initializeApp(firebaseConfig);




export default firebase;
export const firestore = firebase.firestore();