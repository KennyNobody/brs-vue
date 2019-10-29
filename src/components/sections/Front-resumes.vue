<template>
    <section class="front-resumes">
        <div class="container front-resumes__container">
            <h2 class="front-resumes__h2 h2">
                Новые <router-link class="h2--link" to="/resumes/">резюме</router-link>
            </h2>
            <div class='front-resumes__articles'>
                <appFrontResume
                v-for='resume in resumes'
                :key='resume.id'
                :id='resume.id'
                :title='resume.title'
                :theme='resume.theme'
                :shedule='resume.shedule'
                :experience='resume.experience'
                :salary='resume.salary'
                :surname='resume.surname'
                :name='resume.name'
                :sex='resume.sex'
                :city='resume.city'
                :education='resume.education'
                :info='resume.info'
                :phone='resume.phone'
                :email='resume.email'
                :thumb='resume.thumb'
                :file='resume.file'
                :publish='resume.publish'
                ></appFrontResume>
                <div class="front-resume--clear"></div>
                <div class="front-resume--clear"></div>
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
