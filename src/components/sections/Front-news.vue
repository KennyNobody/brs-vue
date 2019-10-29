<template>
    <section class="front-news">
        <div class="container front-news__container">
            <h2 class="front-news__h2 h2">
                Интересное <router-link class="h2--link" to="/news/">о работе</router-link>
            </h2>
            <div class="front-news__articles">
                <appFrontArticle
                v-for="post in posts"
                :key="post.id" :title="post.title"
                :publish="post.publish"
                :thumb="post.thumb"
                :id="post.id"
                ></appFrontArticle>
            </div>
            <appToTopBlock></appToTopBlock>
        </div>
    </section>
</template>

<script>
    import appFrontArticle from '@/components/blocks/Front-article.vue'
    import appToTopBlock from '@/components/blocks/To-top-block.vue'
    export default {
        name: 'appFrontNews',
        components: {
            appFrontArticle,
            appToTopBlock
        },
        computed: {
            posts () {
                return this.$store.getters.posts
            }
        },
        props: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .front-news {
        padding-top: 70px;
        &__articles {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }
</style>
