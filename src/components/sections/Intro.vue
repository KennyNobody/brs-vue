<template>
	<section class="intro">
		<div class="intro__wrapper intro__wrapper--front">
			<div class="intro__navline intro__navline--front">
				<div class="container intro__nav-container">
					<div class="intro__burger">
						<svg viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="16" height="2"/>
							<rect y="5" width="16" height="2"/>
							<rect y="10" width="16" height="2"/>
						</svg>
					</div>
					<div class="intro__links">
						<router-link class="intro__link" to="/jobs/">
							Вакансии
						</router-link>
						<router-link class="intro__link" to="/resumes/">
							Резюме
						</router-link>
						<router-link class="intro__link" to="/news/">
							Полезное
						</router-link>
					</div>
					<appSocialLinks></appSocialLinks>
				</div>
			</div>
			<div v-if="$route.name === 'home'" class="intro__content">
				<div class="container intro__content-container">
					<div class="intro__column">
						<h1 class="intro__h1">
							Найди <span class="intro__h1--accent">первую работу</span><br> с помощью БФУ
						</h1>
						<p class="intro__text">
							Самара — один из семи городов России, где построено метро. Самарский метрополитен состоит из десяти станций. Им пользуются только те, кто живет или работает возле станций. Специально доезжать до метро нет смысла: попасть в нужное место быстрее на наземном транспорте.
						</p>
						<a href="#" class="intro__btn">
							Подробнее
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import appSocialLinks from '@/components/blocks/Social-links.vue'

	export default {
		name: 'appIntro',
		props: {},
		components: {
			appSocialLinks
		}
	}
</script>

<style lang="scss">
	.intro {
		&__wrapper {
			position: relative;
			border-top: 1px solid #80929D;
			background-color: $dark;
			max-width: 1366px;
			margin-left: auto;
			margin-right: auto;
			&--front {
				background-image: url(/img/header__intro.jpg);
				background-repeat: no-repeat;
				background-size: cover;
				&:after {
					position: absolute;
					content: "";
					background: rgba(37, 44, 47, 0.6);
					top: 0px;
					bottom: 0px;
					left: 0px;
					right: 0px;
				}
			}
		}
		&__nav-container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			z-index: 2;
		}
		&__navline {
			padding-top: 8px;
			padding-bottom: 8px;
			display: flex;
			justify-content: space-between;
			&--front {
				background: rgba(37, 44, 47, 0.8);
			}
		}
		&__burger {
			cursor: pointer;
			&:hover {
				svg {
					fill: $accent;
				}
			}
			svg {
				fill: $light;
				width: 16px;
				height: 12px;
			}
		}
		&__links {
			display: flex;
			flex-grow: 1;
			align-items: center;
		}
		&__link {
			display: block;
			margin-left: 55px;
			text-decoration: none;
			color: $light;
			font-size: 14px;
			line-height: 16px;
			&:hover {
				color: $accent;
			}
		}
		&__content {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			z-index: 2;
			position: relative;
			min-height: 530px;
			padding-bottom: 43px;
			padding-top: 80px;
			color: $light;
		}
		&__column {
			width: 50%;
		}
		&__h1 {
			font-family: $ptserif;
			font-weight: bold;
			font-size: 44px;
			line-height: 49px;
			margin-bottom: 16px;
			&--accent {
				color: $yellow;
			}
		}
		&__text {
			font-family: $ptserif;
			font-size: 16px;
			line-height: 25px;
			margin-bottom: 30px;
		}
		&__btn {
			font-size: 16px;
			line-height: 19px;
			width: 140px;
			height: 40px;
			border: 1px solid $light;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			color: $light;
			text-decoration: none;
			&:hover {
				background-color: $accent;
				color: $light;
				border-color: $accent;
			}
		}
	}
</style>
