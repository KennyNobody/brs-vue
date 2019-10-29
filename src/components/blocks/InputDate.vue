<template>
	<label class="input input--required">
		<p class="input__title">
			{{ name }}
		</p>
		<div class="input__date-wrap">
			<input type="number" class="input__date" v-model="birthDay" v-on:input="postInfo" v-bind:placeholder="placeholders.placeholderDay">
			<input type="number" class="input__date" v-model="birthMounth" v-on:input="postInfo" v-bind:placeholder="placeholders.placeholderMounth">
			<input type="number" class="input__date" v-model="birthYear" v-on:input="postInfo" v-bind:placeholder="placeholders.placeholderYear">
		</div>
	</label>
</template>

<script>

	export default {
		name: 'dateInput',
		props: ['name', 'placeholders'],
		data () {
			return {
				birthDay: null,
				birthMounth: null,
				birthYear: null
			}
		},
		computed: {},
		methods: {
			postInfo: function () {
				this.$emit('inputDayChanged', this.birthDay)
				this.$emit('inputMounthChanged', this.birthMounth)
				this.$emit('inputYearChanged', this.birthYear)
			}
		}
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
