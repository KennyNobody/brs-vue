<template>
	<label class="input input--required">
		<p class="input__title">
			{{ name }}
		</p>
		<div class="input__date-wrap">
			<input type="text" class="input__date" placeholder="день">
			<input type="text" class="input__date" placeholder="месяц">
			<input type="text" class="input__date" placeholder="год">
		</div>
	</label>
</template>

<script>

	export default {
		name: 'dateInput',
		props: ['name'],
		data () {
			return {}
		},
		computed: {},
		methods: {}
	}
</script>

<style lang="scss">
	.input {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 18px;
		&--required {
			.input__title {
				&:after {
					content: '*';
					color: $accent;
				}
			}
		}
		&__title {
			flex-grow: 1;
			min-width: 0px;
		}
		&__date-wrap {
			display: flex;
			justify-content: space-between;
			width: 66%;
			flex-shrink: 0;
		}
		&__date {
			width: calc(100% / 3 - 10px);
			border: 1px solid #D6E0E6;
			border-radius: 4px;
			height: 40px;
			text-align: center;
			outline: none;
			&:focus {
				border-color: $yellow;
			}
		}
	}
</style>
