<template>
	<div class="page">
		<appBreadcrumbs></appBreadcrumbs>
		<section class="editor">
			<div class="container">
				<h2 class="h2">Добавить запись</h2>
				<editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
					<div class="menubar">

						<button class="menubar__button" :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181.395 181.395" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 181.395 181.395">
								<path d="m20.618,181.395v-181.395h62.293c22.506,0 40.074,4.174 52.699,12.521 12.623,8.346 18.936,20.785 18.936,37.313 0,8.639-2.033,16.318-6.104,23.049-4.07,6.729-10.34,11.795-18.813,15.199 10.631,2.408 18.479,7.246 23.547,14.514 5.064,7.268 7.6,15.637 7.6,25.104 0,17.691-5.939,31.064-17.814,40.115-11.879,9.055-28.904,13.58-51.082,13.58h-71.262zm42.235-105.772h20.93c9.551-0.166 16.695-2.014 21.43-5.545 4.734-3.529 7.102-8.699 7.102-15.51 0-7.725-2.41-13.35-7.225-16.881-4.82-3.529-12.211-5.295-22.178-5.295h-20.059v43.231zm0,27.908v45.473h29.027c8.971,0 15.699-1.766 20.184-5.297 4.484-3.529 6.729-8.947 6.729-16.256 0-7.891-1.932-13.85-5.795-17.879-3.861-4.027-10.111-6.041-18.748-6.041h-31.397z"/>
							</svg>

						</button>

						<button class="menubar__button" :class="{ 'is-active': isActive.italic() }" @click="commands.italic">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181.5 181.5" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 181.5 181.5">
								<path d="M93.368,181.5H51.856L88.132,0h41.512L93.368,181.5z"/>
							</svg>
						</button>

						<button class="menubar__button" :class="{ 'is-active': isActive.strike() }" @click="commands.strike">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 230" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 230 230">
								<polygon points="230,99 136,99 136,57 183,57 183,25 47,25 47,57 94,57 94,99 0,99 0,132 94,132 94,205 136,205 136,132 230,132 "/>
							</svg>

						</button>

						<button class="menubar__button" :class="{ 'is-active': isActive.underline() }" @click="commands.underline">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 230" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 230 230">
								<path d="M61.638,164.165C75.236,175.39,93.257,181,115.458,181c21.955,0,39.679-5.61,53.239-16.835   C182.254,152.942,189,137.13,189,116.731V0h-42v116.731c0,11.06-2.501,19.212-8.03,24.454c-5.529,5.244-13.284,7.864-23.524,7.864   c-10.322,0-18.312-2.642-23.965-7.926C85.829,135.841,83,127.711,83,116.731V0H41v116.731C41,137.13,48.039,152.942,61.638,164.165   z"/>
								<rect width="230" y="197" height="33"/>
							</svg>

						</button>

						<button class="menubar__button" :class="{ 'is-active': isActive.paragraph() }" @click="commands.paragraph">
							P
						</button>

						<button class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 1 }) }" @click="commands.heading({ level: 1 })">
							H1
						</button>

						<button class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click="commands.heading({ level: 2 })">
							H2
						</button>

						<button class="menubar__button" :class="{ 'is-active': isActive.heading({ level: 3 }) }" @click="commands.heading({ level: 3 })">
							H3
						</button>

						<button class="menubar__button" @click="showImagePrompt(commands.image)">
							Image
						</button>

						<button class="menubar__button" :class="{ 'is-active': isActive.bullet_list() }" @click="commands.bullet_list">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 231 231" enable-background="new 0 0 231 231">
								<rect width="181" x="50" y="164.5" height="33"/>
								<rect width="181" x="50" y="99.5" height="33"/>
								<rect width="181" x="50" y="32.5" height="33"/>
								<rect width="33" y="165.5" height="33"/>
								<rect width="33" y="99.5" height="33"/>
								<rect width="33" y="32.5" height="33"/>
							</svg>
						</button>

						<button class="menubar__button" :class="{ 'is-active': isActive.ordered_list() }" @click="commands.ordered_list">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232.582 232.582" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 232.582 232.582">
								<g>
									<path d="m11.326,107.724c0-2 0.489-4.047 1.466-5.495 0.977-1.449 2.319-2.149 4.026-2.149 1.909,0 3.341,0.573 4.296,1.695 0.954,1.124 1.432,2.635 1.432,4.522 0,1.325-0.472,2.889-1.415,4.685-0.943,1.797-2.598,3.842-4.598,6.133l-15.951,16.578v7.031h34v-8h-18.438l-.102-.392 6.638-7.203c4.313-4.694 7.271-8.28 8.878-10.661 1.605-2.381 2.408-5.145 2.408-8.244 0-4.604-1.511-8.243-4.531-10.895-3.021-2.649-7.227-3.98-12.617-3.98-5.076,0-9.153,1.575-12.23,4.73-3.077,3.155-4.56,6.953-4.447,11.49l.068,.154h11.117z"/>
									<polygon points="11.582,57.724 0.582,57.724 0.582,66.724 34.582,66.724 34.582,57.724 23.582,57.724 23.582,17.136 0.582,20.572    0.582,28.724 11.582,28.724  "/>
									<path d="m27.026,189.594c2.313-1.056 4.161-2.521 5.542-4.396 1.382-1.875 2.072-3.926 2.072-6.148 0-4.47-1.595-7.923-4.784-10.36-3.189-2.438-7.445-3.655-12.769-3.655-4.582,0-8.479,1.213-11.691,3.639-3.212,2.426-4.751,5.767-4.616,9.675l.068,.377h11.051c0-2 0.56-2.623 1.684-3.477 1.123-0.854 2.426-1.367 3.908-1.367 1.887,0 3.324,0.484 4.313,1.54 0.988,1.056 1.482,2.336 1.482,3.886 0,1.954-0.55,3.574-1.65,4.675-1.101,1.101-2.673,1.743-4.717,1.743h-5.337v8h5.337c2.269,0 4.026,0.67 5.273,1.759 1.247,1.09 1.87,2.888 1.87,5.268 0,1.708-0.596,3.154-1.785,4.277-1.191,1.123-2.786,1.699-4.785,1.699-1.752,0-3.239-0.755-4.464-1.821-1.225-1.066-1.836-2.182-1.836-4.182h-11.119l-.067,.432c-0.112,4.582 1.555,8.196 5.003,10.61 3.448,2.414 7.474,3.679 12.078,3.679 5.346,0 9.737-1.256 13.174-3.828 3.437-2.571 5.154-6.09 5.154-10.582 0-2.74-0.74-5.085-2.223-7.051-1.483-1.967-3.538-3.426-6.166-4.392z"/>
									<rect width="181" x="51.582" y="164.724" height="33"/>
									<rect width="181" x="51.582" y="99.724" height="33"/>
									<rect width="181" x="51.582" y="32.724" height="33"/>
								</g>
							</svg>
						</button>

						<button class="menubar__button" :class="{ 'is-active': isActive.blockquote() }" @click="commands.blockquote">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
								<path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"/>
								<path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"/>
							</svg>
						</button>

						<button class="menubar__button" @click="commands.undo">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 438.536 438.536" style="enable-background:new 0 0 438.536 438.536;" xml:space="preserve">
								<path d="M421.125,134.191c-11.608-27.03-27.217-50.347-46.819-69.949C354.7,44.639,331.384,29.033,304.353,17.42
								C277.325,5.807,248.969,0.005,219.275,0.005c-27.978,0-55.052,5.277-81.227,15.843C111.879,26.412,88.61,41.305,68.243,60.531
								l-37.12-36.835c-5.711-5.901-12.275-7.232-19.701-3.999C3.807,22.937,0,28.554,0,36.547v127.907c0,4.948,1.809,9.231,5.426,12.847
								c3.619,3.617,7.902,5.426,12.85,5.426h127.907c7.996,0,13.61-3.807,16.846-11.421c3.234-7.423,1.903-13.988-3.999-19.701
								l-39.115-39.398c13.328-12.563,28.553-22.222,45.683-28.98c17.131-6.757,35.021-10.138,53.675-10.138
								c19.793,0,38.687,3.858,56.674,11.563c17.99,7.71,33.544,18.131,46.679,31.265c13.134,13.131,23.555,28.69,31.265,46.679
								c7.703,17.987,11.56,36.875,11.56,56.674c0,19.798-3.856,38.686-11.56,56.672c-7.71,17.987-18.131,33.544-31.265,46.679
								c-13.135,13.134-28.695,23.558-46.679,31.265c-17.987,7.707-36.881,11.561-56.674,11.561c-22.651,0-44.064-4.949-64.241-14.843
								c-20.174-9.894-37.209-23.883-51.104-41.973c-1.331-1.902-3.521-3.046-6.567-3.429c-2.856,0-5.236,0.855-7.139,2.566
								l-39.114,39.402c-1.521,1.53-2.33,3.478-2.426,5.853c-0.094,2.385,0.527,4.524,1.858,6.427
								c20.749,25.125,45.871,44.587,75.373,58.382c29.502,13.798,60.625,20.701,93.362,20.701c29.694,0,58.05-5.808,85.078-17.416
								c27.031-11.607,50.34-27.22,69.949-46.821c19.605-19.609,35.211-42.921,46.822-69.949s17.411-55.392,17.411-85.08
								C438.536,189.569,432.732,161.22,421.125,134.191z"/>
							</svg>

						</button>
					</div>
				</editor-menu-bar>

				<editor-menu-bubble class="menububble" :editor="editor" @hide="hideLinkMenu" v-slot="{ commands, isActive, getMarkAttrs, menu }">
					<div class="menububble" :class="{ 'is-active': menu.isActive }" :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`" >

						<form class="menububble__form" v-if="linkMenuIsActive" @submit.prevent="setLinkUrl(commands.link, linkUrl)">
							<input class="menububble__input" type="text" v-model="linkUrl" placeholder="https://" ref="linkInput" @keydown.esc="hideLinkMenu"/>
							<button class="menububble__button" @click="setLinkUrl(commands.link, null)" type="button">
								Удалить ссылку
							</button>
						</form>

						<template v-else>
							<button class="menububble__button" @click="showLinkMenu(getMarkAttrs('link'))" :class="{ 'is-active': isActive.link() }">
								<span>{{ isActive.link() ? 'Редактировать ссылку' : 'Добавить ссылку'}}</span>
							</button>
						</template>

					</div>
				</editor-menu-bubble>

				<editor-content class="editor__content" :editor="editor" />
			</div>
		</section>
	</div>
</template>

<script>
	import appBreadcrumbs from '@/components/sections/Breadcrumbs.vue'
	import { Editor, EditorContent, EditorMenuBar, EditorMenuBubble } from 'tiptap'
	import {
		Blockquote,
		CodeBlock,
		HardBreak,
		Heading,
		OrderedList,
		BulletList,
		ListItem,
		TodoItem,
		TodoList,
		Bold,
		Image,
		Italic,
		Link,
		Strike,
		Underline,
		History
	} from 'tiptap-extensions'

	export default {
		name: 'postEdit',
		components: {
			EditorMenuBar,
			EditorContent,
			EditorMenuBubble,
			appBreadcrumbs
		},
		data () {
			return {
				editor: new Editor({
					extensions: [
					new Blockquote(),
					new BulletList(),
					new CodeBlock(),
					new HardBreak(),
					new Heading({ levels: [1, 2, 3] }),
					new ListItem(),
					new OrderedList(),
					new TodoItem(),
					new TodoList(),
					new Image(),
					new Link(),
					new Bold(),
					new Italic(),
					new Strike(),
					new Underline(),
					new History()
					],
					content: '<p>Это большой пост о всяком, разном. Вот пример <strong>strong</strong> и <em>italic</em>. <s>Перечеркнутый</s> текст и <u>подчеркнутый</u> снизу<br></p><h1>Заголовок 1</h1><p><br></p><h2>Заголовок 2</h2><p><br></p><h3>Заголовок 3</h3><p><br></p><p>Теперь примеры списков:</p><p><br></p><ul><li><p>Пункт 1</p></li><li><p>Пункт 2</p></li><li><p>Пункт 3</p></li></ul><p><br></p><ol><li><p>Пункт 1</p></li><li><p>Пункт 2</p></li><li><p>Пункт 3</p></li></ol><p><br></p><blockquote><p>И блок цитаты. Я сделаю его в несколько строк, чтобы было понятнее. Я сделаю его в несколько строк, чтобы было понятнее.Я сделаю его в несколько строк, чтобы было понятнее.Я сделаю его в несколько строк, чтобы было понятнее.Я сделаю его в несколько строк, чтобы было понятнее.Я сделаю его в несколько строк, чтобы было понятнее.Я сделаю его в несколько строк, чтобы было понятнее.Я сделаю его в несколько строк, чтобы было понятнее.</p></blockquote>',
					onUpdate: ({ getHTML }) => {
						this.postContent = getHTML()
						console.log(this.postContent)
					}
				}),
				linkUrl: null,
				linkMenuIsActive: false,
				postContent: ''
			}
		},
		methods: {
			showImagePrompt (command) {
				const src = prompt('Введите url изображения')
				if (src !== null) {
					command({ src })
				}
			},
			showLinkMenu (attrs) {
				this.linkUrl = attrs.href
				this.linkMenuIsActive = true
				this.$nextTick(() => {
					this.$refs.linkInput.focus()
				})
			},
			hideLinkMenu () {
				this.linkUrl = null
				this.linkMenuIsActive = false
			},
			setLinkUrl (command, url) {
				command({ href: url })
				this.hideLinkMenu()
				this.editor.focus()
			}
		},
		beforeDestroy () {
			this.editor.destroy()
		}
	}
</script>

<style lang="scss">
	.editor {
		padding-top: 35px;
		margin-bottom: 100px;
		&__content {
			border: 1px solid $accent;
			border-radius: 4px;
			.ProseMirror {
				padding: 15px;
				outline: none;
			}
			p {
				width: calc(100% / 12 * 9 - 20px);
			}
			h1 {
				font-size: 26px;
				line-height: 30px;
				font-weight: bold;
				width: calc(100% / 12 * 9 - 20px);
			}
			h2 {
				font-weight: bold;
				font-size: 22px;
				line-height: 28px;
				width: calc(100% / 12 * 9 - 20px);
			}
			h3 {
				font-weight: bold;
				font-size: 18px;
				line-height: 22px;
				width: calc(100% / 12 * 9 - 20px);
			}
			ul {
				list-style-type: disc;
				padding-left: 20px;
				list-style-position: outside;
				width: calc(100% / 12 * 9 - 20px);
			}
			ol {
				list-style-type: decimal;
				padding-left: 20px;
				list-style-position: outside;
				width: calc(100% / 12 * 9 - 20px);
			}
			li {}
			em {
				font-style: italic;
			}
			strong {
				font-weight: bold;
			}
			img {
				width: 100%;
				margin-bottom: 50px;
				display: block;
			}
			a {
				color: #0AA5DC;
				cursor: pointer;
				&:hover {
					text-decoration: none;
				}
			}
			blockquote {
				font-style: italic;
				background-color: #ececec;
				padding-left: 25px;
				padding-right: 25px;
				padding-top: 20px;
				padding-bottom: 20px;
				border-radius: 4px;
				p {
					width: 100%;
				}
			}
		}
	}
	.menubar {
		display: flex;
		margin-bottom: 30px;
		&__button {
			height: 26px;
			display: inline-flex;
			justify-content: center;
			font-weight: bold;
			border: none;
			background-color: $light;
			transition: 0.3s all;
			color: $dark;
			svg {
				display: block;
				height: 14px;
				width: 14px;
				fill: $dark;
			}
			&:hover {
				background-color: $dark;
				color: $light;
				svg {
					fill: $light;
				}
			}
		}
		.is-active {
			background-color: $dark;
			color: $light;
			svg {
				fill: $light;
			}
		}
	}

	.menububble {
		position: absolute;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		z-index: 20;
		background: #000;
		border-radius: 5px;
		padding: .3rem;
		margin-bottom: .5rem;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
		visibility: hidden;
		opacity: 0;
		-webkit-transition: opacity .2s, visibility .2s;
		transition: opacity .2s, visibility .2s;
		&.is-active {
			opacity: 1;
			visibility: visible
		}
		&__button {
			display: -webkit-inline-box;
			display: -ms-inline-flexbox;
			display: inline-flex;
			background: transparent;
			border: 0;
			color: #fff;
			padding: .2rem .5rem;
			margin-right: .2rem;
			border-radius: 3px;
			cursor: pointer;
			&:hover {
				background-color: hsla(0, 0%, 100%, .1)
			}
			&.is-active {
				background-color: hsla(0, 0%, 100%, .2)
			}
		}
		&__button:last-child {
			margin-right: 0
		}
		&__form {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center
		}
		&__input {
			font: inherit;
			border: none;
			background: transparent;
			color: #fff
		}
	}

</style>
