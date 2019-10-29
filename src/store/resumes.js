import * as firebase from 'firebase'

class Resume {
	constructor (
		resumeOwnerId = null,
		resumeId = null,
		resumeTitle = null,
		resumeTheme = null,
		resumeShedule = null,
		resumeExperience = null,
		resumeSalary = null,
		resumeSurname = null,
		resumeName = null,
		resumeSex = null,
		resumeCity = null,
		resumeEducation = null,
		resumeCountry = null,
		resumeInfo = null,
		resumePhone = null,
		resumeEmail = null,
		resumeThumb = null,
		resumeFile = null,
		resumePublish = null
		) {
		this.ownerId = resumeOwnerId
		this.id = resumeId
		this.title = resumeTitle
		this.theme = resumeTheme
		this.shedule = resumeShedule
		this.experience = resumeExperience
		this.salary = resumeSalary
		this.surname = resumeSurname
		this.name = resumeName
		this.sex = resumeSex
		this.city = resumeCity
		this.education = resumeEducation
		this.country = resumeCountry
		this.info = resumeInfo
		this.phone = resumePhone
		this.email = resumeEmail
		this.thumb = resumeThumb
		this.file = resumeFile
		this.publish = resumePublish
	}
}

export default {
	state: {
		resumes: []
	},
	mutations: {
		createResume (state, payload) {
			state.resumes.push(payload)
		},
		loadResumes (state, payload) {
			state.resumes = payload
		}
	},
	actions: {
		async createResume ({ commit, getters }, payload) {
			commit('clearError')
			commit('setLoading', true)

			const file = payload.resumeFile
			const fileThumb = payload.resumeThumb

			try {
				const newResume = new Resume(
					getters.user.id,
					payload.resumeId,
					payload.resumeTitle,
					payload.resumeTheme,
					payload.resumeShedule,
					payload.resumeExperience,
					payload.resumeSalary,
					payload.resumeSurname,
					payload.resumeName,
					payload.resumeSex,
					payload.resumeCity,
					payload.resumeEducation,
					payload.resumeCountry,
					payload.resumeInfo,
					payload.resumePhone,
					payload.resumeEmail,
					'',
					'',
					payload.resumePublish
					)
				const firebaseValue = await firebase.database().ref('resumes').push(newResume)

				const docExt = file.name.slice(file.name.lastIndexOf('.'))
				// eslint-disable-next-line
				const fileData = await firebase.storage().ref(`resumes/${firebaseValue.key}-file.${docExt}`).put(file)
				const fileSrc = await firebase.storage().ref(`resumes/${firebaseValue.key}-file.${docExt}`).getDownloadURL().then(function (url) {
					return url
				})

				const thumbExt = fileThumb.name.slice(fileThumb.name.lastIndexOf('.'))
				// eslint-disable-next-line
				const fileThumbData = await firebase.storage().ref(`resumes/${firebaseValue.key}-thumb.${thumbExt}`).put(fileThumb)
				const fileThumbSrc = await firebase.storage().ref(`resumes/${firebaseValue.key}-thumb.${thumbExt}`).getDownloadURL().then(function (url) {
					return url
				})

				firebase.database().ref('resumes').child(firebaseValue.key).set({
					...newResume,
					id: firebaseValue.key,
					fileResume: fileSrc,
					thumb: fileThumbSrc,
					publish: (function () {
						const day = new Date()
						return day.getDate() + '.' + (day.getMonth() + 1) + '.' + day.getFullYear()
					})()
				})

				commit('createResume', {
					...newResume,
					id: firebaseValue.key,
					fileResume: fileSrc,
					thumb: fileThumbSrc,
					publish: (function () {
						const day = new Date()
						return day.getDate() + '.' + (day.getMonth() + 1) + '.' + day.getFullYear()
					})()
				})

				commit('setLoading', false)
			} catch (error) {
				commit('setError', error.message)
				commit('setLoading', false)
				throw error
			}
		},
		async fetchResumes ({ commit }) {
			commit('clearError')
			commit('setLoading', true)

			const resultResumes = []

			try {
				const firebaseValue = await firebase.database().ref('resumes').once('value')
				const resumes = firebaseValue.val()

				Object.keys(resumes).forEach(key => {
					let resume = resumes[key]
					resultResumes.push(
						new Resume(
							resume.ownerId,
							resume.id,
							resume.title,
							resume.theme,
							resume.shedule,
							resume.experience,
							resume.salary,
							resume.surname,
							resume.name,
							resume.sex,
							resume.city,
							resume.education,
							resume.country,
							resume.info,
							resume.phone,
							resume.email,
							resume.thumb,
							resume.fileResume,
							resume.publish
							)
						)
				})
				commit('loadResumes', resultResumes)
				commit('setLoading', false)
			} catch (error) {
				commit('setError', error.message)
				commit('setLoading', false)
				throw error
			}
		}
	},
	getters: {
		resumes (state) {
			return state.resumes
		},
		resumeById (state) {
			return resumeId => {
				return state.resumes.find(resume => resume.id === resumeId)
			}
		}
	}
}
