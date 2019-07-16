<template>
    <p class="shedule shedule--nonfull">
        частичная занятость
    </p>
</template>

<script>
    export default {
        name: 'appPartialday',
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
        &--nonfull {
            border-bottom: 2px dashed $yellow;
        }
    }
</style>
