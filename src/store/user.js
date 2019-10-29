import * as firebase from 'firebase'
import router from './../router'

class User {
	constructor (id) {
		this.id = id
	}
}

class LocalUser {
	constructor (userId, education, sex, info, country, birthDay, birthMounth, birthYear, formOrganization, companyName, inn, city, name, surname, phone, email) {
		this.userId = userId
		this.education = education
		this.sex = sex
		this.info = info
		this.country = country
		this.birthDay = birthDay
		this.birthMounth = birthMounth
		this.birthYear = birthYear
		this.formOrganization = formOrganization
		this.companyName = companyName
		this.inn = inn
		this.city = city
		this.name = name
		this.surname = surname
		this.phone = phone
		this.email = email
	}
}

export default {
	state: {
		user: null,
		localUser: {
			id: null,
			education: 'Не указано',
			sex: 'Не указано',
			info: 'Не указано',
			country: 'Не указано',
			birthDay: '1',
			birthMounth: '01',
			birthYear: '1900',
			formOrganization: 'Не указано',
			companyName: 'Не указано',
			inn: 'Не указано',
			city: 'Не указано',
			name: 'Не указано',
			surname: 'Не указано',
			phone: 'Не указано',
			email: 'Не указано'
		}
	},
	mutations: {
		setUser (state, payload) {
			state.user = payload
		},
		setLocalUser (state, payload) {
			state.localUser = payload
		}
	},
	actions: {
		async registerUser ({ commit }, { email, password, payload }) {
			commit('clearError')
			commit('setLoading', true)
			await firebase.auth().createUserWithEmailAndPassword(email, password)
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
		addLocalUser ({ commit, getters }, payload) {
			const newLocalUser = new LocalUser(
				getters.user.id,
				payload.education,
				payload.sex,
				payload.info,
				payload.country,
				payload.birthDay,
				payload.birthMounth,
				payload.birthYear,
				payload.formOrganization,
				payload.companyName,
				payload.inn,
				payload.city,
				payload.name,
				payload.surname,
				payload.phone,
				payload.email
				)
			firebase.database().ref('users').child(getters.user.id).set(newLocalUser)
			commit('setLocalUser', newLocalUser)
		},
		changeLocalUser ({ commit, getters }, payload) {
			firebase.database().ref('users').child(getters.user.id).set(getters.localUser)
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
		loginLocalUser ({ commit, getters }, payload) {
			commit('setLocalUser', new User(firebase.database().ref('users').once(getters.user.id)))
		},
		autoLoginUser ({ commit, getters }, payload) {
			commit('setUser', new User(payload.uid))
			const userId = firebase.auth().currentUser.uid
			firebase.database().ref('/users/' + userId).once('value')
			.then(snapshot => {
				commit('setLocalUser', snapshot.val())
			})
		},
		logoutUser ({ commit }) {
			firebase.auth().signOut()
			commit('setUser', null)
			commit('setLocalUser', new LocalUser(
				null,
				'Не указано',
				'Не указано',
				'Не указано',
				'Не указано',
				'Не указано',
				'1',
				'01',
				'1900',
				'Не указано',
				'Не указано',
				'Не указано',
				'Не указано',
				'Не указано',
				'Не указано',
				'Не указано',
				'Не указано'
				))
			router.push('/')
		}
	},
	getters: {
		user (state) {
			return state.user
		},
		localUser (state) {
			return state.localUser
		},
		isUserLogIn (state) {
			return state.user !== null
		}
	}
}
