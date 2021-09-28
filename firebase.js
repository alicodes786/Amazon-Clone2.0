var firebaseConfig = {
  apiKey: "AIzaSyB-CSW1w7QUEEJx4OeZY13obw-IIKJd4e0",
  authDomain: "clonetwo-7ee7b.firebaseapp.com",
  projectId: "clonetwo-7ee7b",
  storageBucket: "clonetwo-7ee7b.appspot.com",
  messagingSenderId: "441203815017",
  appId: "1:441203815017:web:02d314721439dd488468f8",
  measurementId: "G-S3TPDZLCZZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();