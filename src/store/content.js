export default {
	state: {
		content: {
			social: {
				vk: 'www.vk.com',
				facebook: 'www.facebook.com',
				instagram: 'www.instagram.com',
				twitter: 'www.twitter.com'
			},
			info: {
				adress: '236016, г. Калининград, ул. А. Невского, 14',
				sheduleTop: 'Пн-Чт с 9.00 до 18.00',
				sheduleBottom: 'Пт с 9.00 до 16.45',
				phone1: '(4012) 595-596 ',
				phone1link: 'tel:+74012595596',
				phone2: '(4012) 466-422',
				phone2link: 'tel:+74012466422'
			},
			links: {
				headerLinks: [
				{
					title: 'Главная',
					url: '/'
				},
				{
					title: 'Вакансии',
					url: '/jobs/'
				},
				{
					title: 'Резюме',
					url: '/resumes/'
				},
				{
					title: 'Одиночная вакансия',
					url: '/jobs/1'
				},
				{
					title: 'Одиночное резюме',
					url: '/resumes/1'
				},
				{
					title: 'Полезное (новости)',
					url: '/news/'
				},
				{
					title: 'Страница входа',
					url: '/sign-in'
				},
				{
					title: 'Регистрация',
					url: '/registration'
				},
				{
					title: 'Страница 404',
					url: '/none/'
				},
				{
					title: 'Создание поста',
					url: '/post-edit'
				},
				{
					title: 'Добавить вакансию',
					url: '/vacancy-add'
				},
				{
					title: 'Редактировать вакансию',
					url: '/vacancy-edit'
				},
				{
					title: 'Добавить резюме',
					url: '/resume-add'
				},
				{
					title: 'Редактировать резюме',
					url: '/resume-edit'
				},
				{
					title: 'Профиль',
					url: '/profile'
				},
				{
					title: 'Редактировать профиль',
					url: '/edit-profile'
				}
				],
				footerLeftColumns: [
				{
					title: 'Работодателю',
					url: ''
				},
				{
					title: 'Студенту',
					url: ''
				},
				{
					title: 'Вакансии',
					url: ''
				},
				{
					title: 'Резюме',
					url: ''
				},
				{
					title: 'Центр карьеры',
					url: ''
				},
				{
					title: 'Новости',
					url: ''
				}
				],
				footerRightColumns: [
				{
					title: 'Студенческие отряды',
					url: ''
				},
				{
					title: 'Проектный офис студенческих инициатив',
					url: ''
				},
				{
					title: 'Разрешение на работу для иностранных граждан',
					url: ''
				},
				{
					title: 'Полезные ссылки',
					url: ''
				},
				{
					title: 'Мониторинг трудоустройства выпускников',
					url: ''
				}
				]
			}
		}
	},
	mutations: {

	},
	actions: {

	},
	getters: {
		content (state) {
			return state.content
		}
	}
}
