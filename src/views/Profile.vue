<template>
	<div class="page page--lk">
		<appBreadcrumbs></appBreadcrumbs>
		<section class="lk">
			<div class="container lk__container">
				<h2 class="h2">
					Личный кабинет
				</h2>
				<router-link class="lk__submit" to="/edit-profile">
					<svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21.0608 0.741443L21.0343 0.717291C20.5279 0.254757 19.8715 0 19.186 0C18.4175 0 17.6797 0.325319 17.1616 0.892468L7.36538 11.6173C7.27608 11.7151 7.20836 11.8304 7.16649 11.956L6.0146 15.4092C5.88142 15.8084 5.94826 16.2499 6.19337 16.5902C6.44043 16.9331 6.83846 17.1379 7.25818 17.1379H7.25824C7.43978 17.1379 7.61723 17.1005 7.78554 17.0269L11.1207 15.5678C11.242 15.5148 11.3507 15.4369 11.44 15.3392L21.2363 4.61437C22.2557 3.49843 22.177 1.76116 21.0608 0.741443ZM8.22159 14.7713L8.89751 12.745L8.95452 12.6825L10.2356 13.8526L10.1786 13.9151L8.22159 14.7713ZM19.8395 3.33851L11.5115 12.456L10.2304 11.2858L18.5584 2.16833C18.7213 1.99 18.9442 1.89176 19.1861 1.89176C19.3983 1.89176 19.6015 1.97071 19.7588 2.11435L19.7852 2.13851C20.131 2.45437 20.1554 2.9927 19.8395 3.33851Z" fill="white"/>
						<path d="M19.1605 8.72657C18.6381 8.72657 18.2146 9.15007 18.2146 9.67245V17.7028C18.2146 19.0291 17.1355 20.1083 15.8091 20.1083H4.3451C3.01867 20.1083 1.93961 19.0291 1.93961 17.7028V6.33192C1.93961 5.00555 3.01873 3.92643 4.3451 3.92643H12.6428C13.1652 3.92643 13.5887 3.50292 13.5887 2.98055C13.5887 2.45817 13.1652 2.03467 12.6428 2.03467H4.3451C1.97555 2.03467 0.0478516 3.96243 0.0478516 6.33192V17.7027C0.0478516 20.0722 1.97561 22 4.3451 22H15.809C18.1785 22 20.1063 20.0722 20.1063 17.7027V9.67245C20.1063 9.15007 19.6828 8.72657 19.1605 8.72657Z"/>
					</svg>
					Редактировать
				</router-link>
				<div class="lk__content">
					<div class="lk__columns">
						<div class="lk__column lk__column--1">
							<div class="lk__thumb">
								<img src="http://placehold.it/1000x600" alt="Аватар пользователя">
							</div>
						</div>
						<div class="lk__column lk__column--2">
							<p class="lk__column-title">
								Общая информация
							</p>
							<div class="lk__line" v-if="name">
								<strong>Имя</strong> {{ name }}
							</div>
							<div class="lk__line" v-if="surname">
								<strong>Фамилия</strong> {{ surname }}
							</div>
							<div class="lk__line" v-if="sex">
								<strong>Пол</strong> {{ sex }}
							</div>
							<div class="lk__line" v-if="birthDay">
								<strong>Дата рождения</strong> {{ birthDay }}
							</div>
							<div class="lk__line" v-if="country">
								<strong>Гражданство</strong> {{ country }}
							</div>
						</div>
						<div class="lk__column lk__column--3">
							<p class="lk__column-title">
								Контакты
							</p>
							<div class="lk__line" v-if="phone">
								<strong>Телефон</strong> {{ phone }}
							</div>
							<div class="lk__line" v-if="email">
								<strong>Email</strong> {{ email }}
							</div>
						</div>
					</div>
					<p class="lk__line">
						<strong>Опыт</strong> нет
					</p>
					<p class="lk__line">
						<strong>Образование</strong> {{ education }}
					</p>
					<p class="lk__line">
						<strong>Языки</strong> английский (средний уровень), немецкий (базовый уровень)
					</p>
					<p class="lk__line">
						<strong>О себе</strong> {{ info }}
					</p>
					<br>
					<appDoc></appDoc>
				</div>
				<div class="p-list">
					<p class="p-list__h">
						Мои объявлениия
					</p>
					<article class="p-list__article">
						<div class="p-list__date">
							<p class="p-list__number">
								20
							</p>
							<p class="p-list__mounth">
								июня
							</p>
						</div>
						<div class="p-list__content">
							<p class="p-list__title">
								Пиццамейкер
							</p>
							<div class="p-list__change">
								<span>
									Изменить
								</span>
							</div>
							<div class="p-list__remove">
								<span>
									Удалить
								</span>
							</div>
						</div>
					</article>
					<article class="p-list__article">
						<div class="p-list__date">
							<p class="p-list__number">
								20
							</p>
							<p class="p-list__mounth">
								июня
							</p>
						</div>
						<div class="p-list__content">
							<p class="p-list__title">
								Пиццамейкер
							</p>
							<div class="p-list__change">
								<span>
									Изменить
								</span>
							</div>
							<div class="p-list__remove">
								<span>
									Удалить
								</span>
							</div>
						</div>
					</article>
					<article class="p-list__article">
						<div class="p-list__date">
							<p class="p-list__number">
								20
							</p>
							<p class="p-list__mounth">
								июня
							</p>
						</div>
						<div class="p-list__content">
							<p class="p-list__title">
								Пиццамейкер
							</p>
							<div class="p-list__change">
								<span>
									Изменить
								</span>
							</div>
							<div class="p-list__remove">
								<span>
									Удалить
								</span>
							</div>
						</div>
					</article>
					<article class="p-list__article">
						<div class="p-list__date">
							<p class="p-list__number">
								20
							</p>
							<p class="p-list__mounth">
								июня
							</p>
						</div>
						<div class="p-list__content">
							<p class="p-list__title">
								Пиццамейкер
							</p>
							<div class="p-list__change">
								<span>
									Изменить
								</span>
							</div>
							<div class="p-list__remove">
								<span>
									Удалить
								</span>
							</div>
						</div>
					</article>
					<article class="p-list__article">
						<div class="p-list__date">
							<p class="p-list__number">
								20
							</p>
							<p class="p-list__mounth">
								июня
							</p>
						</div>
						<div class="p-list__content">
							<p class="p-list__title">
								Пиццамейкер
							</p>
							<div class="p-list__change">
								<span>
									Изменить
								</span>
							</div>
							<div class="p-list__remove">
								<span>
									Удалить
								</span>
							</div>
						</div>
					</article>
					<article class="p-list__article">
						<div class="p-list__date">
							<p class="p-list__number">
								20
							</p>
							<p class="p-list__mounth">
								июня
							</p>
						</div>
						<div class="p-list__content">
							<p class="p-list__title">
								Пиццамейкер
							</p>
							<div class="p-list__change">
								<span>
									Изменить
								</span>
							</div>
							<div class="p-list__remove">
								<span>
									Удалить
								</span>
							</div>
						</div>
					</article>
				</div>
				<appToTopBlock></appToTopBlock>
			</div>
		</section>
	</div>
</template>

<script>
	import appBreadcrumbs from '@/components/sections/Breadcrumbs.vue'
	import appToTopBlock from '@/components/blocks/To-top-block.vue'
	import appDoc from '@/components/blocks/Doc.vue'

	export default {
		name: 'registration',
		components: {
			appBreadcrumbs,
			appToTopBlock,
			appDoc
		},
		computed: {
			name () {
				return this.$store.getters.localUser.name
			},
			surname () {
				return this.$store.getters.localUser.surname
			},
			sex () {
				return this.$store.getters.localUser.sex
			},
			birthDay () {
				if ((this.$store.getters.localUser.birthDay && this.$store.getters.localUser.birthMounth && this.$store.getters.localUser.birthYear) === 'Не указано') {
					return 'Не указано'
				} else {
					return (this.$store.getters.localUser.birthDay + '.' + this.$store.getters.localUser.birthMounth + '.' + this.$store.getters.localUser.birthYear)
				}
			},
			country () {
				return this.$store.getters.localUser.country
			},
			phone () {
				return this.$store.getters.localUser.phone
			},
			email () {
				return this.$store.getters.localUser.email
			},
			info () {
				return this.$store.getters.localUser.info
			},
			education () {
				return this.$store.getters.localUser.education
			}
		}
	}
</script>

<style lang="scss">
	.lk {
		padding-top: 35px;
		&__content {
			margin-bottom: 54px;
		}
		&__submit {
			display: flex;
			align-items: center;
			border-radius: 4px;
			background-color: $accent;
			color: $light;
			font-weight: bold;
			justify-content: space-around;
			max-width: 100%;
			width: 246px;
			border: none;
			cursor: pointer;
			height: 40px;
			transition: 0.3s all;
			outline: none;
			text-decoration: none;
			font-weight: bold;
			font-size: 16px;
			line-height: 19px;
			padding-left: 35px;
			padding-right: 35px;
			margin-bottom: 40px;
			&:hover {
				opacity: 0.8;
			}
			&--disabled {
				pointer-events: none;
				background-color: #D6E0E6;
			}
			svg {
				height: 22px;
				width: 22px;
				fill: $light;
			}
		}
		&__columns {
			display: flex;
			justify-content: space-between;
			margin-bottom: 26px;
		}
		&__column {
			&--1 {
				width: calc(100% / 12 * 3);
				padding-right: 20px;
			}
			&--2 {
				width: calc(100% / 12 * 4);
				padding-right: 20px;
			}
			&--3 {
				width: calc(100% / 12 * 5);
			}
		}
		&__thumb {
			width: 245px;
			height: 245px;
			overflow: hidden;
			img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		&__column-title {
			font-weight: bold;
			font-size: 24px;
			line-height: 28px;
			color: #80929D;
			margin-bottom: 20px;
		}
		&__line {
			font-size: 16px;
			line-height: 19px;
			margin-bottom: 9px;
			strong {
				color: #80929D;
			}
		}
	}
	.p-list {
		&__h {
			font-weight: bold;
			font-size: 24px;
			line-height: 28px;
			color: #80929D;
			margin-bottom: 20px;
		}
		&__article {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 10px;
			&:hover {
				.p-list__content {
					box-shadow: 1px 1px 14px #D6E0E6;
				}
			}
		}
		&__date {
			flex-shrink: 0;
			width: calc(100% / 12 - 10px);
		}
		&__number {
			font-weight: bold;
			font-size: 26px;
			line-height: 30px;
			color: #80929D;
		}
		&__mounth {
			font-size: 16px;
			line-height: 19px;
			color: #80929D;
		}
		&__content {
			display: flex;
			transition: 0.3s all;
			border-radius: 4px;
			flex-grow: 1;
			border: 1px solid #D6E0E6;
			height: 60px;
			align-items: center;
		}
		&__title {
			font-size: 20px;
			line-height: 23px;
			padding-left: 22px;
			padding-right: 22px;
			flex-grow: 1;
			min-width: 0px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			display: flex;
			align-items: center;
			height: 100%;
			cursor: pointer;
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}
		&__change {
			border-left: 1px solid #D6E0E6;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding-left: 33px;
			padding-right: 33px;
			cursor: pointer;
			transition: 0.3s all;
			flex-shrink: 0;
			span {
				font-size: 16px;
				line-height: 19px;
			}
			&:hover {
				background-color: $yellow;
				border-color: $yellow;
			}
		}
		&__remove {
			border-left: 1px solid #D6E0E6;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding-left: 33px;
			padding-right: 33px;
			cursor: pointer;
			transition: 0.3s all;
			flex-shrink: 0;
			span {
				font-size: 16px;
				line-height: 19px;
			}
			&:hover {
				background-color: $yellow;
				border-color: $yellow;
			}
		}
	}
</style>
