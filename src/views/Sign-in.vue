<template>
	<div class="page page--sign-in">
		<appAuth></appAuth>
	</div>
</template>

<script>
	import appAuth from '@/components/sections/Auth.vue'

	export default {
		name: 'sign-in',
		components: {
			appAuth
		}
	}
</script>

<style lang="scss"></style>
