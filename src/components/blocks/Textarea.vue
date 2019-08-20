<template>
	<label class="textarea textarea--required">
		<p class="textarea__title">
			{{ name }}
		</p>
		<textarea type="text" class="textarea__input" v-model="inputTextarea" v-on:input="postInfo" v-bind:placeholder="placeholder"></textarea>
	</label>
</template>

<script>

	export default {
		name: 'textareaInput',
		props: ['name', 'placeholder'],
		data () {
			return {
				inputTextarea: null
			}
		},
		computed: {},
		methods: {
			postInfo: function () {
				this.$emit('inputChanged', this.inputTextarea)
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
			padding: 10px;
			outline: none;
			height: 206px;
			resize: none;
			&:focus {
				border-color: $yellow;
			}
		}
	}
</style>
