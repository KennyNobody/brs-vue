<template>
	<div class="page page--registration">
		<appBreadcrumbs></appBreadcrumbs>
		<section class="registration">
			<div class="container">
				<form class="form">
					<h2 class="h2">
						Редактировать профиль
					</h2>
					<div class="form__columns">
						<div class="form__column form__column--left">
							<div class="form__section">
								<p class="form__title">
									Данные аккаунта
								</p>
								<appTextInput v-on:inputChanged="email = $event" name='Email' v-bind:placeholder="email"></appTextInput>
								<appTextInput v-on:inputChanged="password = $event" name='Пароль'></appTextInput>
								<appTextInput v-on:inputChanged="passwordAgain = $event" name='Повторите пароль'></appTextInput>
							</div>
							<div class="form__section">
								<p class="form__title">
									Контактная информация
								</p>
								<appTextInput v-on:inputChanged="name = $event" name='Имя' v-bind:placeholder="name"></appTextInput>
								<appTextInput v-on:inputChanged="surname = $event" name='Фамилия' v-bind:placeholder="surname"></appTextInput>
								<appTextInput v-on:inputChanged="phone = $event" name='Телефон' v-bind:placeholder="phone"></appTextInput>
							</div>
							<div class="form__section">
								<p class="form__title">
									Параметры
								</p>
								<appTextInput v-on:inputChanged="education = $event" name='Образование' v-bind:placeholder="education"></appTextInput>
								<appRadioInput v-on:inputChanged="sex = $event" name='Пол'></appRadioInput>
								<appDateInput v-on:inputDayChanged="birthDay = $event" v-on:inputMounthChanged="birthMounth = $event" v-on:inputYearChanged="birthYear = $event" name='Дата рождения'></appDateInput>
								<appTextareaInput v-on:inputChanged="info = $event" name='О себе' v-bind:placeholder="info"></appTextareaInput>
								<appTextInput v-on:inputChanged="country = $event" name='Гражданство' v-bind:placeholder="country"></appTextInput>
							</div>
							<div class="form__section form__section--dropdown">
								<template v-if="showRegCompany">
									<p class="form__title">
										Об организации
									</p>
									<appTextInput v-on:inputChanged="formOrganization = $event" name='Организационная форма' v-bind:placeholder="formOrganization"></appTextInput>
									<appTextInput v-on:inputChanged="companyName = $event" name='Название компании' v-bind:placeholder="companyName"></appTextInput>
									<appTextInput v-on:inputChanged="inn = $event" name='ИНН' v-bind:placeholder="inn"></appTextInput>
									<appTextInput v-on:inputChanged="city = $event" name='Город' v-bind:placeholder="city"></appTextInput>
								</template>
								<button class="form__add-company" v-on:click.prevent="showRegCompany = !showRegCompany" v-if='!showRegCompany'>
									Добавить юрлицо
								</button>
							</div>
							<button class="form__submit" v-on:click.prevent="submitRegForm">
								Продолжить
							</button>
							<appToTopBlock></appToTopBlock>
						</div>
						<div class="form__column form__column--right">
							<appAddLogo></appAddLogo>
						</div>
					</div>
				</form>
			</div>
		</section>
	</div>
</template>

<script>
	import appBreadcrumbs from '@/components/sections/Breadcrumbs.vue'
	import appTextInput from '@/components/blocks/Input.vue'
	import appToTopBlock from '@/components/blocks/To-top-block.vue'
	import appAddLogo from '@/components/blocks/AddLogo.vue'
	import appDateInput from '@/components/blocks/InputDate.vue'
	import appRadioInput from '@/components/blocks/Radio.vue'
	import appTextareaInput from '@/components/blocks/Textarea.vue'
	import * as firebase from 'firebase'

	export default {
		name: 'editProfile',
		components: {
			appBreadcrumbs,
			appTextInput,
			appToTopBlock,
			appRadioInput,
			appTextareaInput,
			appDateInput,
			appAddLogo
		},
		data () {
			return {
				password: null,
				passwordAgain: null,
				education: null,
				sex: null,
				birthDay: null,
				birthMounth: null,
				birthYear: null,
				info: null,
				country: null,
				formOrganization: null,
				companyName: null,
				inn: null,
				city: null,
				name: null,
				surname: null,
				phone: null,
				email: null,
				showRegCompany: false
			}
		},
		methods: {
			submitRegForm () {
				const regUserInfo = {
					userId: null,
					password: this.password,
					education: this.education,
					sex: this.sex,
					info: this.info,
					country: this.country,
					birthDay: this.birthDay,
					birthMounth: this.birthMounth,
					birthYear: this.birthYear,
					formOrganization: this.formOrganization,
					companyName: this.companyName,
					inn: this.inn,
					city: this.city,
					name: this.name,
					surname: this.surname,
					phone: this.phone,
					email: this.email
				}
				if (regUserInfo) {
					this.$store.dispatch('registerUser', regUserInfo)
					.then(() => {
						this.$store.dispatch('addLocalUser', regUserInfo)
					})
					.catch(() => {})
				}
			}
		},
		mounted () {
			if (this.$store.getters.localUser.companyName) {
				this.showRegCompany = true
			} else {
				this.showRegCompany = false
			}

			firebase.database().ref('users').once('value')
			.then(() => {
				this.education = this.$store.getters.localUser.education
				this.sex = this.$store.getters.localUser.sex
				this.birthDay = this.$store.getters.localUser.birthDay
				this.birthMounth = this.$store.getters.localUser.birthMounth
				this.birthYear = this.$store.getters.localUser.birthYear
				this.info = this.$store.getters.localUser.info
				this.country = this.$store.getters.localUser.country
				this.formOrganization = this.$store.getters.localUser.formOrganization
				this.companyName = this.$store.getters.localUser.companyName
				this.inn = this.$store.getters.localUser.inn
				this.city = this.$store.getters.localUser.city
				this.name = this.$store.getters.localUser.name
				this.surname = this.$store.getters.localUser.surname
				this.phone = this.$store.getters.localUser.phone
				this.email = this.$store.getters.localUser.email
			})
		}
	}
</script>

<style lang="scss">
	.registration {
		padding-top: 35px;
	}
	.form {
		&__columns {
			display: flex;
		}
		&__column {
			&--left {
				width: calc(100% / 12 * 9);
				padding-right: 20px;
				flex-shrink: 0;
			}
			&--right {
				flex-grow: 1;
				min-width: 1px;
				padding-top: 52px;
			}
		}
		&__section {
			margin-bottom: 40px;
			// &--dropdown {
			// 	margin-bottom: 0px;
			// }
		}
		&__title {
			font-weight: bold;
			font-size: 24px;
			color: #80929e;
			margin-bottom: 20px;
		}
		&__submit {
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: $accent;
			color: $light;
			border-radius: 4px;
			border: none;
			width: 174px;
			&:hover {
				opacity: 0.8;
			}
			&--disabled {
				background-color: #D6E0E6 !important;
				pointer-events: none;
			}
		}
		&__add-company {
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: $yellow;
			color: $dark;
			border-radius: 4px;
			border: none;
			width: 174px;
			margin-bottom: 20px;
			outline: none;
			&:hover {
				opacity: 0.8;
			}
		}
	}
</style>
