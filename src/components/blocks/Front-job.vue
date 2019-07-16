<template>
	<article class="front-job">
		<div class="front-job__content">
			<div class="front-job__avatar">
				<img src="http://placehold.it/1000x600" alt="Иван Иванов">
			</div>
			<p class="front-job__name" v-line-clamp='2'>
				ООО Центр дошкольного развития
			</p>
			<div class="front-job__location">
				<svg viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg">
					<path d="M4.43823 0.00250112C2.00127 -0.0796255 0 1.87139 0 4.28979C0 7.03441 2.63389 9.02627 4.11019 11.8908C4.18514 12.0363 4.39451 12.0365 4.46972 11.891C5.80524 9.31351 8.08783 7.58514 8.51084 5.10199C8.94884 2.53242 7.04334 0.0903287 4.43823 0.00250112ZM4.28975 6.53679C3.04878 6.53679 2.04275 5.53074 2.04275 4.28979C2.04275 3.04885 3.0488 2.04279 4.28975 2.04279C5.53071 2.04279 6.53677 3.04885 6.53677 4.28979C6.53677 5.53074 5.53071 6.53679 4.28975 6.53679Z"/>
				</svg>
				<p class="front-job__location-text">
					Калиниград
				</p>
			</div>
			<!-- <p class="front-job__type front-job__type--nonfull">
                стажировка
            </p>
            <p class="front-job__type front-job__type--partial">
                частичная занятость
            </p> -->
            <p class="front-job__date">
                9 апреля
            </p>
            <p class="front-job__title" v-line-clamp='2'>
                Помощник повара
            </p>
            <p class="front-job__type front-job__type--full">
                полная занятость
            </p>
        </div>
        <div class="front-job__footer">
            <a href="#" class="front-job__btn front-job__btn--price">
                от&nbsp;<span>18000</span>&nbsp;р
            </a>
            <a href="" class="front-job__btn front-job__btn--more">
                <span>Подробнее</span>
                <svg viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" />
                </svg>
            </a>
        </div>
    </article>
</template>

<script>
	import Vue from 'vue'
	import lineClamp from 'vue-line-clamp'

	Vue.use(lineClamp)

	export default {
		name: 'appFrontJob',
		props: {}
	}
</script>

<style lang="scss">
    .front-job {
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
        &__content {
            padding-top: 11px;
            padding-right: 8px;
            padding-left: 8px;
            flex-grow: 1;
        }
        &__name {
            margin-bottom: 1px;
            word-break: break-word !important;
            font-size: 14px;
            line-height: 16px;
            color: #80929D;
        }
        &__location {
            display: flex;
            align-items: center;
            font-size: 14px;
            line-height: 16px;
            color: $accent;
            margin-bottom: 18px;
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
            margin-bottom: 5px;
        }
        &__avatar {
            width: 60px;
            height: 60px;
            border-radius: 60px;
            overflow: hidden;
            flex-shrink: 0;
            float: left;
            margin-right: 10px;
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
        &__date {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            color: #80929D;
            margin-bottom: 2px;
        }
        &__discript {
            font-size: 14px;
            line-height: 16px;
            color: #80929D;
            word-break: break-word !important;
        }
        &__title {
            font-size: 20px;
            line-height: 19px;
            color: #2E2E2E;
            margin-bottom: 20px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &__footer {
            display: flex;
        }
        &__btn {
            height: 44px;
            flex-shrink: 0;
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
            &--price {
                flex-grow: 1;
                border-right: 1px solid #D6E0E6;
                font-size: 16px;
                line-height: 19px;
                span {

                }
            }
            &--more {
                width: 139px;
            }
        }
    }
</style>
