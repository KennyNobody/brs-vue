<template>
	<div class="page page--single-resume">
		<appBreadcrumbs></appBreadcrumbs>
		<section class="s-resume">
			<div class="container s-resume__container">
				<h2 class="h2 s-resume__title">
					{{ resume.name }} {{ resume.surname }}
				</h2>
				<div class="s-resume__columns">
					<div class="s-resume__column-thumb">
						<div class="s-resume__thumb">
							<img v-bind:src='resume.thumb' v-bind:alt='resume.name + " " + resume.surname'>
						</div>
						<appPhone :phone="resume.phone"></appPhone>
					</div>
					<div class="s-resume__column-content">
						<p class="s-resume__publish">
							Опубликовано:
							<time>
								{{ resume.publish }}
							</time>
						</p>
						<div class="s-resume__location">
							<svg viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg"><path d="M4.43823 0.00250112C2.00127 -0.0796255 0 1.87139 0 4.28979C0 7.03441 2.63389 9.02627 4.11019 11.8908C4.18514 12.0363 4.39451 12.0365 4.46972 11.891C5.80524 9.31351 8.08783 7.58514 8.51084 5.10199C8.94884 2.53242 7.04334 0.0903287 4.43823 0.00250112ZM4.28975 6.53679C3.04878 6.53679 2.04275 5.53074 2.04275 4.28979C2.04275 3.04885 3.0488 2.04279 4.28975 2.04279C5.53071 2.04279 6.53677 3.04885 6.53677 4.28979C6.53677 5.53074 5.53071 6.53679 4.28975 6.53679Z"></path></svg>
							<p class="s-resume__location-text">
								{{ resume.city }}
							</p>
						</div>
						<div class="s-resume__shedule-block">
							<appFullday v-if='resume.shedule === "Полная занятость"'></appFullday>
							<appPartialday v-else-if='resume.shedule === "Частичная занятость"'></appPartialday>
							<appProbation v-else></appProbation>
						</div>
						<p class="s-resume__line">
							<strong>Образование:</strong> {{ resume.education }}
						</p>
						<p class="s-resume__line">
							<strong>Пол:</strong> {{ resume.sex }}
						</p>
						<p class="s-resume__line">
							<strong>Возраст:</strong> 21 ({{ resume.date }})
						</p>
						<p class="s-resume__line">
							<strong>Гражданство:</strong> {{ resume.country }}
						</p>
						<p class="s-resume__line">
							<strong>Опыт:</strong> нет
						</p>
						<p class="s-resume__line">
							<strong>Языки:</strong> {{ resume.languages }}
						</p>
						<div class="s-resume__doc-block">
							<p class="s-resume__doc-text">
								Прикрепленный документ:
							</p>
							<appDoc :file="resume.file"></appDoc>
						</div>
					</div>
				</div>
				<p class="s-resume__info">
					<strong>О себе:</strong>
					{{ resume.info }}
				</p>
				<div class="s-resume__email">
					<strong>email: </strong>
					<a v-bind:href="'mailto:'+ resume.email" class="s-resume__email-link">{{ resume.email }}</a>
				</div>
				<div class="s-resume__other">
					<h3 class="s-resume__other-title">
						Другие резюме
					</h3>
					<div class="s-resume__other-articles">
						<appFrontResume
						v-for='resume in resumes'
						:key='resume.id'
						:id='resume.id'
						:title='resume.title'
						:shedule='resume.shedule'
						:salary='resume.salary'
						:surname='resume.surname'
						:name='resume.name'
						:city='resume.city'
						:info='resume.info'
						:thumb='resume.thumb'
						:publish='resume.publish'
						></appFrontResume>
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
	import appDoc from '@/components/blocks/Doc.vue'
	import appFrontResume from '@/components/blocks/Front-resume.vue'
	import appToTopBlock from '@/components/blocks/To-top-block.vue'
	export default {
		name: 'jobs',
		props: ['id'],
		computed: {
			resume () {
				let id = this.id
				return this.$store.getters.resumeById(id)
			},
			resumes () {
				return this.$store.getters.resumes
			}
		},
		components: {
			appBreadcrumbs,
			appFullday,
			appPartialday,
			appProbation,
			appDoc,
			appPhone,
			appFrontResume,
			appToTopBlock
		}
	}
</script>

<style lang="scss">
	.s-resume {
		padding-top: 35px;
		&__title {
			margin-bottom: 36px;
		}
		&__columns {
			display: flex;
			justify-content: space-between;
			margin-bottom: 39px;
		}
		&__column-thumb {
			width: calc(100% / 12 * 3);
		}
		&__column-content {
			min-width: 0px;
			flex-grow: 1;
			padding-left: 20px;
		}
		&__thumb {
			width: 100%;
			max-width: 260px;
			height: 245px;
			margin-bottom: 10px;
			img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		&__publish {
			font-size: 14px;
			line-height: 16px;
			color: #80929D;
			margin-bottom: 15px;
		}
		&__location {
			color: $accent;
			display: flex;
			align-items: center;
			font-size: 14px;
			line-height: 16px;
			margin-bottom: 12px;
			svg {
				height: 11px;
				width: 8px;
				fill: $accent;
				margin-right: 7px;
				display: block;
				position: relative;
				top: -2px;
			}
		}
		&__shedule-block {
			margin-bottom: 15px;
		}
		&__line {
			margin-bottom: 5px;
			font-size: 16px;
			line-height: 19px;
			strong {
				color: #80929D;
			}
		}
		&__doc-block {
			display: flex;
			align-items: center;
			margin-top: 20px;
		}
		&__doc-text {
			font-size: 16px;
			line-height: 19px;
			color: #80929D;
			margin-right: 16px;
		}
		&__info {
			font-size: 16px;
			line-height: 19px;
			margin-bottom: 24px;
			strong {
				color: #80929D;
			}
		}
		&__email {
			font-size: 16px;
			line-height: 19px;
			margin-bottom: 30px;
			a {
				color: #3A5CB4;
				text-decoration: underline;
				&:hover {
					text-decoration: none;
				}
			}
			strong {
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
			justify-content: space-between;
			flex-wrap: wrap;
		}
	}
</style>
