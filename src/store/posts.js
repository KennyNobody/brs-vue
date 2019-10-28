import * as firebase from 'firebase'
import * as request from '../requests'
import axios from 'axios'

const baseUrl = 'http://www.omdbapi.com/?s=indiana&apikey=b76b385c&page=1&type=movie&Content-Type=application/json'

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

			axios.get(request.baseUrl, {})
			.then((response) => {
				const posts = response.data
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
			.catch(function (error) {
				commit('setError', error.message)
				commit('setLoading', false)
				console.log(error)
			});
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
