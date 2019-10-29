<template>
	<section class="catalog">
		<div class="container catalog__container">
			<h2 class="catalog__title h2">
				Все
				<span class="h2--accent">{{ typeCatalog }}</span>
			</h2>
			<div class="catalog__content">
				<div class="catalog__items">
					<template v-if="$route.name === 'jobs'">
						<appFrontJob
						v-for="job in jobs"
						:key="job.id"
						:title="job.title"
						:publish="job.publish"
						:id="job.id"
						:thumb="job.thumb"
						:city='job.city'
						:price="job.price"
						:organization='job.organization'
						:salary='job.salary'
						></appFrontJob>
						<div class="front-job--clear"></div>
					</template>
					<template v-if="$route.name === 'resumes'">
						<appFrontResume
						v-for='resume in resumes'
						:key='resume.id'
						:name='resume.name'
						:surname='resume.surname'
						:publish='resume.publish'
						:thumb='resume.thumb'
						:id='resume.id'
						:city='resume.city'
						:shedule='resume.shedule'
						:info='resume.info'
						></appFrontResume>
						<div class="front-resume--clear"></div>
					</template>
				</div>
				<div class="catalog__side">
					<appSidebar></appSidebar>
				</div>
			</div>
			<div class="catalog__control">
				<appPagination></appPagination>
				<appToTop></appToTop>
			</div>
		</div>
	</section>
</template>

<script>
	import appFrontJob from '@/components/blocks/Front-job.vue'
	import appPagination from '@/components/blocks/Pagination.vue'
	import appFrontResume from '@/components/blocks/Front-resume.vue'
	import appSidebar from '@/components/sections/Sidebar.vue'
	import appToTop from '@/components/blocks/To-top.vue'
	export default {
		name: 'appCatalog',
		props: ['typeCatalog'],
		computed: {
			jobs () {
				return this.$store.getters.jobs
			},
			resumes () {
				return this.$store.getters.resumes
			}
		},
		components: {
			appFrontJob,
			appFrontResume,
			appSidebar,
			appPagination,
			appToTop
		}
	}
</script>

<style lang="scss">
	.catalog {
		padding-top: 35px;
		&__title {
			margin-bottom: 36px;
		}
		&__content {
			display: flex;
			justify-content: space-between;
			margin-bottom: 55px;
		}
		&__items {
			width: calc(9/12 * 100% - 10px);
			flex-shrink: 0;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		&__side {
			width: calc(3/12 * 100% - 10px);
			flex-shrink: 0;
		}
		&__control {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: calc(9/12 * 100% - 10px);
			margin-bottom: 100px;
		}
	}
</style>
