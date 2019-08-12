<template>
	<div class="page page--post">
		<appBreadcrumbs></appBreadcrumbs>
		<section class="s-post">
			<div class="container s-post__container">
				<h2 class="h2 s-post__title">
					{{ post.title }}
				</h2>
				<p class="s-post__publish">
					Опубликовано: <time>{{ post.publish }}</time>
				</p>
				<div class="s-post__content">
					<p>
						Диаграмма Ганта — это инструмент планирования, управления задачами, который придумал американский инженер Генри Гант (Henry Gantt). Выглядит это как горизонтальные полосы, расположенные между двумя осями: списком задач по вертикали и датами по горизонтали.
					</p>
					<p>
						На диаграмме видны не только сами задачи, но и их последовательность. Это позволяет ни о чём не забыть и делать всё своевременно.
					</p>
					<h3>
						Кому пригодится диаграмма
					</h3>
					<p>
						Если вы фанат планирования и любите красивые графики, диаграмма Ганта для вас. Она поможет и с запуском интернет-магазина, и в подготовке к масштабному мероприятию. В быту диаграмма пригодится для самостоятельного планирования свадьбы, ремонта или строительства дома, путешествия или подготовки к сессии.
					</p>
					<p>
						К примеру, фрилансер с диаграммой Ганта будет уверен, что сможет взяться ещё за один проект. А невеста, глядя на график, не будет переживать, что ничего не успевает.
					</p>
					<p>
						В бизнесе диаграмма Ганта помогает всем. Исполнитель точно знает, что, за чем и когда нужно сделать, его начальник контролирует сроки, а клиент спокоен, если видит, на каком этапе находится процесс.
					</p>
					<p>
						Пригодится инструмент и для презентации проекта. Заказчик или начальник увидит объём и сроки работ и поймёт, почему дизайн сайта, например, делается три месяца, а не неделю.
					</p>
					<h3>
						С чего начать работу с диаграммой Ганта
					</h3>
					<p>
						В первую очередь надо создать таблицу с исходными данными. Делать это можно где угодно: хоть на листке бумаги, хоть сразу в программе для построения диаграммы.
					</p>
					<p>
						Для таблицы нужны три типа данных: название задачи, дата начала и длительность или прогнозируемая дата окончания задачи. Учитывайте сроки, ресурсы и бюджет проекта, чтобы указать реалистичную дату окончания.
					</p>
					<p>
						К примеру, вы решили вдвоём сделать косметический ремонт в спальне. Таблица будет выглядеть так:
					</p>
					<img src="img/image.jpg" alt="Иллюстрация">
					<p>
						Если <a href="#">ремонт</a> делает рабочая бригада, то сроки каждой задачи будут иными.
					</p>
					<h3>
						Где и как строить диаграмму Ганта
					</h3>
					<p>
						Есть программы, в которых строить диаграмму нужно в несколько этапов. А есть cпециализированные инструменты, в которых достаточно нажать на пару иконок.
					</p>
					<p>
						Выбор инструмента зависит от масштаба и ценности проекта. Если вы делаете диаграмму для себя, можно использовать бесплатные решения или пробные версии программ. Крупным компаниям, работающим с дорогими проектами, лучше подойдут профессиональные программы.
					</p>
					<h4>
						1. Microsoft Excel
					</h4>
					<ul>
						<li>
							<strong>Цена:</strong> 5 199 рублей на один ПК или лицензионная подписка от 269 рублей в месяц.
						</li>
						<li>
							<strong>Бесплатный период:</strong> 1 месяц.
						</li>
					</ul>
					<p>
						Одна из самых популярных программ для работы с таблицами и графиками. Для многократного создания диаграмм можно использовать шаблон.
					</p>
				</div>
				<div class="s-post__other">
					<h3 class="s-post__other-title">
						Другие новости
					</h3>
					<div class="s-post__other-articles">
						<appFrontArticle v-for="post in posts" :key="post.id" :title="post.title" :publish="post.publish" :link="post.link" :thumb="post.thumb" :id="post.id"></appFrontArticle>
					</div>
				</div>
				<appToTopBlock></appToTopBlock>
			</div>
		</section>
	</div>
</template>

<script>
	import appBreadcrumbs from '@/components/sections/Breadcrumbs.vue'
	import appFrontArticle from '@/components/blocks/Front-article.vue'
	import appToTopBlock from '@/components/blocks/To-top-block.vue'
	export default {
		name: 'single-post',
		props: ['id'],
		computed: {
			post () {
				let id = this.id
				return this.$store.getters.postById(id)
			},
			posts () {
				return this.$store.getters.posts
			}
		},
		components: {
			appBreadcrumbs,
			appFrontArticle,
			appToTopBlock
		},
		mounted() {
			console.log(this.$store.getters)
		}
	}
</script>

<style lang="scss">
	.s-post {
		padding-top: 35px;
		&__title {
			margin-bottom: 35px;
			width: calc(100% / 12 * 9 - 20px);
		}
		&__publish {
			font-size: 14px;
			line-height: 16px;
			margin-bottom: 17px;
			color: #80929D;
			width: calc(100% / 12 * 9 - 20px);
		}
		&__content {
			font-size: 16px;
			line-height: 26px;
			padding-bottom: 50px;
			p {
				width: calc(100% / 12 * 9 - 20px);
			}
			h1 {
				font-size: 26px;
				line-height: 30px;
				font-weight: bold;
				width: calc(100% / 12 * 9 - 20px);
			}
			h2 {
				font-weight: bold;
				font-size: 22px;
				line-height: 28px;
				width: calc(100% / 12 * 9 - 20px);
			}
			h3 {
				font-weight: bold;
				font-size: 18px;
				line-height: 22px;
				width: calc(100% / 12 * 9 - 20px);
			}
			ul {
				list-style-type: disc;
				padding-left: 20px;
				list-style-position: outside;
				width: calc(100% / 12 * 9 - 20px);
			}
			ol {
				list-style-type: decimal;
				padding-left: 20px;
				list-style-position: outside;
				width: calc(100% / 12 * 9 - 20px);
			}
			li {}
			em {
				font-style: italic;
			}
			strong {
				font-weight: bold;
			}
			img {
				width: 100%;
				margin-bottom: 50px;
				display: block;
			}
			a {
				color: #0AA5DC;
				cursor: pointer;
				&:hover {
					text-decoration: none;
				}
			}
			blockquote {
				font-style: italic;
				background-color: #ececec;
				padding-left: 25px;
				padding-right: 25px;
				padding-top: 20px;
				padding-bottom: 20px;
				p {
					width: 100%;
				}
			}
		}
		&__other {
			padding-top: 48px;
			border-top: 1px solid #D6E0E6;
		}
		&__other-title {
			font-weight: 500;
			font-size: 20px;
			line-height: 23px;
			margin-bottom: 20px;
		}
		&__other-articles {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
	}
</style>
