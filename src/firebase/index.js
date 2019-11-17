import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyBgZLkRNGZ5YE9wrjTlBovk1WJVpaoWLBw',
  authDomain: 'reactshopingweb.firebaseapp.com',
  databaseURL: 'https://reactshopingweb.firebaseio.com',
  projectId: 'reactshopingweb',
  storageBucket: 'reactshopingweb.appspot.com',
  messagingSenderId: '679928939039',
  appId: '1:679928939039:web:6d81b3e6d99fc543548b2a'
} // Replace your firebase project

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

// db.settings({
//   timestampsInSnapshots: true
// })

export default {
  db,
  auth,
  storage
}
