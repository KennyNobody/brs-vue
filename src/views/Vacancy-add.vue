<template>
	<div class="page page--registration">
		<appBreadcrumbs></appBreadcrumbs>
		<section class="registration">
			<div class="container">
				<form class="form">
					<h2 class="h2">
						Добавить вакансию
					</h2>
					<div class="form__columns">
						<div class="form__column form__column--left">
							<div class="form__section">
								<p class="form__title">
									Данные аккаунта
								</p>
								<appTextInput v-on:inputChanged="vacancyName = $event" name='Название вакансии' ></appTextInput>
								<appDropdown
								v-on:inputChanged="vacancyShedule = $event"
								:values='["Полная занятость", "Частичная занятость", "Стажировка"]'
								name='График работы'
								></appDropdown>
								<appTextareaInput v-on:inputChanged="vacancyInfo = $event" name='Описание вакансии и компании'></appTextareaInput>
								<appDropdown
								v-on:inputChanged="vacancyCity = $event"
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
								<appTextInput v-on:inputChanged="vacancyAdress = $event" name='Адрес фирмы'></appTextInput>
								<appDropdown
								v-on:inputChanged="vacancyExperience = $event"
								:values='["Не имеет значения", "Более одного года", "Более 3 лет", "Более 5 лет", "Более 10 лет"]'
								name='Опыт работы'
								></appDropdown>
								<appTextInput v-on:inputChanged="vacancySalary = $event" name='Зарплата, ₽'></appTextInput>
							</div>
							<button class="form__submit" v-on:click.prevent="createVacancy">
								Продолжить
							</button>
							<appToTopBlock></appToTopBlock>
						</div>
						<div class="form__column form__column--right">
							<appAddLogo v-on:inputChanged="vacancyLogo = $event"></appAddLogo>
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
	import appTextareaInput from '@/components/blocks/Textarea.vue'
	import appDropdown from '@/components/blocks/Dropdown.vue'

	export default {
		name: 'vacancy-add',
		components: {
			appBreadcrumbs,
			appTextInput,
			appToTopBlock,
			appTextareaInput,
			appAddLogo,
			appDropdown
		},
		data () {
			return {
				vacancyId: null,
				vacancyName: null,
				vacancyShedule: null,
				vacancyInfo: null,
				vacancyCity: null,
				vacancyAdress: null,
				vacancyExperience: null,
				vacancySalary: null,
				vacancyLogo: null
			}
		},
		methods: {
			createVacancy () {
				const vacancyInfo = {
					vacancyOwnerId: null,
					vacancyId: this.vacancyId,
					vacancyName: this.vacancyName,
					vacancyShedule: this.vacancyShedule,
					vacancyInfo: this.vacancyInfo,
					vacancyCity: this.vacancyCity,
					vacancyAdress: this.vacancyAdress,
					vacancyExperience: this.vacancyExperience,
					vacancySalary: this.vacancySalary,
					vacancyLogo: this.vacancyLogo
				}
				if (vacancyInfo) {
					this.$store.dispatch('createVacancy', vacancyInfo)
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
