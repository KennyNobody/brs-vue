<template>
    <p class="shedule shedule--full">
        полная занятость
    </p>
</template>

<script>
    export default {
        name: 'appFullday',
        props: {},
        methods: {}
    }
</script>

<style lang="scss">
    .shedule {
        width: fit-content;
        font-size: 14px;
        line-height: 16px;
        position: relative;
        margin-bottom: 10px;
        &--full {
            border-bottom: 2px solid $yellow;
        }
    }
</style>
