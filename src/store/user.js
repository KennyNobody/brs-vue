import * as firebase from 'firebase'
import router from './../router'

class User {
	constructor (id) {
		this.id = id
	}
}

export default {
	state: {
		user: null
	},
	mutations: {
		setUser (state, payload) {
			state.user = payload
		}
	},
	actions: {
		registerUser ({ commit }, { email, password }) {
			commit('clearError')
			commit('setLoading', true)
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => {
				commit('setUser', new User(user.uid))
				commit('setLoading', false)
				router.push('../sign-in')
			})
			.catch(error => {
				commit('setLoading', false)
				commit('clearError', error.message)
			})
		},
		loginUser ({ commit }, { email, password }) {
			commit('clearError')
			commit('setLoading', true)
			firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => {
				commit('setUser', new User(user.uid))
				commit('setLoading', false)
				router.push('/')
			})
			.catch(error => {
				commit('setLoading', false)
				commit('clearError', error.message)
			})
		},
		autoLoginUser ({ commit }, payload) {
			commit('setUser', new User(payload.uid))
		},
		logoutUser ({ commit }) {
			firebase.auth().signOut()
			commit('setUser', null)
			router.push('/')
		}
	},
	getters: {
		user (state) {
			return state.user
		},
		isUserLogIn (state) {
			return state.user !== null
		}
	}
}
