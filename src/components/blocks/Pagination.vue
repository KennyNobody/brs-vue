<template>
    <div class="pagination">
        <a href="" class="pagination__arrow pagination__arrow--disabled pagination__arrow--prev">
            Назад
        </a>
        <a href="" class="pagination__link pagination__link--now">
            1
        </a>
        <a href="" class="pagination__link">
            2
        </a>
        <a href="" class="pagination__link">
            3
        </a>
        <a href="" class="pagination__link">
            4
        </a>
        <a href="" class="pagination__link">
            5
        </a>
        <a href="" class="pagination__arrow pagination__arrow--next">
            Вперед
        </a>
    </div>
</template>

<script>
    export default {
        name: 'appPagination',
        props: {}
    }
</script>

<style lang="scss">
    .pagination {
        display: flex;
        align-items: center;
        &__arrow {
            display: block;
            text-decoration: none;
            color: #80929D;
            padding-bottom: 7px;
            border-bottom: 1px solid #D6E0E6;
            &:hover {
                color: $accent;
                border-color: $accent;
            }
            &--prev {
                margin-right: 10px;
            }
            &--next {
                margin-left: 10px;
            }
            &--disabled {
                pointer-events: none;
            }
        }
        &__link {
            display: block;
            padding-bottom: 7px;
            text-decoration: none;
            padding-left: 8px;
            padding-right: 8px;
            color: #80929D;
            border-bottom: 1px solid #D6E0E6;
            &:hover {
                color: $accent;
                border-color: $accent;
            }
            &--now {
                color: $accent;
                border-color: $accent;
            }
        }
    }
</style>
