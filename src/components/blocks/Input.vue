<template>
	<label class="input input--required">
		<p class="input__title">
			{{ name }}
		</p>
		<input type="text" class="input__input" v-model="inputData" v-on:input="postInfo" v-bind:placeholder="placeholder">
	</label>
</template>

<script>
	export default {
		name: 'textInput',
		props: ['name', 'placeholder'],
		data () {
			return {
				inputData: null
			}
		},
		computed: {},
		methods: {
			postInfo: function () {
				this.$emit('inputChanged', this.inputData)
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
		&__input {
			width: 66%;
			flex-shrink: 0;
			display: block;
			border: 1px solid #D6E0E6;
			border-radius: 4px;
			height: 40px;
			padding-left: 10px;
			padding-right: 10px;
			outline: none;
			&:focus {
				border-color: $yellow;
			}
		}
	}
</style>
