<template>
	<article class="front-resume">
		<div class="front-resume__content">
			<div class="front-resume__avatar">
				<img v-bind:src="thumb" v-bind:alt='name + " " + surname'>
			</div>
			<p class="front-resume__title" v-line-clamp='2'>
				{{ name }} <br> {{ surname }}
			</p>
			<div class="front-resume__location">
				<svg viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
					<path d="M4.43823 0.00250112C2.00127 -0.0796255 0 1.87139 0 4.28979C0 7.03441 2.63389 9.02627 4.11019 11.8908C4.18514 12.0363 4.39451 12.0365 4.46972 11.891C5.80524 9.31351 8.08783 7.58514 8.51084 5.10199C8.94884 2.53242 7.04334 0.0903287 4.43823 0.00250112ZM4.28975 6.53679C3.04878 6.53679 2.04275 5.53074 2.04275 4.28979C2.04275 3.04885 3.0488 2.04279 4.28975 2.04279C5.53071 2.04279 6.53677 3.04885 6.53677 4.28979C6.53677 5.53074 5.53071 6.53679 4.28975 6.53679Z"/>
				</svg>
				<p class="front-resume__location-text">
					{{ city }}
				</p>
			</div>
			<appFullday v-if='shedule === "Полная занятость"'></appFullday>
			<appPartialday v-else-if='shedule === "Частичная занятость"'></appPartialday>
			<appProbation v-else></appProbation>
			<p class="front-resume__discript" v-line-clamp='2'>
				{{ info }}
			</p>
		</div>
		<router-link class="front-resume__btn" :to='"/resumes/" + id'>
			<span>Подробнее</span>
			<svg viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 1L5 5L1 9" />
			</svg>
		</router-link>
	</article>
</template>

<script>
	import Vue from 'vue'
	import lineClamp from 'vue-line-clamp'
	import appFullday from '@/components/blocks/Full-day.vue'
	import appPartialday from '@/components/blocks/Partial-day.vue'
	import appProbation from '@/components/blocks/Probation.vue'

	Vue.use(lineClamp)

	export default {
		name: 'appFrontResume',
		components: {
			appFullday,
			appPartialday,
			appProbation
		},
		props: ['name', 'surname', 'publish', 'thumb', 'city', 'info', 'id', 'shedule']
	}
</script>

<style lang="scss">
	.front-resume {
		width: calc(100% / 4 - 15px);
		min-width: 245px;
		text-align: left;
		border: 1px solid #D6E0E6;
		border-radius: 4px;
		margin-bottom: 20px;
		background-color: $light;
		height: 216px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		&--clear {
			width: calc(100% / 4 - 15px);
			min-width: 245px;
		}
		&__content {
			padding-top: 11px;
			padding-right: 8px;
			padding-left: 8px;
			flex-grow: 1;
		}
		&__title {
			font-size: 20px;
			line-height: 23px;
			margin-bottom: 11px;
			word-break: break-word !important;
			padding-top: 7px;
		}
		&__location {
			display: flex;
			align-items: center;
			font-size: 14px;
			line-height: 16px;
			color: $accent;
			margin-bottom: 8px;
			svg {
				fill: $accent;
				display: block;
				margin-right: 7px;
				flex-shrink: 0;
				width: 9px;
				height: 12px;
				position: relative;
				top: -2px;
				fill: $accent;
			}
		}
		&__location-text {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		&__avatar {
			width: 60px;
			height: 60px;
			border-radius: 60px;
			overflow: hidden;
			flex-shrink: 0;
			float: right;
			margin-left: 10px;
			img {
				height: 100%;
				width: 100%;
				object-fit: cover;
			}
		}
		&__type {
			width: fit-content;
			font-size: 14px;
			line-height: 16px;
			position: relative;
			margin-bottom: 10px;
			&--full {
				border-bottom: 2px solid $yellow;
			}
			&--nonfull {
				border-bottom: 2px dashed $yellow;
			}
			&--partial {
				border-bottom: 2px dashed #D6E0E6;
				&:after {
					position: absolute;
					top: 100%;
					width: 65%;
					height: 2px;
					display: block;
					background-color: $yellow;
					content: "";
				}
			}
		}
		&__discript {
			font-size: 14px;
			line-height: 16px;
			color: #80929D;
			word-break: break-word !important;
		}
		&__btn {
			height: 44px;
			flex-shrink: 0;
			padding-left: 20px;
			padding-right: 20px;
			display: flex;
			align-items: center;
			text-decoration: none;
			color: $dark;
			flex-shrink: 0;
			border-top: 1px solid #D6E0E6;
			justify-content: center;
			svg {
				margin-left: 13px;
				stroke: $dark;
				stroke-width: 2px;
				width: 7px;
				height: 10px;
				fill: $light;
				display: block;
			}
			&:hover {
				background-color: $accent;
				color: $light;
				border-color: $accent;
				svg {
					stroke: $light;
					fill: $accent;
				}
			}
		}
	}
</style>
