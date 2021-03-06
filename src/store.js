import Vue from 'vue'
import Vuex from 'vuex'
import user from './store/user.js'
import posts from './store/posts.js'
import authGuard from './store/authGuard'
import jobs from './store/jobs.js'
import resumes from './store/resumes.js'
import content from './store/content.js'
import common from './store/common.js'

Vue.use(Vuex)

// const baseUrl = 'http://www.omdbapi.com/?s=indiana&apikey=b76b385c&page=1&type=movie&Content-Type=application/json'

export default new Vuex.Store({
	modules: {
		user, common, posts, jobs, resumes, content
	},
	state: {

	},
	mutations: {

	},
	actions: {

	}
})

// console.log(baseUrl)
