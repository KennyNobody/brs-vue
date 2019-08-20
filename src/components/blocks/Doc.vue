<template>
    <a :href="file" class="doc" target="_blank">
        <svg viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4462 8.18825L9.96924 0.564668C9.55389 0.282334 9 0 8.44619 0H3.46153C1.52313 0 0 1.55292 0 3.52942V20.4706C0 22.4471 1.52305 24 3.46153 24H14.5385C16.4769 24 18 22.4471 18 20.4706V9.74117C18 9.1765 17.8615 8.61175 17.4462 8.18825ZM9.69234 2.25883L15.7846 8.47058H11.7693C10.6616 8.47058 9.69234 7.48233 9.69234 6.35292V2.25883ZM14.5385 22.5882H3.46153C2.35384 22.5882 1.3846 21.6 1.3846 20.4706V3.52942C1.3846 2.4 2.35384 1.41175 3.46153 1.41175H8.30766V6.35292C8.30766 8.32942 9.83071 9.88233 11.7692 9.88233H16.6153V20.4706C16.6154 21.6 15.6462 22.5882 14.5385 22.5882Z"/>
        </svg>
        <p class="doc__title">
            Пельмешкина_Резюме.doc
        </p>
    </a>
</template>

<script>
    export default {
      name: 'appDoc',
      props: ['file'],
      methods: {}
  }
</script>

<style lang="scss">
    .doc {
        height: 40px;
        border: 1px solid #D6E0E6;
        box-sizing: border-box;
        border-radius: 6px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: $dark;
        font-size: 14px;
        line-height: 16px;
        width: 246px;
        padding-right: 10px;
        padding-left: 10px;
        text-decoration: none;
        cursor: pointer;
        svg {
            width: 18px;
            height: 24px;
            display: block;
            fill: #D6E0E6;
        }
        &:hover {
            opacity: 0.8;
        }
    }
</style>
