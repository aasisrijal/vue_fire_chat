// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDAt6I13zbayOd4Fyo1cBPsok_yP5AZlIE",
  authDomain: "vuefirechat98.firebaseapp.com",
  databaseURL: "https://vuefirechat98.firebaseio.com",
  projectId: "vuefirechat98",
  storageBucket: "vuefirechat98.appspot.com",
  messagingSenderId: "23587825565",
  appId: "1:23587825565:web:8df49b6677571c36637174",
  measurementId: "G-6CQTVQ2X14"
};
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
window.db = db;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
