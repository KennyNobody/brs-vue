<template>
	<div class="page page--registration">
		<appBreadcrumbs></appBreadcrumbs>
		<section class="registration">
			<div class="container">
				<template v-if="$route.name === 'registration'">
					<router-link class="auth__without-profile--accent" to="/registration/user">
						Зарегистрироваться как соискатель
					</router-link>
					<br>
					<router-link class="auth__without-profile--accent" to="/registration/company">
						Зарегистрироваться как компания
					</router-link>
				</template>
				<template v-if="$route.name === 'registration-user'">
					<appRegUser></appRegUser>
				</template>
				<template v-if="$route.name === 'registration-company'">
					<appRegCompany></appRegCompany>
				</template>
			</div>
		</section>
	</div>
</template>

<script>
	import appBreadcrumbs from '@/components/sections/Breadcrumbs.vue'
	import appRegUser from '@/components/sections/RegUser.vue'
	import appRegCompany from '@/components/sections/RegCompany.vue'

	export default {
		name: 'registration',
		components: {
			appBreadcrumbs,
			appRegUser,
			appRegCompany
		}
	}
</script>

<style lang="scss">
	.registration {
		padding-top: 35px;
	}
</style>
