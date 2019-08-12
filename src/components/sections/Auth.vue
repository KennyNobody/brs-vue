<template>
	<div class="auth">
		<div class="container auth__container">
			<div class="auth__content">
				<div class="auth__thumb"></div>
				<form action="" class="auth__form">
					<router-link class="auth__close" to="/">
						<svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
							<line x1="0.707107" y1="1.29289" x2="20.5061" y2="21.0919" stroke="#0AA5DC" stroke-width="2"/>
							<line x1="0.717698" y1="21.1027" x2="20.5167" y2="1.30372" stroke="#0AA5DC" stroke-width="2"/>
						</svg>
					</router-link>
					<p class="auth__title">
						Вход
					</p>
					<label class="auth__label">
						<p class="auth__label-title">
							E-mail <strong>{{ errors.first('email') }}</strong>
						</p>
						<input type="text" v-validate="'required|email'" name="email" class="auth__input" v-model="email" v-on:input="checkForm">
					</label>
					<label class="auth__label">
						<p class="auth__label-title">
							Пароль <strong>{{ errors.first('password') }}</strong>
						</p>
						<input type="password" class="auth__input" v-validate="'required|min:8'" name="password" v-model="password" v-on:input="checkForm">
					</label>
					<div class="auth__control">
						<label class="auth__check">
							<input type="checkbox" class="auth__check-input">
							<div class="auth__check-icon">
								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 26 26">
									<path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"/>
								</svg>
							</div>
							<p class="auth__check-text">
								Запомнить меня
							</p>
						</label>
						<a href="#" class="auth__remember">
							Забыли пароль?
						</a>
					</div>
					<button class="auth__submit" v-on:click.prevent='submitForm' v-bind:class="{'auth__submit--disabled' : !valid }">
				Войти
			</button>
			<div class="auth__separator">или войти через</div>
			<a href="#" class="auth__soc-link auth__soc-link--google">
				<span>Google</span>
			</a>
			<a href="#" class="auth__soc-link auth__soc-link--vk">
				<span>ВКонтакте</span>
			</a>
			<a href="#" class="auth__soc-link auth__soc-link--fb">
				<span>Facebook</span>
			</a>
			<div class="auth__hr"></div>
			<p class="auth__without-profile">
				Нет аккаунта?
				<router-link class="auth__without-profile--accent" to="/registration">
					Зарегистрироваться
				</router-link>
			</p>
		</form>
	</div>
</div>
</div>
</template>

<script>
	import Vue from 'vue'
	import VeeValidate from 'vee-validate'
	import dictionary from '@/validationDictionary'

	Vue.use(VeeValidate, {
		locale: 'ru',
		dictionary: dictionary
	})

	export default {
		name: 'appAuth',
		props: {},
		data () {
			return {
				email: '',
				password: '',
				valid: false
			}
		},
		methods: {
			checkForm: function () {
				this.$validator.validateAll().then(res => {
					if (res) {
						this.valid = true
					} else {
						this.valid = false
					}
				})
			},
			submitForm: function () {
				const user = {
					email: this.email,
					password: this.password
				}

				this.$store.dispatch('loginUser', user)
			}
		}
	}
</script>

<style lang="scss">
	.auth {
		padding-top: 32px;
		padding-bottom: 32px;
		&__content {
			min-height: 600px;
			display: flex;
			justify-content: space-between;
		}
		&__thumb {
			width: 50%;
			background-image: url(/img/auth-thumb.jpg);
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
		}
		&__form {
			width: 50%;
			padding-left: 54px;
			padding-right: 30px;
			padding-bottom: 36px;
			padding-top: 82px;
			position: relative;
		}
		&__title {
			font-weight: bold;
			font-size: 28px;
			margin-bottom: 47px;
		}
		&__label {
			display: block;
			width: 100%;
			font-size: 16px;
			margin-bottom: 16px;
		}
		&__label-title {
			margin-bottom: 4px;
			strong {
				font-size: 12px;
				color: #DD4B39;
			}
		}
		&__input {
			display: block;
			width: 100%;
			border: none;
			border-bottom: 1px solid #D6E0E6;
			font-size: 16px;
			height: 35px;
			color: $dark;
			outline: none;
		}
		&__control {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 22px;
		}
		&__check {
			display: flex;
			align-items: center;
			cursor: pointer;
			user-select: none;
		}
		&__check-input {
			display: none;
			&:checked + .auth__check-icon {
				svg {
					opacity: 1;
				}
			}
		}
		&__check-icon {
			border: 1px solid #D6E0E6;
			height: 14px;
			width: 14px;
			position: relative;
			margin-right: 6px;
			display: flex;
			justify-content: center;
			align-items: center;
			svg {
				height: 10px;
				width: 10px;
				fill: $accent;
				opacity: 0;
			}
		}
		&__check-text {
			font-size: 14px;
			color: #80929D;
			position: relative;
			top: 1px;
		}
		&__remember {
			color: $accent;
			text-decoration: none;
			font-size: 14px;
			&:hover {
				text-decoration: underline;
			}
		}
		&__submit {
			display: flex;
			align-items: center;
			border-radius: 4px;
			background-color: $accent;
			color: $light;
			font-weight: bold;
			font-size: 20px;
			justify-content: center;
			width: 100%;
			border: none;
			cursor: pointer;
			height: 40px;
			transition: 0.3s all;
			margin-bottom: 54px;
			outline: none;
			&:hover {
				opacity: 0.8;
			}
			&--disabled {
				pointer-events: none;
				background-color: #D6E0E6;
			}
		}
		&__separator {
			display: flex;
			align-items: center;
			color: #80929D;
			font-size: 14px;
			margin-bottom: 10px;
			&:before {
				content: "";
				height: 1px;
				flex-grow: 1;
				background-color: #D6E0E6;
				margin-right: 12px;
			}
			&:after {
				content: "";
				height: 1px;
				flex-grow: 1;
				background-color: #D6E0E6;
				margin-left: 12px;
			}
		}
		&__soc-link {
			width: 132px;
			height: 40px;
			display: inline-flex;
			justify-content: space-around;
			align-items: center;
			margin-right: 10px;
			font-weight: bold;
			text-decoration: none;
			color: $light;
			border-radius: 4px;
			font-size: 14px;
			transition: 0.3s all;
			&--google {
				background-color: #DD4B39;
			}
			&--vk {
				background-color: #44678D;
			}
			&--fb {
				background-color: #3A559F;
			}
			&:hover {
				opacity: 0.8;
			}
		}
		&__hr {
			display: block;
			background-color: #D6E0E6;
			width: 100%;
			margin-top: 12px;
			margin-bottom: 51px;
			height: 1px;
		}
		&__without-profile {
			font-size: 16px;
			text-align: center;
			color: #80929D;
			&--accent {
				color: $accent;
				font-weight: bold;
				text-decoration: none;
				&:hover {
					text-decoration: underline;
				}
			}
		}
		&__close {
			height: 22px;
			width: 22px;
			transition: 0.3s all;
			display: block;
			position: absolute;
			right: 30px;
			top: 30px;
			svg {
				fill: $accent;
				width: 100%;
				height: 100%;
			}
			&:hover {
				opacity: 0.8;
			}
		}
	}
</style>
