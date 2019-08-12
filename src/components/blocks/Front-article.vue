<template>
    <article class="front-article">
        <div class="front-article__thumb">
            <img v-bind:src="thumb" alt="Превью новости">
        </div>
        <div class="front-article__content">
            <div class="front-article__info">
                <time class="front-article__date">
                    {{ publish }}
                </time>
                <h3 class="front-article__title" v-line-clamp='4'>
                    {{ title }}
                </h3>
            </div>
            <router-link class="front-article__btn" :to='"/news/" + id'>
                <span>Подробнее</span>
                <svg viewBox="0 0 7 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" />
                </svg>
            </router-link>
        </div>
    </article>
</template>

<script>
    import Vue from 'vue'
    import lineClamp from 'vue-line-clamp'

    Vue.use(lineClamp)

    export default {
        name: 'appFrontArticle',
        props: ['title', 'publish', 'thumb', 'id']
    }
</script>

<style lang="scss">
    .front-article {
        box-shadow: 1px 1px 14px #D6E0E6;
        border-radius: 4px;
        background-color: $light;
        margin-bottom: 20px;
        width: calc(50% - 10px);
        display: flex;
        justify-content: space-between;
        height: 245px;
        &__thumb {
            flex-shrink: 0;
            height: 100%;
            width: 245px;
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
        &__content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        &__info {
            padding: 40px 20px 40px 20px;
            flex-grow: 1;
        }
        &__date {
            color: $accent;
            font-style: italic;
            font-size: 14px;
            margin-bottom: 11px;
            display: block;
        }
        &__title {
            font-weight: 500;
            font-size: 20px;
            line-height: 23px;
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
            border-top: 1px solid #D6E0E6;
            border-left: 1px solid #D6E0E6;
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
