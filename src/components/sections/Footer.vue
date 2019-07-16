<template>
    <footer class="footer">
        <div class="footer__topline">
            <div class="container footer__container">
                <div class="footer__column footer__column--4">
                    <router-link class="footer__logo" to="/">
                        <img src="img/logo.png" alt="Логотип БРС">
                    </router-link>
                    <div class="footer__phone-links">
                        <a href="tel:+74012595596" class="footer__phone">(4012) 595-596 </a>,
                        <a href="tel:+74012466422" class="footer__phone">(4012) 466-422</a>
                    </div>
                    <p class="footer__adress">
                        236016, г. Калининград, ул. А. Невского, 14
                    </p>
                    <p class="footer__time">
                        Пн-Чт с 9.00 до 18.00<br> Пт с 9.00 до 16.45
                    </p>
                    <appSocialLinks></appSocialLinks>
                </div>
                <div class="footer__column footer__column--2">
                    <a href="" class="footer__link">
                        Работодателю
                    </a>
                    <a href="" class="footer__link">
                        Студенту
                    </a>
                    <a href="" class="footer__link">
                        Вакансии
                    </a>
                    <a href="" class="footer__link">
                        Резюме
                    </a>
                    <a href="" class="footer__link">
                        Центр карьеры
                    </a>
                    <a href="" class="footer__link">
                        Новости
                    </a>
                </div>
                <div class="footer__column footer__column--6">
                    <a href="" class="footer__link">
                        Студенческие отряды
                    </a>
                    <a href="" class="footer__link">
                        Проектный офис студенческих инициатив
                    </a>
                    <a href="" class="footer__link">
                        Разрешение на работу для иностранных граждан
                    </a>
                    <a href="" class="footer__link">
                        Полезные ссылки
                    </a>
                    <a href="" class="footer__link">
                        Мониторинг трудоустройства выпускников
                    </a>
                </div>
            </div>
        </div>
        <div class="footer__discript">
            <div class="container">
                © 2019. “Система найма студентов БФУ”. Все права защищены. Разработано <a href="https://diez.io/">#diez technologies </a>
            </div>
        </div>
    </footer>
</template>

<script>
    import appSocialLinks from '@/components/blocks/Social-links.vue'

    export default {
      name: 'appFooter',
      components: {
        appSocialLinks
    },
    props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .footer {
        background-color: $dark;
        padding-top: 20px;
        color: $light;
        font-size: 14px;
        line-height: 21px;
        &__topline {
            border-bottom: 1px solid #80929D;
            padding-bottom: 20px;
        }
        &__container {
            display: flex;
        }
        &__column {
            &--4 {
                width: calc(100% / 12 * 4);
            }
            &--2 {
                width: calc(100% / 12 * 2);
                padding-top: 20px;
            }
            &--6 {
                width: 50%;
                padding-top: 20px;
            }
        }
        &__logo {
            display: block;
            margin-bottom: 14px;
            img {
                width: 245px;
                height: auto;
                display: block;
            }
        }
        &__phone {
            color: $light;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
        &__time {
            margin-bottom: 8px;
        }
        &__adress {
            margin-bottom: 14px;
        }
        &__link {
            color: $light;
            text-decoration: none;
            display: block;
            padding-top: 8px;
            padding-bottom: 8px;
            &:hover {
                text-decoration: underline;
            }
        }
        &__discript {
            padding-top: 16px;
            padding-bottom: 16px;
            a {
                color: #ff0000;
                text-decoration: none;
                &:hover {
                    color: $light;
                }
            }
        }
    }
</style>
