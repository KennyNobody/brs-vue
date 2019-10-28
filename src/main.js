import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
// import * as firebase from 'firebase'
import lineClamp from 'vue-line-clamp'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	axios,
	lineClamp,
	render: h => h(App),
	created () {
		this.$store.dispatch('fetchPosts')
	}
}).$mount('#app')
