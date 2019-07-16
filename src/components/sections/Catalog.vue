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
						<appFrontJob v-for="article in articlesCount" v-bind:key="article.id"></appFrontJob>
					</template>
					<template v-if="$route.name === 'resumes'">
						<appFrontResume v-for="article in articlesCount" v-bind:key="article.id"></appFrontResume>
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
		data () {
			return {
				articlesCount: 12
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
