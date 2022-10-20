import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBC6Cv-A7-n9bd-xwsgueZ51FloSo3BqHU",
  authDomain: "primer-proyecto-react-nine.firebaseapp.com",
  projectId: "primer-proyecto-react-nine",
  storageBucket: "primer-proyecto-react-nine.appspot.com",
  messagingSenderId: "228483391843",
  appId: "1:228483391843:web:be329c1a49ca591fdfb356",
  measurementId: "G-T4EHHZX85P"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
