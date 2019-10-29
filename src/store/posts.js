import * as firebase from 'firebase'
import requests from '../requests'
import axios from 'axios'

class Post {
	constructor (content, id = null, ownerId, publish, thumb = '', title) {
		this.id = id
		this.title = title
		this.ownerId = ownerId
		this.publish = publish
		this.thumb = thumb
		this.content = content
	}
}

export default {
	state: {
		posts: []
	},
	mutations: {
		createPost (state, payload) {
			state.posts.push(payload)
		},
		loadPosts (state, payload) {
			state.posts = payload
		}
	},
	actions: {
		async createPost ({ commit, getters }, payload) {
			commit('clearError')
			commit('setLoading', true)
			try {
				const newPost = new Post(
					payload.content,
					payload.id,
					getters.user.id,
					payload.publish,
					payload.thumb,
					payload.title
					)

				const firebaseValue = await firebase.database().ref('posts').push(newPost)
				commit('setLoading', false)
				commit('createPost', {
					...newPost,
					id: firebaseValue.key
				})
			} catch (error) {
				commit('setError', error.message)
				commit('setLoading', false)
				throw error
			}
		},
		async fetchPosts ({ commit }) {
			commit('clearError')
			commit('setLoading', true)

			const resultPosts = []

			// console.log(request.baseUrl)

			axios.get(requests.baseUrl)
			.then(response => {
				console.log(response.data.news)

				const posts = response.data.news

				Object.keys(posts).forEach(key => {
					let post = posts[key]
					resultPosts.push(
						new Post(
							post.content,
							post.id,
							post.ownerId,
							post.publish,
							post.thumb,
							post.title
							)
						)
				})
				commit('loadPosts', resultPosts)
				commit('setLoading', false)
			})
			.catch(e => {
				commit('setLoading', false)
				console.log('Упс, что-то пошло не так...')
			})

			// try {
			// 	const firebaseValue = await firebase.database().ref('posts').once('value')
			// 	const posts = firebaseValue.val()

			// 	Object.keys(posts).forEach(key => {
			// 		let post = posts[key]
			// 		resultPosts.push(
			// 			new Post(
			// 				post.content,
			// 				post.id,
			// 				post.ownerId,
			// 				post.publish,
			// 				post.thumb,
			// 				post.title
			// 				)
			// 			)
			// 	})
			// 	commit('loadPosts', resultPosts)
			// 	commit('setLoading', false)
			// } catch (error) {
			// 	commit('setError', error.message)
			// 	commit('setLoading', false)
			// 	throw error
			// }
		}
	},
	getters: {
		posts (state) {
			return state.posts
		},
		postById (state) {
			return postId => {
				return state.posts.find(post => post.id === postId)
			}
		}
	}
}
