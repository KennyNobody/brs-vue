<template>
	<form class="form" v-on:submit.prevent="submitForm">
		<h2 class="h2">
			Регистрация работодателя
		</h2>
		<div class="form__columns">
			<div class="form__column form__column--left">
				<div class="form__section">
					<p class="form__title">
						Данные аккаунта
					</p>
					<appTextInput v-on:inputChanged="login = $event" name='Логин'></appTextInput>
					<appTextInput v-on:inputChanged="password = $event" name='Пароль'></appTextInput>
					<appTextInput v-on:inputChanged="passwordAgain = $event" name='Повторите пароль'></appTextInput>
				</div>
				<div class="form__section">
					<p class="form__title">
						Параметры
					</p>
					<appTextInput v-on:inputChanged="formOrganization = $event" name='Организационная форма'></appTextInput>
					<appTextInput v-on:inputChanged="companyName = $event" name='Название компании'></appTextInput>
					<appTextInput v-on:inputChanged="inn = $event" name='ИНН'></appTextInput>
					<appTextInput v-on:inputChanged="city = $event" name='Город'></appTextInput>
				</div>
				<div class="form__section">
					<p class="form__title">
						Контактная информация
					</p>
					<appTextInput v-on:inputChanged="name = $event" name='Имя'></appTextInput>
					<appTextInput v-on:inputChanged="surname = $event" name='Фамилия'></appTextInput>
					<appTextInput v-on:inputChanged="phone = $event" name='Телефон'></appTextInput>
					<appTextInput v-on:inputChanged="email = $event" name='Email'></appTextInput>
				</div>
				<button class="form__submit">
					Продолжить
				</button>
				<appToTopBlock></appToTopBlock>
			</div>
			<div class="form__column form__column--right">
				<appAddLogo></appAddLogo>
			</div>
		</div>
	</form>
</template>

<script>
	import appTextInput from '@/components/blocks/Input.vue'
	import appToTopBlock from '@/components/blocks/To-top-block.vue'
	import appAddLogo from '@/components/blocks/AddLogo.vue'
	export default {
		name: 'regCompany',
		props: {},
		data () {
			return {
				login: null,
				password: null,
				passwordAgain: null,
				formOrganization: null,
				companyName: null,
				inn: null,
				city: null,
				name: null,
				surname: null,
				phone: null,
				email: null
			}
		},
		components: {
			appTextInput,
			appToTopBlock,
			appAddLogo
		},
		computed: {},
		methods: {
			submitForm: function () {
				const regCompanyInfo = {
					login: this.login,
					password: this.password,
					passwordAgain: this.passwordAgain,
					formOrganization: this.formOrganization,
					companyName: this.companyName,
					inn: this.inn,
					city: this.city,
					name: this.name,
					surname: this.surname,
					phone: this.phone,
					submit: this.submit
				}
				console.log(regCompanyInfo)
			}
		}
	}
</script>

<style lang="scss">
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
		}
	}
</style>
