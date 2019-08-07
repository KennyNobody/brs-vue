<template>
	<div class="page page--news">
		<appBreadcrumbs></appBreadcrumbs>
		<section class="news">
			<div class="container">
				<h2 class="news__title h2">
					Наши <span class="h2--accent">новости</span>
				</h2>
				<div class="news__nav">
					<a href="" class="news__link news__link--active">
						Все
					</a>
					<a href="" class="news__link">
						Наука
					</a>
					<a href="" class="news__link">
						Искусство
					</a>
					<a href="" class="news__link">
						Финансы
					</a>
				</div>
				<div class="news__articles">
					<appFrontArticle v-for="post in posts" :key="post.id" :id="post.id" :title="post.title" :publish="post.publish" :link="post.link" :thumb="post.thumb"></appFrontArticle>
				</div>
				<div class="news__control">
					<appPagination></appPagination>
					<appToTop></appToTop>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import appBreadcrumbs from '@/components/sections/Breadcrumbs.vue'
	import appPagination from '@/components/blocks/Pagination.vue'
	import appToTop from '@/components/blocks/To-top.vue'
	import appFrontArticle from '@/components/blocks/Front-article.vue'
	export default {
		name: 'news',
		computed: {
            posts () {
                return this.$store.getters.posts
            }
        },
		props: {},
		components: {
			appBreadcrumbs,
			appPagination,
			appToTop,
			appFrontArticle
		}
	}
</script>

<style lang="scss">
	.news {
		padding-top: 35px;
		margin-bottom: 62px;
		&__nav {
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 42px;
		}
		&__link {
			height: 44px;
			border: 1px solid $light;
			border-radius: 4px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 6px;
			margin-bottom: 6px;
			padding-left: 24px;
			padding-right: 24px;
			text-decoration: none;
			color: $dark;
			&--active {
				color: $accent;
				border-color: $accent;
				pointer-events: none;
			}
			&:hover {
				color: $accent;
			}
		}
		&__articles {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			margin-bottom: 40px;
		}
		&__control {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 100px;
		}
	}
</style>
