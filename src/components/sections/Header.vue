<template>
    <header class="header">
        <div class="header__wrapper">
            <div class="container header__container">
                <div class="header__topline">
                    <router-link class="header__logo" to="/">
                        <img src="img/logo.png" alt="Логотип БРС">
                    </router-link>
                    <div class="header__topline-info">
                        <div class="header__column">
                            <p v-if="sheduleTop" class="header__text">
                                {{ sheduleTop }}
                            </p>
                            <p v-if="sheduleBottom" class="header__text">
                                {{ sheduleBottom }}
                            </p>
                        </div>
                        <div class="header__column">
                            <div class="header__links">
                                <a v-if="phone1" v-bind:href="phone1link" class="header__phone">{{ phone1 }}</a>
                                <template v-if="phone2">
                                    ,
                                </template>
                                <a v-if="phone2" v-bind:href="phone2link" class="header__phone">{{ phone2 }}</a>
                            </div>
                            <p class="header__text">
                                {{ adress }}
                            </p>
                        </div>
                    </div>
                    <div class="header__user">
                        <div class="header__user" v-if='isUserLogIn'>
                            <div class="header__info" v-bind:class="{'header__info--open' : openUserInfo }">
                                <div v-on:click="openUserInfo = !openUserInfo" class="header__info-link header__info-link--left">
                                    <span>{{ this.name }}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 8" fill="none">
                                        <path d="M4.76995e-08 4L6 7.4641L6 0.535898L4.76995e-08 4Z" fill="white"/>
                                    </svg>
                                </div>
                                <router-link class="header__info-link header__info-link--center" to="/profile">
                                    Перейти в личный кабинет
                                </router-link>
                                <div v-on:click="onLogout" class="header__info-link header__info-link--right">Выйти</div>
                            </div>
                        </div>
                        <router-link class="header__sign" to="/sign-in" v-else>
                            Войти
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'appHeader',
        data () {
            return {
                openUserInfo: false
            }
        },
        props: {},
        computed: {
            name () {
                return this.$store.getters.localUser.name
            },
            adress () {
                return this.$store.getters.content.info.adress
            },
            sheduleTop () {
                return this.$store.getters.content.info.sheduleTop
            },
            sheduleBottom () {
                return this.$store.getters.content.info.sheduleBottom
            },
            phone1 () {
                return this.$store.getters.content.info.phone1
            },
            phone1link () {
                return this.$store.getters.content.info.phone1link
            },
            phone2 () {
                return this.$store.getters.content.info.phone2
            },
            phone2link () {
                return this.$store.getters.content.info.phone2link
            },
            isUserLogIn () {
                return this.$store.getters.isUserLogIn
            }
        },
        components: {},
        methods: {
            onLogout () {
                this.$store.dispatch('logoutUser')
            }
        }
    }
</script>

<style lang="scss">
    .header {
        color: #80929D;
        &__wrapper {
            background-color: $dark;
            max-width: 1366px;
            margin-left: auto;
            margin-right: auto;
        }
        &__topline {
            padding-top: 9px;
            padding-bottom: 9px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            @include r(1200) {
                flex-wrap: wrap;
                justify-content: space-between;
            }
        }
        &__logo {
            display: block;
            @include r(1200) {
                order: -1;
            }
            img {
                width: 245px;
                height: auto;
                @include r(700) {
                    width: 170px;
                }
            }
        }
        &__topline-info {
            display: flex;
            flex-grow: 1;
            justify-content: flex-end;
            padding-left: 48px;
            padding-right: 48px;
            align-items: flex-end;
            @include r(1200) {
                width: 100%;
                display: block;
                padding-left: 0px;
                padding-right: 0px;
                padding-top: 15px;
            }
        }
        &__column {
            margin-right: 57px;
            &:last-child {
                margin-right: 0px;
            }
        }
        &__links {
            font-weight: 500;
            font-size: 16px;
            line-height: 23px;
            color: $light;
            @include r(1200) {
                margin-bottom: 3px;
            }
        }
        &__phone {
            color: $light;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
        &__text {
            font-size: 14px;
            line-height: 20px;
            @include r(1200) {
                margin-bottom: 3px;
            }
        }
        &__user {
            position: relative;
            width: 102px;
            height: 40px;
            box-sizing: border-box;
            @include r(1200) {
                order: -1;
            }
        }
        &__info {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            // width: 502px;
            display: flex;
            justify-content: space-between;
            background-color: $dark;
            &--open {
                .header__info-link--left {
                    border-top-right-radius: 0px;
                    border-bottom-right-radius: 0px;
                    svg {
                        transform: rotate(180deg);
                    }
                }
                .header__info-link--center {
                    max-width: 292px;
                    opacity: 1;
                }
                .header__info-link--right {
                    max-width: 93px;
                    opacity: 1;
                }
            }
        }
        &__info-link {
            border: 1px solid $accent;
            display: block;
            height: 100%;
            color: $light;
            flex-shrink: 0;
            min-width: 1px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            line-height: 14px;
            text-decoration: none;
            overflow: hidden;
            cursor: pointer;
            transition: 0.3s all;
            white-space: nowrap;
            &--left {
                justify-content: space-around;
                flex-grow: 1;
                flex-shrink: 1;
                min-width: 0px;
                border-radius: 4px;
                width: 93px;
                padding-left: 8px;
                padding-right: 8px;
                span {
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
            &--center {
                width: 292px;
                max-width: 0px;
                border-left: 0px;
                opacity: 0;
            }
            &--right {
                flex-grow: 1;
                flex-shrink: 1;
                min-width: 0px;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
                width: 93px;
                max-width: 0px;
                border-left: 0px;
                opacity: 0;
            }
            &:hover {
                background-color: $accent;
            }
            svg {
                fill: $light;
                height: 8px;
                width: 8px;
                transition: 0.3s all;
                flex-shrink: 0;
            }
        }
        &__sign {
            font-size: 16px;
            line-height: 19px;
            border: 1px solid $accent;
            box-sizing: border-box;
            border-radius: 4px;
            width: 102px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: $light;
            &:hover {
                background-color: $accent;
                color: $light;
            }
        }
        &__intro {
            background-image: url(/img/header__intro.jpg);
        }
    }
</style>
