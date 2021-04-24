import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyApydDs67HRnWgAlgBGY-PpP-SYe4DpGzo",
    authDomain: "study-firebase-24bb4.firebaseapp.com",
    projectId: "study-firebase-24bb4",
    storageBucket: "study-firebase-24bb4.appspot.com",
    messagingSenderId: "302922282926",
    appId: "1:302922282926:web:b9bc2b17a64ef98c84ba3f",
    measurementId: "G-NF0V9ZFJ5J"
  };
  // Initialize Firebase
export const firebaseApp        = firebase.initializeApp(firebaseConfig);
export const tasksRef           =firebase.database().ref('task/')
export const taskCompletedRef   =firebase.database().ref('taskCompleted/')