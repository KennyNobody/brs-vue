<template>
	<div class="to-top-block">
		<appToTop></appToTop>
	</div>
</template>

<script>
	import appToTop from '@/components/blocks/To-top.vue'
	export default {
		name: 'appToTopBlock',
		props: {},
		components: {
			appToTop
		}
	}
</script>

<style lang="scss">
	.to-top-block {
		padding-top: 60px;
		padding-bottom: 60px;
		display: flex;
		justify-content: flex-end;
	}
</style>
