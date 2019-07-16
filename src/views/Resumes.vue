<template>
	<div class="page page--jobs">
		<appBreadcrumbs></appBreadcrumbs>
		<appCatalog typeCatalog="резюме"></appCatalog>
	</div>
</template>

<script>
	import appBreadcrumbs from '@/components/sections/Breadcrumbs.vue'
	import appCatalog from '@/components/sections/Catalog.vue'
	export default {
		name: 'jobs',
		props: {},
		components: {
			appBreadcrumbs,
			appCatalog
		}
	}
</script>

<style lang="scss"></style>
