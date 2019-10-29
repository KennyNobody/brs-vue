<template>
	<div class="page page--post">
		<appBreadcrumbs></appBreadcrumbs>
		<section class="s-post">
			<div class="container s-post__container">
				<h2 class="h2 s-post__title">
					{{ post.title }}
				</h2>
				<p class="s-post__publish">
					Опубликовано: <time>{{ post.publish }}</time>
				</p>
				<div class="s-post__content" v-html="post.content"></div>
				<div class="s-post__other">
					<h3 class="s-post__other-title">
						Другие новости
					</h3>
					<div class="s-post__other-articles">
						<appFrontArticle
						v-for="post in posts"
						:key="post.id"
						:title="post.title"
						:publish="post.publish"
						:link="post.link"
						:thumb="post.thumb"
						:id="post.id"
						></appFrontArticle>
					</div>
				</div>
				<appToTopBlock></appToTopBlock>
			</div>
		</section>
	</div>
</template>

<script>
	import appBreadcrumbs from '@/components/sections/Breadcrumbs.vue'
	import appFrontArticle from '@/components/blocks/Front-article.vue'
	import appToTopBlock from '@/components/blocks/To-top-block.vue'
	export default {
		name: 'single-post',
		props: ['id'],
		computed: {
			post () {
				let id = this.id
				return this.$store.getters.postById(id)
			},
			posts () {
				return this.$store.getters.posts
			}
		},
		components: {
			appBreadcrumbs,
			appFrontArticle,
			appToTopBlock
		},
		mounted () {
			console.log(this.$store.getters)
		}
	}
</script>

<style lang="scss">
	.s-post {
		padding-top: 35px;
		&__title {
			margin-bottom: 35px;
			width: calc(100% / 12 * 9 - 20px);
		}
		&__publish {
			font-size: 14px;
			line-height: 16px;
			margin-bottom: 17px;
			color: #80929D;
			width: calc(100% / 12 * 9 - 20px);
		}
		&__content {
			font-size: 16px;
			line-height: 26px;
			padding-bottom: 50px;
			p {
				width: calc(100% / 12 * 9 - 20px);
			}
			h1 {
				font-size: 26px;
				line-height: 30px;
				font-weight: bold;
				width: calc(100% / 12 * 9 - 20px);
			}
			h2 {
				font-weight: bold;
				font-size: 22px;
				line-height: 28px;
				width: calc(100% / 12 * 9 - 20px);
			}
			h3 {
				font-weight: bold;
				font-size: 18px;
				line-height: 22px;
				width: calc(100% / 12 * 9 - 20px);
			}
			ul {
				list-style-type: disc;
				padding-left: 20px;
				list-style-position: outside;
				width: calc(100% / 12 * 9 - 20px);
			}
			ol {
				list-style-type: decimal;
				padding-left: 20px;
				list-style-position: outside;
				width: calc(100% / 12 * 9 - 20px);
			}
			li {}
			em {
				font-style: italic;
			}
			strong {
				font-weight: bold;
			}
			img {
				width: 100%;
				margin-bottom: 50px;
				display: block;
			}
			a {
				color: #0AA5DC;
				cursor: pointer;
				&:hover {
					text-decoration: none;
				}
			}
			blockquote {
				font-style: italic;
				background-color: #ececec;
				padding-left: 25px;
				padding-right: 25px;
				padding-top: 20px;
				padding-bottom: 20px;
				p {
					width: 100%;
				}
			}
		}
		&__other {
			padding-top: 48px;
			border-top: 1px solid #D6E0E6;
		}
		&__other-title {
			font-weight: 500;
			font-size: 20px;
			line-height: 23px;
			margin-bottom: 20px;
		}
		&__other-articles {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
	}
</style>
