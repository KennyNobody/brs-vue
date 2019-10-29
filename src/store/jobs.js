import * as firebase from 'firebase'

class Vacancy {
	constructor (
		vacancyOwnerId = null,
		vacancyId = null,
		vacancyName = null,
		vacancyPublish = null,
		vacancyThumb = 'http://placehold.it/1000x600',
		vacancyInfo = null,
		vacancyCity = null,
		vacancyTypes = null,
		vacancyOrganization = null,
		vacancyShedule = null,
		vacancyContacts = null,
		vacancyAdress = null,
		vacancyPhone = null,
		vacancyExperience = null,
		vacancySalary = null
		) {
		this.ownerId = vacancyOwnerId
		this.id = vacancyId
		this.title = vacancyName
		this.publish = vacancyPublish
		this.thumb = vacancyThumb
		this.content = vacancyInfo
		this.city = vacancyCity
		this.types = ['Тег 1', 'Тег 2', 'Тег 3']
		this.organization = 'ООО Тестовая компания'
		this.shedule = vacancyShedule
		this.contacts = 'Виктория Пшеничникова'
		this.adress = vacancyAdress
		this.phone = '+79991931303'
		this.experience = vacancyExperience
		this.salary = vacancySalary
	}
}

export default {
	state: {
		jobs: []
	},
	mutations: {
		createVacancy (state, payload) {
			state.jobs.push(payload)
		},
		loadJobs (state, payload) {
			state.jobs = payload
		}
	},
	actions: {
		async createVacancy ({ commit, getters }, payload) {
			commit('clearError')
			commit('setLoading', true)

			const image = payload.vacancyLogo

			try {
				const newVacancy = new Vacancy(
					getters.user.id,
					payload.vacancyId,
					payload.vacancyName,
					payload.publish,
					'',
					payload.vacancyInfo,
					payload.vacancyCity,
					payload.vacancyTypes,
					payload.vacancyOrganization,
					payload.vacancyShedule,
					payload.vacancyContacts,
					payload.vacancyAdress,
					payload.vacancyPhone,
					payload.vacancyExperience,
					payload.vacancySalary
					)
				const firebaseValue = await firebase.database().ref('jobs').push(newVacancy)
				const imageExt = image.name.slice(image.name.lastIndexOf('.'))
				// eslint-disable-next-line
				const fileData = await firebase.storage().ref(`jobs/${firebaseValue.key}.${imageExt}`).put(image)
				const imageSrc = await firebase.storage().ref(`jobs/${firebaseValue.key}.${imageExt}`).getDownloadURL().then(function (url) {
					return url
				})

				commit('setLoading', false)

				firebase.database().ref('jobs').child(firebaseValue.key).set({
					...newVacancy,
					id: firebaseValue.key,
					thumb: imageSrc,
					publish: (function () {
						const day = new Date()
						return day.getDate() + '.' + (day.getMonth() + 1) + '.' + day.getFullYear()
					})()
				})

				commit('createVacancy', {
					...newVacancy,
					id: firebaseValue.key,
					thumb: imageSrc,
					publish: (function () {
						const day = new Date()
						return day.getDate() + '.' + (day.getMonth() + 1) + '.' + day.getFullYear()
					})()
				})
			} catch (error) {
				commit('setError', error.message)
				commit('setLoading', false)
				throw error
			}
		},
		async fetchJobs ({ commit }) {
			commit('clearError')
			commit('setLoading', true)

			const resultJobs = []

			try {
				const firebaseValue = await firebase.database().ref('jobs').once('value')
				const jobs = firebaseValue.val()

				Object.keys(jobs).forEach(key => {
					let vacancy = jobs[key]
					resultJobs.push(
						new Vacancy(
							vacancy.ownerId,
							vacancy.id,
							vacancy.title,
							vacancy.publish,
							vacancy.thumb,
							vacancy.content,
							vacancy.city,
							vacancy.types,
							vacancy.organization,
							vacancy.shedule,
							vacancy.contacts,
							vacancy.adress,
							vacancy.phone,
							vacancy.experience,
							vacancy.salary
							)
						)
				})
				commit('loadJobs', resultJobs)
				commit('setLoading', false)
			} catch (error) {
				commit('setError', error.message)
				commit('setLoading', false)
				throw error
			}
		}
	},
	getters: {
		jobs (state) {
			return state.jobs
		},
		jobById (state) {
			return jobId => {
				return state.jobs.find(job => job.id === jobId)
			}
		}
	}
}
