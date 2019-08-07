<template>
    <section class="front-resumes">
        <div class="container front-resumes__container">
            <h2 class="front-resumes__h2 h2">
                Новые <router-link class="h2--link" to="/resumes/">резюме</router-link>
            </h2>
            <div class='front-resumes__articles'>
                <appFrontResume v-for='resume in resumes' :key='resume.id' :name='resume.name' :surname='resume.surname' :publish='resume.publish' :thumb='resume.thumb' :id='resume.id' :city='resume.city' :shedule='resume.shedule' :content='resume.content'></appFrontResume>
            </div>
        </div>
    </section>
</template>

<script>
    import appFrontResume from '@/components/blocks/Front-resume.vue'
    export default {
        name: 'appFrontResumes',
        components: {
            appFrontResume
        },
        computed: {
            resumes () {
                return this.$store.getters.resumes
            }
        },
        props: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .front-resumes {
        padding-top: 70px;
        padding-bottom: 70px;
        background-color: #F1F5F6;
        &__articles {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }
</style>
