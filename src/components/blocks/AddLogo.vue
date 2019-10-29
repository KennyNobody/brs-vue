<template>
	<div class="add-logo">
		<label class="add-logo__label">
			<img class="add-logo__image" v-if="imageSrc" v-bind:src="imageSrc" alt="">
			<p class="add-logo__title">
				Загрузите сюда свое <br> изображение (это может<br> быть логотип фирмы)
			</p>
			<svg class="add-logo__icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0)">
					<path d="M34.3533 13.6471L21.6473 0.941113C20.9415 0.470556 20.0002 0 19.0591 0H10.5884C7.29439 0 4.70605 2.5882 4.70605 5.88236V34.1176C4.70605 37.4118 7.29425 40 10.5884 40H29.412C32.7062 40 35.2944 37.4118 35.2944 34.1176V16.2353C35.2944 15.2942 35.0591 14.3529 34.3533 13.6471ZM21.1767 3.76472L31.5297 14.1176H24.7062C22.8238 14.1176 21.1767 12.4706 21.1767 10.5882V3.76472ZM29.412 37.6471H10.5884C8.70605 37.6471 7.05897 36 7.05897 34.1176V5.88236C7.05897 4 8.70605 2.35292 10.5884 2.35292H18.8237V10.5882C18.8237 13.8824 21.4119 16.4706 24.7061 16.4706H32.9413V34.1176C32.9415 36 31.2944 37.6471 29.412 37.6471Z"/>
					<path d="M24.7058 24.0002H21.1763V20.4707C21.1763 19.7649 20.7058 19.2942 19.9998 19.2942C19.294 19.2942 18.8233 19.7647 18.8233 20.4707V24.0002H15.2938C14.588 24.0002 14.1173 24.4707 14.1173 25.1767C14.1173 25.8825 14.5879 26.3532 15.2938 26.3532H18.8233V29.8827C18.8233 30.5885 19.2938 31.0592 19.9998 31.0592C20.7056 31.0592 21.1763 30.5886 21.1763 29.8827V26.3532H24.7058C25.4116 26.3532 25.8823 25.8827 25.8823 25.1767C25.8822 24.4707 25.4116 24.0002 24.7058 24.0002Z"/>
				</g>
			</svg>
			<input
			v-on:change="onLogoChange"
			ref="logoInput"
			class="add-logo__input"
			type="file"
			accept="image/*"
			>
		</label>
	</div>
</template>

<script>

	export default {
		name: 'addLogo',
		data () {
			return {
				image: null,
				imageSrc: ''
			}
		},
		computed: {},
		methods: {
			onLogoChange (e) {
				const file = e.target.files[0]
				const reader = new FileReader()
				reader.onload = e => {
					this.imageSrc = reader.result
				}
				this.image = file
				reader.readAsDataURL(file)
				this.$emit('inputChanged', this.image)
			}
		}
	}
</script>

<style lang="scss">
	.add-logo {
		display: block;
		width: 100%;
		text-align: center;
		color: #80929c;
		&__label {
			transition: 0.3s all;
			display: block;
			border: 1px dashed #D6E0E6;
			padding-top: 24px;
			padding-bottom: 60px;
			border-radius: 4px;
			margin-bottom: 5px;
			position: relative;
			&:hover {
				border-color: $yellow;
				color: $yellow;
				cursor: pointer;
				.add-logo__icon {
					fill: $yellow;
				}
			}
		}
		&__title {
			margin-bottom: 45px;
		}
		&__icon {
			width: 40px;
			height: 40px;
			fill: #d6dfe4;
		}
		&__discript {
			font-size: 13px;
		}
		&__input {
			display: none;
		}
		&__image {
			position: absolute;
			top: 0px;
			bottom: 0px;
			left: 0px;
			right: 0px;
			object-fit: cover;
			height: 100%;
			width: 100%;
			opacity: 0.15
		}
	}
</style>
