<template>
	<label class="textarea textarea--required">
		<p class="textarea__title">
			{{ name }}
		</p>
		<textarea type="text" class="textarea__input" v-model="inputData" v-on:input="postInfo"></textarea>
	</label>
</template>

<script>

	export default {
		name: 'textareaInput',
		props: ['name'],
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
	.textarea {
		display: flex;
		justify-content: space-between;
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
			height: 206px;
			resize: none;
			&:focus {
				border-color: $yellow;
			}
		}
	}
</style>
