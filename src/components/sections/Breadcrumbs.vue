<template>
	<section class="breadcrumbs">
		<div class="container breadcrumbs__container">
			<nav class="breadcrumbs__nav">
				<template v-for="(breadcrumb, index) in breadcrumbList" >
					<template>
						<div class="breadcrumbs__link" :key="index" @click="routeTo(index)" :class="{'linked': !!breadcrumb.link}">
							{{ breadcrumb.name }}
						</div>
						<div class="breadcrumbs__decor" :key="index + 'i'" v-if="!!breadcrumb.link">
							<svg viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 1L5 5L1 9"/>
							</svg>
						</div>
					</template>
				</template>
			</nav>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'appBreadcrumbs',
		props: {},
		components: {},
		data () {
			return {
				breadcrumbList: []
			}
		},
		mounted () {
			this.updateList()
		},
		methods: {
			routeTo (pRouteTo) {
				if (this.breadcrumbList[pRouteTo].link) {
					this.$router.push(this.breadcrumbList[pRouteTo].link)
				}
			},
			updateList () {
				this.breadcrumbList = this.$route.meta.breadcrumb
			}
		},
		watch: {
			'$route' () {
				this.updateList()
			}
		}
	}
</script>

<style lang="scss">
	.breadcrumbs {
		padding-top: 36px;
		&__nav {
			border-bottom: 1px solid #D6E0E6;
			width: fit-content;
			display: flex;
			align-items: center;
		}
		&__link {
			display: block;
			color: #80929D;
			text-decoration: none;
			padding-bottom: 13px;
			position: relative;
			&--now {
				color: $accent;
				&:after {
					position: absolute;
					top: 100%;
					left: 0px;
					right: 0px;
					height: 1px;
					background-color: $accent;
					content: "";
				}
			}
		}
		&__decor {
			height: 26px;
			width: 10px;
			display: flex;
			align-items: center;
			justify-content: center;
			padding-bottom: 13px;
			margin-left: 10px;
			margin-right: 10px;
			svg {
				display: block;
				stroke: #D6E0E6;
				stroke-width: 2px;
				height: 12px;
				width: 8px;
				fill: none;
			}
		}
	}
</style>
