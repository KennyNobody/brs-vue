<template>
	<form class="form" v-on:submit.prevent="submitForm">
		<h2 class="h2">
			Регистрация соискателя
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
					<appTextInput v-on:inputChanged="name = $event" name='Имя'></appTextInput>
					<appTextInput v-on:inputChanged="surname = $event" name='Фамилия'></appTextInput>
					<appTextInput v-on:inputChanged="education = $event" name='Образование'></appTextInput>
					<appRadioInput v-on:inputChanged="sex = $event" name='Пол'></appRadioInput>
					<appDateInput v-on:inputChanged="birth = $event" name='Дата рождения'></appDateInput>
					<appTextareaInput v-on:inputChanged="info = $event" name='О себе'></appTextareaInput>
					<appTextInput v-on:inputChanged="country = $event" name='Гражданство'></appTextInput>
				</div>
				<div class="form__section">
					<p class="form__title">
						Контактная информация
					</p>
					<appTextInput v-on:inputChanged="phone = $event" name='Телефон'></appTextInput>
					<appTextInput v-on:inputChanged="email = $event" name='Email'></appTextInput>
				</div>
				<button class="form__submit" v-bind:class="{ 'form__submit--disabled': loading }">
					Продолжить
				</button>
				<appToTopBlock></appToTopBlock>
			</div>
			<div class="form__column form__column--right">
				<appAddImage></appAddImage>
				<appAddDoc></appAddDoc>
			</div>
		</div>
	</form>
</template>

<script>
	import appTextInput from '@/components/blocks/Input.vue'
	import appDateInput from '@/components/blocks/InputDate.vue'
	import appRadioInput from '@/components/blocks/Radio.vue'
	import appTextareaInput from '@/components/blocks/Textarea.vue'
	import appToTopBlock from '@/components/blocks/To-top-block.vue'
	import appAddImage from '@/components/blocks/AddImage.vue'
	import appAddDoc from '@/components/blocks/AddDoc.vue'
	export default {
		name: 'regUser',
		props: {},
		data () {
			return {
				userInfo: {
					login: null,
					password: null,
					passwordAgain: null,
					name: null,
					surname: null,
					education: null,
					sex: 'Мужской',
					birthDay: null,
					birthMounth: null,
					birthYear: null,
					info: null,
					phone: null,
					email: null,
					avatar: null,
					doc: null
				}
			}
		},
		components: {
			appTextInput,
			appRadioInput,
			appTextareaInput,
			appToTopBlock,
			appDateInput,
			appAddImage,
			appAddDoc
		},
		computed: {
			loading () {
				return this.$store.getters.loading
			}
		},
		methods: {
			submitForm: function () {
				const user = {
					email: this.email,
					password: this.password
				}

				this.$store.dispatch('registerUser', user)
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
			outline: none;
			&:hover {
				opacity: 0.8;
			}
			&--disabled {
				background-color: #D6E0E6 !important;
				pointer-events: none;
			}
		}
	}
</style>
