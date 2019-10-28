<template>
    <div id="app">
        <div class="layout" v-bind:class="{ 'layout--dark': $route.name === 'none' }">
            <appHeader></appHeader>
            <appIntro></appIntro>
            <router-view></router-view>
            <appFooter></appFooter>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import appHeader from '@/components/sections/Header.vue'
import appIntro from '@/components/sections/Intro.vue'
import appFooter from '@/components/sections/Footer.vue'
// import * as request from './requests'
import axios from 'axios'

export default {
    name: 'home',
    data () {
        return {
            dark: false
        }
    },
    components: {
        appHeader,
        appIntro,
        appFooter
    },
    mounted() {
        // axios.get(request.baseUrl, {})
        // .then((response) => {
        //     console.log(response.data)
        // })
        // .catch(function (error) {
        //     console.log(error)
        // });
        // console.log(request.baseUrl)
    }
}
</script>

<style lang="scss">
@import "styles/common.scss";
@import "styles/reset.scss";

.layout {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    &--dark {
        background-color: $dark;
        color: $light;
        .breadcrumbs__link {
            color: $light;
            &--now {
                color: $yellow;
                &:after {
                    background-color: $yellow;
                }
            }
        }
    }
}
</style>
