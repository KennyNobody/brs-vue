<template>
    <div class="phone">
        <p class="phone__title">
            Показать телефон
        </p>
        <p class="phone__number">
            8 952 ХХХ-ХХ-ХХ
        </p>
    </div>
</template>

<script>
    export default {
      name: 'appPhone',
      props: {},
      methods: {}
  }
</script>

<style lang="scss">
    .phone {
        background-color: $accent;
        cursor: pointer;
        width: 100%;
        padding-top: 9px;
        padding-bottom: 8px;
        border-radius: 4px;
        color: $light;
        text-align: center;
        transition: 0.3s all;
        &__title {
            margin-bottom: 5px;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;
        }
        &__number {
            font-size: 16px;
            line-height: 19px;
        }
        &:hover {
            opacity: 0.8;
        }
    }
</style>
