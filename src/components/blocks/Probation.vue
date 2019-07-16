<template>
    <p class="shedule shedule--partial">
        стажировка
    </p>
</template>

<script>
    export default {
        name: 'appProbation',
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
        &--partial {
            border-bottom: 2px dashed #D6E0E6;
            &:after {
                position: absolute;
                top: 100%;
                width: 65%;
                height: 2px;
                display: block;
                background-color: $yellow;
                content: "";
            }
        }
    }
</style>
