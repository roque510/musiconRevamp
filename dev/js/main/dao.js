import * as firebase from 'firebase';
import $ from 'jquery';

import fc from '../functions.js'


//fc().alertit();
var urId = fc().getParameterByName('id')
console.log(urId);

var app = firebase.initializeApp({
    apiKey: "AIzaSyDeZkQBGdd7NAzhUkmc1rtN7WoPcqgc0Pg",
    authDomain: "musicon-face6.firebaseapp.com",
    databaseURL: "https://musicon-face6.firebaseio.com",
    projectId: "musicon-face6",
    storageBucket: "musicon-face6.appspot.com",
    messagingSenderId: "1039167301078"
});
let dao = "daoDAO";
let id = 0;

var database = firebase.database();


var postsRef = firebase.database().ref('posts');
postsRef.once("value",(snapshot) => { id = snapshot.numChildren()});


var posts = firebase.database().ref('posts').orderByKey().limitToFirst(1);
posts.once('value', function(snapshot) {
	let object = snapshot.val();
	let obj = "";
	obj = object[Object.keys(object)[0]];
		$("#postTitle").html(obj.titulo);
		$("#postDesc").html(obj.descripcion);	
	
	
  
});

var childs = firebase.database().ref('posts/');

childs.once("value", function(snapshot) {
	id = snapshot.numChildren();
	id++;
  console.log("There are :::"+id+" messages");
})

$("#postBtn").unbind().click((e) =>{
	console.log(id);

	var newPostRef = postsRef.push().set({
		id: id + 1,
		contador: 0,
		descripcion: "hola mi nombre es armando roque barahona y estoy typeando lo mas que pueda para propositos de una sola descripcion",
		titulo: "2 Titulo",
		foto: "https://i.ytimg.com/vi/t_FNbmflIBo/maxresdefault.jpg",
		url: "www.google.com",
		titulo: "ME MYSELF AND I"
	});
});


  module.exports = dao;