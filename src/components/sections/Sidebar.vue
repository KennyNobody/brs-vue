<template>
	<div class="sidebar">
		<div class="sidebar__section sidebar__section--open">
			<div class="sidebar__title">
				<p>Направления</p>
				<svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4 6L7.4641 0H0.535898L4 6Z" fill="#252C2F"/>
				</svg>
			</div>
			<div class="sidebar__links">
				<a href="#" class="sidebar__link">
					<span class="sidebar__text">Наука</span>&nbsp;<span class="sidebar__counter">3</span>
				</a>
				<a href="#" class="sidebar__link">
					<span class="sidebar__text sidebar__text--active">Маркетинг</span>&nbsp;<span class="sidebar__counter">8</span>
				</a>
				<a href="#" class="sidebar__link">
					<span class="sidebar__text">Медицина</span>&nbsp;<span class="sidebar__counter">12</span>
				</a>
				<a href="#" class="sidebar__link">
					<span class="sidebar__text">Самая длинная ссылка из всех возможных, которая может быть</span>&nbsp;<span class="sidebar__counter">3</span>
				</a>
			</div>
		</div>
		<div class="sidebar__section">
			<div class="sidebar__title">
				<p>Тип занятости</p>
				<svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4 6L7.4641 0H0.535898L4 6Z" fill="#252C2F"/>
				</svg>
			</div>
			<div class="sidebar__links">
				<a href="#" class="sidebar__link">
					<span class="sidebar__text">Полная</span>
				</a>
				<a href="#" class="sidebar__link">
					<span class="sidebar__text sidebar__text--active">Частичная</span>
				</a>
				<a href="#" class="sidebar__link">
					<span class="sidebar__text">Стажировка</span>
				</a>
			</div>
		</div>
		<div class="sidebar__section">
			<div class="sidebar__title">
				<p>Город</p>
				<svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4 6L7.4641 0H0.535898L4 6Z" fill="#252C2F"/>
				</svg>
			</div>
			<div class="sidebar__links">
				<a href="#" class="sidebar__link">
					<span class="sidebar__text">Багратионовск</span>
				</a>
				<a href="#" class="sidebar__link">
					<span class="sidebar__text">Балтийск</span>
				</a>
				<a href="#" class="sidebar__link">
					<span class="sidebar__text">Гурьевск</span>
				</a>
				<a href="#" class="sidebar__link">
					<span class="sidebar__text">Гусев</span>
				</a>
				<a href="#" class="sidebar__link">
					<span class="sidebar__text">Нестеров</span>
				</a>
				<a href="#" class="sidebar__link">
					<span class="sidebar__text">Полесск</span>
				</a>
				<a href="#" class="sidebar__link">
					<span class="sidebar__text">Светлый</span>
				</a>
				<a href="#" class="sidebar__link">
					<span class="sidebar__text">Черняховск</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'appSidebar',
		props: {},
		components: {}
	}
</script>

<style lang="scss">
	.sidebar {
		&__section {
			&--open {
				.sidebar__title {
					svg {
						transform: rotate(-90deg);
					}
				}
				.sidebar__links {
					max-height: 0px;
				}
			}
		}
		&__title {
			margin-bottom: 16px;
			display: flex;
			align-items: center;
			cursor: pointer;
			p {
				font-weight: 500;
				font-size: 20px;
				margin-right: 8px;
			}
			svg {
				display: block;
				transition: 0.3s all;
			}
		}
		&__links {
			max-height: 5000px;
			height: auto;
			overflow: hidden;
			transition: 0.3s all;
		}
		&__link {
			display: flex;
			font-size: 16px;
			line-height: 30px;
			color: #80929D;
			text-decoration: none;
			&:hover {
				color: $accent;
			}
			&:last-child {
				margin-bottom: 40px;
			}
		}
		&__text {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			&--active {
				color: $dark;
			}
		}
		&__counter {
			font-weight: 500;
		}
	}
</style>
