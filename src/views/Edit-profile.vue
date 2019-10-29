<template>
	<div class="page page--registration">
		<appBreadcrumbs></appBreadcrumbs>
		<section class="registration">
			<div class="container">
				<form class="form" >
					<h2 class="h2">
						Редактировать профиль
					</h2>
					<div class="form__columns">
						<div class="form__column form__column--left">
							<div class="form__section">
								<p class="form__title">
									Данные аккаунта
								</p>

								<appTextInput
								v-on:inputChanged="email = $event"
								name='Email'
								v-bind:placeholder="localUser.email"
								></appTextInput>

								<appTextInput
								v-on:inputChanged="password = $event"
								name='Новый пароль'
								></appTextInput>

								<appTextInput
								v-on:inputChanged="passwordAgain = $event"
								name='Повторите пароль'
								></appTextInput>
							</div>
							<div class="form__section">
								<p class="form__title">
									Контактная информация
								</p>
								<appTextInput v-on:inputChanged="localUser.name = $event" name='Имя' v-bind:placeholder="localUser.name"></appTextInput>
								<appTextInput v-on:inputChanged="localUser.surname = $event" name='Фамилия' v-bind:placeholder="localUser.surname"></appTextInput>
								<appTextInput v-on:inputChanged="localUser.phone = $event" name='Телефон' v-bind:placeholder="localUser.phone"></appTextInput>
							</div>
							<div class="form__section">
								<p class="form__title">
									Параметры
								</p>
								<appTextInput v-on:inputChanged="localUser.education = $event" name='Образование' v-bind:placeholder="localUser.education"></appTextInput>

								<div class="radio">
									<p class="radio__title">
										Пол
									</p>
									<div class="radio__wrap">
										<label class="radio__label" v-bind:class="{ 'radio__label--checked': localUser.sex === 'Мужской' && 'мужской' }">
											<div class="radio__label-name">
												<p>Мужской</p>
											</div>
											<input type="radio" v-model="localUser.sex" name="sex" class="radio__input" value="Мужской">
										</label>
										<div class="radio__separator" v-if="!localUser.sex"></div>
										<label class="radio__label" v-bind:class="{ 'radio__label--checked': localUser.sex === 'Женский' && 'женский' }">
											<div class="radio__label-name">
												<p>Женский</p>
											</div>
											<input type="radio" v-model="localUser.sex" name="sex" class="radio__input" value="Женский">
										</label>
									</div>
								</div>

								<appDateInput
								v-on:inputDayChanged="localUser.birthDay = $event"
								v-on:inputMounthChanged="localUser.birthMounth = $event"
								v-on:inputYearChanged="localUser.birthYear = $event"
								name='Дата рождения'
								v-bind:placeholders='{
									placeholderDay : localUser.birthDay,
									placeholderMounth : localUser.birthMounth,
									placeholderYear : localUser.birthYear
								}'
								></appDateInput>
								<appTextareaInput v-on:inputChanged="localUser.info = $event" name='О себе' v-bind:placeholder="localUser.info"></appTextareaInput>
								<appTextInput v-on:inputChanged="localUser.country = $event" name='Гражданство' v-bind:placeholder="localUser.country"></appTextInput>
							</div>
							<div class="form__section form__section--dropdown">
								<template v-if="showRegCompany">
									<p class="form__title">
										Об организации
									</p>
									<appTextInput v-on:inputChanged="localUser.formOrganization = $event" name='Организационная форма' v-bind:placeholder="localUser.formOrganization"></appTextInput>
									<appTextInput v-on:inputChanged="localUser.companyName = $event" name='Название компании' v-bind:placeholder="localUser.companyName"></appTextInput>
									<appTextInput v-on:inputChanged="localUser.inn = $event" name='ИНН' v-bind:placeholder="localUser.inn"></appTextInput>
									<appTextInput v-on:inputChanged="localUser.city = $event" name='Город' v-bind:placeholder="localUser.city"></appTextInput>
								</template>
								<button class="form__add-company" v-on:click.prevent="showRegCompany = !showRegCompany" v-if='!showRegCompany'>
									Добавить юрлицо
								</button>
							</div>
							<button class="form__submit" v-on:click.prevent="saveLocalUser">
								Сохранить
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

	export default {
		name: 'editProfile',
		components: {
			appBreadcrumbs,
			appTextInput,
			appToTopBlock,
			// eslint-disable-next-line
			appRadioInput,
			appTextareaInput,
			appDateInput,
			appAddLogo
		},
		methods: {
			saveLocalUser () {
				this.$store.dispatch('changeLocalUser')
				.then(() => {
					console.log('Изменено')
				})
				.catch(() => {})
			}
		},
		computed: {
			localUser: {
				get () {
					return this.$store.getters.localUser
				},
				set (value) {
					console.log('Изменили')
					this.$store.commit('changeLocalUser', value)
				}
			},
			showRegCompany () {
				if (this.localUser.companyName !== 'Не указано') {
					return true
				} else {
					return false
				}
			}
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
