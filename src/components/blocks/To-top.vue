<template>
    <a href="" class="to-top">
        <svg viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0607 0.939341C12.4749 0.353554 11.5251 0.353554 10.9393 0.939341L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97918 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939341ZM13.5 20L13.5 2L10.5 2L10.5 20L13.5 20Z"/>
        </svg>
        <p class="to-top__text">
            Наверх
        </p>
    </a>
</template>

<script>
    export default {
      name: 'appToTop',
      props: {},
      methods: {}
  }
</script>

<style lang="scss">
    .to-top {
        display: block;
        text-align: center;
        text-decoration: none;
        svg {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 24px;
            height: 20px;
            fill: #D6E0E6;
            margin-bottom: 9px;
        }
        &__text {
            color: #D6E0E6;
            font-weight: bold;
            transition: 0.3s all;
        }
        &:hover {
            .to-top__text {
                color: $accent;
            }
            svg {
                fill: $accent;
            }
        }
    }
</style>
