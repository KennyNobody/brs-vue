<template>
	<div class="page page--home">
		<appFrontJobs></appFrontJobs>
		<appFrontResumes></appFrontResumes>
		<appFrontNews></appFrontNews>
	</div>
</template>

<script>
// @ is an alias to /src
import appFrontJobs from '@/components/sections/Front-jobs.vue'
import appFrontNews from '@/components/sections/Front-news.vue'
import appFrontResumes from '@/components/sections/Front-resumes.vue'

export default {
	name: 'home',
	components: {
		appFrontJobs,
		appFrontNews,
		appFrontResumes
	}
}
</script>

<style lang="scss"></style>
