import React from "react";
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import Menu from './component/menu.js'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from './component/header.js';
import Login from './component/Login.js';
import Recomendado from './component/recomendado.js';
import Almacenar from './component/almacenar.js';



//
//ReactDOM.render("que voy a rederizar", "donde voy a rederizar");
//const miContenido= <h1> Hola react</h1>;

const Miapp = document.getElementById("app");

//Enlace Firebase

firebase.initializeApp({
  apiKey: "AIzaSyB-Vwq6r4iqPZ2dh0o54zt99t9i8UWFvH4",
  authDomain: "report-64ed7.firebaseapp.com",
  databaseURL: "https://report-64ed7.firebaseio.com",
  projectId: "report-64ed7",
  storageBucket: "report-64ed7.appspot.com",
  messagingSenderId: "86746359699"
});


ReactDOM.render(

  <div>

    
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Paper><Header /></Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper><Menu /></Paper>
      </Grid>
    </Grid>

    <br />
    <br />

    <Grid container spacing={24}>
      <Grid item xs={3}>
        <Paper><Login /></Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper><Almacenar /></Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper><Almacenar /></Paper>
      </Grid>
    </Grid>

    <br />
    <br />


    <Grid container spacing={24}>
      <Grid item xs={6}>
        <Paper>

          <Grid container spacing={24}>
            <Grid item xs={6}>
              <Paper><Recomendado /></Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper><Recomendado /></Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper><Recomendado /></Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper><Recomendado /></Paper>
            </Grid>
          </Grid>

        </Paper>
      </Grid>
      
    </Grid>

  </div>
  , Miapp);