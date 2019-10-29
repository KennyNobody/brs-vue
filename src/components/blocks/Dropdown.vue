<template>
	<label class="input">
		<p class="input__title">
			{{ name }}
		</p>
		<select class="input__dropdown" v-model="inputData" v-on:change="postInfo">
			<option value disabled selected>-</option>
			<option :key="value.id" v-for="value in values">{{ value }}</option>
		</select>
	</label>
</template>

<script>
	export default {
		name: 'dropdown',
		props: ['name', 'values'],
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
		&__dropdown {
			width: 66%;
			flex-shrink: 0;
			cursor: pointer;
			display: block;
			border: 1px solid #D6E0E6;
			border-radius: 4px;
			height: 40px;
			padding-left: 10px;
			padding-right: 10px;
			outline: none;
			font-size: 16px;
			line-height: 22px;
			&:focus {
				border-color: $yellow;
			}
		}
	}
</style>
