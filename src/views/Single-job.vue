<template>
	<div class="page page--single-job">
		<appBreadcrumbs></appBreadcrumbs>
		<section class="s-job">
			<div class="container s-job__container">
				<h2 class="h2 s-job__title">
					{{ job.title }}
				</h2>
				<div class="s-job__columns">
					<div class="s-job__content">
						<p class="s-job__publish">
							Опубликовано:
							<time>
								{{ job.publish }}
							</time>
						</p>
						<div class="s-job__text">
							<p>Додо Пицца - сеть пиццерий № 1 в России.</p>
							<p>В Калининграде имеет 3 пиццерии: на Горького 104б, Дзержинского, 57б, Советский пр,1 (круглосуточная).</p>
							<p>Требования: четкое выполнение стандартов компании. </p>
							<p>Обязанности: работа с тестом, заготовки, упаковка, уборка рабочего места.</p>
							<br>
							<p>Условия:</p>
							<ul>
								<li>официальное устройство (иностранных граждан тоже берем)</li>
								<li>
									выплаты ЗП 2 раза в месяц
								</li>
								<li>
									бесплатные обеды
								</li>
								<li>
									бесплатное обучение
								</li>
								<li>
									возможность стать менеджером, замом управляющего и управляющим
								</li>
								<li>
									дружная команда
								</li>
								<li>
									поощрения лучших сотрудников
								</li>
								<li>
									униформа предоставляется
								</li>
								<li>
									ночной развоз сотрудников
								</li>
								<li>
									оплачиваемая медицинская книжка
								</li>
							</ul>
							<p>ЗП от 25 000 до 40 000</p>
							<p>Оплата с 1 дня работы, даже стажерских часов</p>
						</div>
					</div>
					<div class="s-job__info">
						<div class="s-job__thumb">
							<img v-bind:src='job.thumb' v-bind:alt='job.organization'>
						</div>
						<p class="s-job__organization">
							{{ job.organization }}
						</p>
						<div class="s-job__city">
							<svg viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg"><path d="M4.43823 0.00250112C2.00127 -0.0796255 0 1.87139 0 4.28979C0 7.03441 2.63389 9.02627 4.11019 11.8908C4.18514 12.0363 4.39451 12.0365 4.46972 11.891C5.80524 9.31351 8.08783 7.58514 8.51084 5.10199C8.94884 2.53242 7.04334 0.0903287 4.43823 0.00250112ZM4.28975 6.53679C3.04878 6.53679 2.04275 5.53074 2.04275 4.28979C2.04275 3.04885 3.0488 2.04279 4.28975 2.04279C5.53071 2.04279 6.53677 3.04885 6.53677 4.28979C6.53677 5.53074 5.53071 6.53679 4.28975 6.53679Z"></path></svg>
							<span>
								{{ job.city }}
							</span>
						</div>
						<div class="s-job__shedule">
							<appFullday v-if='job.shedule === "Полная"'></appFullday>
							<appPartialday v-else-if='job.shedule === "Частичная"'></appPartialday>
							<appProbation v-else></appProbation>
						</div>
						<p class="s-job__price">
							от {{ job.price }} руб.
						</p>
						<div class="s-job__information">
							<p class="s-job__information-title">
								Адрес:
							</p>
							<p class="s-job__information-text">
								{{ job.city }}, {{ job.adress }}
							</p>
						</div>
						<div class="s-job__information">
							<p class="s-job__information-title">
								Контактное лицо:
							</p>
							<p class="s-job__information-text">
								{{ job.contacts }}
							</p>
						</div>
						<appPhone :phone="job.phone"></appPhone>
					</div>
				</div>
				<div class="s-job__other">
					<h3 class="s-job__other-title">
						Другие вакансии
					</h3>
					<div class="s-job__other-articles">
						<appFrontJob v-for="job in jobs" :key="job.id" :title="job.title" :publish="job.publish" :link="job.link" :thumb="job.thumb" :city='job.city' :price="job.price" :organization='job.organization' :shedule='job.shedule'></appFrontJob>
					</div>
				</div>
				<appToTopBlock></appToTopBlock>
			</div>
		</section>
	</div>
</template>

<script>
	import appBreadcrumbs from '@/components/sections/Breadcrumbs.vue'
	import appFullday from '@/components/blocks/Full-day.vue'
	import appPartialday from '@/components/blocks/Partial-day.vue'
	import appProbation from '@/components/blocks/Probation.vue'
	import appPhone from '@/components/blocks/Phone.vue'
	import appFrontJob from '@/components/blocks/Front-job.vue'
	import appToTopBlock from '@/components/blocks/To-top-block.vue'
	export default {
		name: 'jobs',
		props: ['id'],
		computed: {
			job () {
				let id = this.id
				return this.$store.getters.jobById(id)
			},
			jobs () {
				return this.$store.getters.jobs
			}
		},
		components: {
			appBreadcrumbs,
			appFullday,
			appPartialday,
			appProbation,
			appPhone,
			appFrontJob,
			appToTopBlock
		}
	}
</script>

<style lang="scss">
	.s-job {
		padding-top: 35px;
		&__title {
			margin-bottom: 35px;
		}
		&__columns {
			display: flex;
			justify-content: space-between;
			padding-bottom: 25px;
		}
		&__content {
			flex-grow: 1;
			padding-right: 20px;
			min-width: 0px;
		}
		&__info {
			width: calc(100% / 12 * 3);
		}
		&__publish {
			font-size: 14px;
			line-height: 16px;
			margin-bottom: 17px;
			color: #80929D;
		}
		&__text {
			font-size: 16px;
			line-height: 26px;
			ul {

			}
			li {
				&:before {
					content: "-";
					margin-right: 5px;
				}
			}
		}
		&__thumb {
			width: 156px;
			height: 156px;
			border-radius: 100px;
			overflow: hidden;
			margin-bottom: 26px;
			img {
				height: 100%;
				width: 100%;
				object-fit: cover;
			}
		}
		&__organization {
			font-size: 14px;
			color: #80929D;
		}
		&__city {
			display: flex;
			align-items: center;
			margin-bottom: 12px;
			svg {
				fill: #0AA5DC;
				margin-right: 7px;
				flex-shrink: 0;
				width: 9px;
				height: 12px;
				display: block;
				position: relative;
				top: -1px;
			}
			span {
				color: #0AA5DC;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
		&__shedule {
			margin-bottom: 20px;
		}
		&__price {
			font-size: 20px;
			line-height: 23px;
			margin-bottom: 45px;
		}
		&__information {
			font-size: 14px;
			line-height: 16px;
			margin-bottom: 36px;
			&-title {
				color: #80929D;
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
		&__to-top {
			display: flex;
			justify-content: flex-end;
			padding-top: 60px;
			padding-bottom: 60px;
		}
	}
</style>
