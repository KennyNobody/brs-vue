<template>
	<section class="front-jobs">
		<div class="container front-jobs__container">
			<h2 class="front-jobs__h2 h2" v-on:click="showInfo">
				Новые <router-link class="h2--link" to="/jobs/">вакансии</router-link>
			</h2>
			<div class="front-jobs__articles">
				<appFrontJob
				v-for="job in jobs"
				:key="job.id"
				:title="job.title"
				:publish="job.publish"
				:id="job.id"
				:thumb="job.thumb"
				:city='job.city'
				:salary="job.salary"
				:organization='job.organization'
				:shedule='job.shedule'></appFrontJob>
				<div class="front-job--clear"></div>
				<div class="front-job--clear"></div>
			</div>
		</div>
	</section>
</template>

<script>
	import appFrontJob from '@/components/blocks/Front-job.vue'
	export default {
		name: 'appFrontjobs',
		components: {
			appFrontJob
		},
		computed: {
			jobs () {
				return this.$store.getters.jobs
			}
		},
		methods: {
			showInfo () {
				console.log(this.jobs)
			}
		},
		props: {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.front-jobs {
		padding-top: 70px;
		padding-bottom: 70px;
		&__articles {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
		}
	}
</style>
