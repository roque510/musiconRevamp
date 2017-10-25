import * as firebase from 'firebase';
import $ from 'jquery';
var app = firebase.initializeApp({
    apiKey: "AIzaSyDeZkQBGdd7NAzhUkmc1rtN7WoPcqgc0Pg",
    authDomain: "musicon-face6.firebaseapp.com",
    databaseURL: "https://musicon-face6.firebaseio.com",
    projectId: "musicon-face6",
    storageBucket: "musicon-face6.appspot.com",
    messagingSenderId: "1039167301078"
});
let dao = "daoDAO";

var database = firebase.database();



var titulo = firebase.database().ref('posts/titulo');
titulo.on('value', function(snapshot) {
	$("#postTitle").html(snapshot.val());
  
});


  module.exports = dao;