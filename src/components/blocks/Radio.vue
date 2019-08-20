<template>
	<div class="radio radio--required">
		<p class="radio__title">
			{{ name }}
		</p>
		<div class="radio__wrap">
			<label class="radio__label" v-on:change="changeRadio" v-bind:class="{ 'radio__label--checked': this.sex === 'Мужской' && 'мужской' }">
				<div class="radio__label-name">
					<p>Мужской</p>
				</div>
				<input type="radio" v-model="sex" name="sex" class="radio__input" value="Мужской">
			</label>
			<div class="radio__separator" v-if="!sex"></div>
			<label class="radio__label" v-on:change="changeRadio" v-bind:class="{ 'radio__label--checked': this.sex === 'Женский' && 'женский' }">
				<div class="radio__label-name">
					<p>Женский</p>
				</div>
				<input type="radio" v-model="sex" name="sex" class="radio__input" value="Женский">
			</label>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'radioInput',
		props: ['name'],
		data () {
			return {
				sex: null
			}
		},
		computed: {},
		methods: {
			changeRadio: function () {
				this.$emit('inputChanged', this.sex)
			}
		}
	}
</script>

<style lang="scss">
	.radio {
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
		&__wrap {
			width: 66%;
			flex-shrink: 0;
			display: flex;
			height: 40px;
		}
		&__label {
			height: 100%;
			width: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			border-top: 1px solid #D6E0E6;
			border-bottom: 1px solid #D6E0E6;
			transition: 0.3s all;
			cursor: pointer;
			&--checked {
				background-color: $yellow;
				border-color: $yellow !important;
				cursor: default;
			}
			&:first-child {
				border-top-left-radius: 4px;
				border-bottom-left-radius: 4px;
				border-left: 1px solid #D6E0E6;
			}
			&:last-child {
				border-top-right-radius: 4px;
				border-bottom-right-radius: 4px;
				border-right: 1px solid #D6E0E6;
			}
			input {
				display: none;
			}
		}
		&__separator {
			width: 1px;
			height: 100%;
			display: block;
			background-color: #D6E0E6;
			transition: 0.3s all;
		}
	}
</style>
