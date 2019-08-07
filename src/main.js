import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import * as firebase from 'firebase'
import lineClamp from 'vue-line-clamp'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	axios,
	lineClamp,
	render: h => h(App),
	created () {
		firebase.initializeApp({
			apiKey: 'AIzaSyBbwTNI-0J1TCNDug5GZ_SXxnPMM1Nl0os',
			authDomain: 'brs-vue.firebaseapp.com',
			databaseURL: 'https://brs-vue.firebaseio.com',
			projectId: 'brs-vue',
			storageBucket: '',
			messagingSenderId: '711242959576',
			appId: '1:711242959576:web:35099922803da125'
		})

		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.$store.dispatch('autoLoginUser', user)
			}
		})
	}
}).$mount('#app')
