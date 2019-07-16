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
                            <p class="header__text">
                                Пн-Чт с 9.00 до 18.00
                            </p>
                            <p class="header__text">
                                Пт с 9.00 до 16.45
                            </p>
                        </div>
                        <div class="header__column">
                            <div class="header__links">
                                <a href="tel:+74012595596" class="header__phone">(4012) 595-596 </a>,
                                <a href="tel:+74012466422" class="header__phone">(4012) 466-422</a>
                            </div>
                            <p class="header__text">
                                236016, г. Калининград, ул. А. Невского, 14
                            </p>
                        </div>
                    </div>
                    <router-link class="header__sign" to="/sign-in">
                        Войти
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'appHeader',
        props: {},
        components: {}
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
        }
        &__logo {
            display: block;
            img {
                width: 245px;
                height: auto;
            }
        }
        &__topline-info {
            display: flex;
            flex-grow: 1;
            justify-content: flex-end;
            padding-left: 48px;
            padding-right: 48px;
            align-items: flex-end;
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
