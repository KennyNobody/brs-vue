<template>
    <footer class="footer">
        <div class="footer__topline">
            <div class="container footer__container">
                <div class="footer__column footer__column--4">
                    <router-link class="footer__logo" to="/">
                        <img src="img/logo.png" alt="Логотип БРС">
                    </router-link>
                    <div class="footer__phone-links">

                        <a v-if="phone1" v-bind:href="phone1link" class="footer__phone">{{ phone1 }}</a>
                        <template v-if="phone2">
                            ,
                        </template>
                        <a v-if="phone2" v-bind:href="phone2link" class="footer__phone">{{ phone2 }}</a>
                    </div>
                    <p class="footer__adress">
                        {{ adress }}
                    </p>
                    <p class="footer__time">
                        {{ sheduleTop }}<br>{{ sheduleBottom }}
                    </p>
                    <appSocialLinks></appSocialLinks>
                </div>
                <div class="footer__column footer__column--2">
                    <router-link v-for="link of footerLeftColumns" :key="link.title" class="footer__link" :to="link.url">
                        {{link.title}}
                    </router-link>
                </div>
                <div class="footer__column footer__column--6">
                    <router-link v-for="link of footerRightColumns" :key="link.title" class="footer__link" :to="link.url">
                        {{link.title}}
                    </router-link>
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
    computed: {
        adress () {
            return this.$store.getters.content.info.adress
        },
        footerLeftColumns () {
            return this.$store.getters.content.links.footerLeftColumns
        },
        footerRightColumns () {
            return this.$store.getters.content.links.footerRightColumns
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
        }
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
            @include r(1200) {
                display: block;
                text-align: center;
            }
        }
        &__column {
            &--4 {
                width: calc(100% / 12 * 4);
                @include r(1200) {
                    width: 100%;
                }
            }
            &--2 {
                width: calc(100% / 12 * 2);
                padding-top: 20px;
                @include r(1200) {
                    width: 100%;
                }
                @include r(700) {
                    display: none;
                }
            }
            &--6 {
                width: 50%;
                padding-top: 20px;
                @include r(1200) {
                    width: 100%;
                    padding-top: 0px;
                }
                @include r(700) {
                    display: none;
                }
            }
        }
        &__logo {
            display: block;
            margin-bottom: 14px;
            img {
                width: 245px;
                height: auto;
                display: block;
                @include r(1200) {
                    margin-left: auto;
                    margin-right: auto;
                }
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
            .container {
                @include r(1200) {
                    text-align: center;
                }
            }
        }
    }
</style>
