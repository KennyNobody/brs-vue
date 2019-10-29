<template>
	<div class="page page--registration">
		<appBreadcrumbs></appBreadcrumbs>
		<section class="registration">
			<div class="container">
				<form class="form">
					<h2 class="h2">
						Добавить резюме
					</h2>
					<div class="form__columns">
						<div class="form__column form__column--left">
							<div class="form__section">
								<p class="form__title">
									Дополнительная информация
								</p>
								<appTextInput v-on:inputChanged="resumeTitle = $event" name='Желаемая должность' ></appTextInput>
								<appDropdown
								v-on:inputChanged="resumeTheme = $event"
								:values='[
								"Маркетинг",
								"Медицина",
								"Наука",
								"Продажи",
								"Производство",
								"Строительство",
								"Транспорт",
								"Туризм, рестораны",
								"Финансы"
								]'
								name='Направление'
								></appDropdown>
								<appDropdown
								v-on:inputChanged="resumeShedule = $event"
								:values='["Полная занятость", "Частичная занятость", "Стажировка"]'
								name='График работы'
								></appDropdown>
								<appDropdown
								v-on:inputChanged="resumeExperience = $event"
								:values='["Нет", "Более одного года", "Более 3 лет", "Более 5 лет", "Более 10 лет", "Более 20 лет"]'
								name='Опыт работы'
								></appDropdown>
								<appTextInput v-on:inputChanged="resumeSalary = $event" name='Желаемая зарплата, ₽'></appTextInput>
								<p class="form__title">
									Личная информация
								</p>
								<appTextInput v-on:inputChanged="resumeSurname = $event" name='Фамилия' ></appTextInput>
								<appTextInput v-on:inputChanged="resumeName = $event" name='Имя' ></appTextInput>
								<appRadioInput v-on:inputChanged="resumeSex = $event" name='Пол'></appRadioInput>
								<appDropdown
								v-on:inputChanged="resumeCity = $event"
								:values='[
								"Багратионовск",
								"Балтийск",
								"Гурьев",
								"Гусев",
								"Калининград",
								"Нестеров",
								"Полесск",
								"Светлый",
								"Черняховск"
								]'
								name='Город'
								></appDropdown>
								<appTextInput v-on:inputChanged="resumeEducation = $event" name='Образование'></appTextInput>
								<appTextInput v-on:inputChanged="resumeCountry = $event" name='Гражданство'></appTextInput>
								<appTextareaInput v-on:inputChanged="resumeInfo = $event" name='О себе'></appTextareaInput>
								<p class="form__title">
									Контакты
								</p>
								<appTextInput v-on:inputChanged="resumePhone = $event" name='Телефон'></appTextInput>
								<appTextInput v-on:inputChanged="resumeEmail = $event" name='Email'></appTextInput>
							</div>
							<button class="form__submit" v-on:click.prevent="createResume">
								Продолжить
							</button>
							<appToTopBlock></appToTopBlock>
						</div>
						<div class="form__column form__column--right">
							<appAddImage v-on:inputChanged="resumeThumb = $event"></appAddImage>
							<appAddDoc v-on:inputChanged="resumeFile = $event"></appAddDoc>
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
	import appAddImage from '@/components/blocks/AddImage.vue'
	import appAddDoc from '@/components/blocks/AddDoc.vue'
	import appTextareaInput from '@/components/blocks/Textarea.vue'
	import appDropdown from '@/components/blocks/Dropdown.vue'
	import appRadioInput from '@/components/blocks/Radio.vue'

	export default {
		name: 'resume-add',
		components: {
			appBreadcrumbs,
			appTextInput,
			appToTopBlock,
			appTextareaInput,
			appRadioInput,
			appAddImage,
			appAddDoc,
			appDropdown
		},
		data () {
			return {
				resumeTitle: null,
				resumeTheme: null,
				resumeShedule: null,
				resumeExperience: null,
				resumeSalary: null,
				resumeSurname: null,
				resumeName: null,
				resumeSex: null,
				resumeCity: null,
				resumeEducation: null,
				resumeCountry: null,
				resumeInfo: null,
				resumePhone: null,
				resumeEmail: null,
				resumeThumb: null,
				resumeFile: null
			}
		},
		methods: {
			createResume () {
				const resumeInfo = {
					resumeOwnerId: null,
					resumeId: null,
					resumeTitle: this.resumeTitle,
					resumeTheme: this.resumeTheme,
					resumeShedule: this.resumeShedule,
					resumeExperience: this.resumeExperience,
					resumeSalary: this.resumeSalary,
					resumeSurname: this.resumeSurname,
					resumeName: this.resumeName,
					resumeSex: this.resumeSex,
					resumeCity: this.resumeCity,
					resumeEducation: this.resumeEducation,
					resumeCountry: this.resumeCountry,
					resumeInfo: this.resumeInfo,
					resumePhone: this.resumePhone,
					resumeEmail: this.resumeEmail,
					resumeThumb: this.resumeThumb,
					resumeFile: this.resumeFile
				}
				if (resumeInfo) {
					this.$store.dispatch('createResume', resumeInfo)
					.then(() => {
						console.log('Отправлено')
					})
					.catch(() => {
						console.log('Ошибка')
					})
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
			&--dropdown {
				margin-bottom: 0px;
			}
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
