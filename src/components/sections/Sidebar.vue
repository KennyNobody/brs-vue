<template>
	<div class="sidebar">
		<div class="sidebar__section">
			<div class="sidebar__title">
				<p>Направления</p>
			</div>
			<a href="#" class="sidebar__link">
				<span class="sidebar__text">Наука</span>&nbsp;<span class="sidebar__counter">3</span>
			</a>
			<a href="#" class="sidebar__link">
				<span class="sidebar__text">Маркетинг</span>&nbsp;<span class="sidebar__counter">8</span>
			</a>
			<a href="#" class="sidebar__link">
				<span class="sidebar__text">Медицина</span>&nbsp;<span class="sidebar__counter">12</span>
			</a>
			<a href="#" class="sidebar__link">
				<span class="sidebar__text">Самая длинная ссылка из всех возможных, которая может быть</span>&nbsp;<span class="sidebar__counter">3</span>
			</a>
		</div>
		<div class="sidebar__section">
			<div class="sidebar__title">
				<p>Тип занятости</p>
			</div>
			<a href="#" class="sidebar__link">
				<span class="sidebar__text">Полная</span>
			</a>
			<a href="#" class="sidebar__link">
				<span class="sidebar__text">Частичная</span>
			</a>
			<a href="#" class="sidebar__link">
				<span class="sidebar__text">Стажировка</span>
			</a>
		</div>
		<div class="sidebar__section">
			<div class="sidebar__title">
				<p>Город</p>
			</div>
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
			margin-bottom: 42px;
		}
		&__title {
			margin-bottom: 16px;
			p {
				font-weight: 500;
				font-size: 20px;
			}
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
		}
		&__text {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		&__counter {
			font-weight: 500;
		}
	}
</style>
