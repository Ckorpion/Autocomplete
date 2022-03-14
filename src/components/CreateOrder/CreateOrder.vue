<script setup>
	import { ref, reactive } from 'vue'

	import Icons from './../all/Icons.vue'
	import CreateOrderDescription from './pages/description.vue'
	import CreateOrderDate from './pages/date.vue'


	// DATA
	const steps = [
		{menu: 'Task name', page: ''},
		{menu: 'What needs to be done?', title: 'What needs to be done?', page: 'CreateOrderDescription'},
		{menu: 'Date', title: 'When a service is needed?', page: 'CreateOrderDate'},
		{menu: 'Time', page: ''},
		{menu: 'Budget', page: ''},
		{menu: 'Address', page: ''},
		{menu: 'Order details', page: ''},
		{menu: 'Successfully!', page: ''}
	];

	const pages = {
		CreateOrderDescription,
		CreateOrderDate
	}

	let step = ref(1);
	let pagehide = ref(false);

	const form = reactive({
		name: 'Study',
		description: '',
		date: ''
	});


	// METHODS
	const setStep = (value) => {
		if (!steps[value].page || value == step.value) return;

		pagehide.value = true;
		setTimeout(() => {
			step.value = value;
			pagehide.value = false;
		}, 200);
	};

	const change = (data) => {
		Object.assign(form, data);
	};
</script>

<template>
	<div class="main -flex -flex__xCenter">
		<div class="main-box -flex">
			<div class="menu">
				<div class="menu__info -flex -flex__xSpace">
					<div class="menu__info__currentstep">{{ `Step ${step + 1}` }}</div>
					<div 
						v-if="steps[step + 1]" 
						class="menu__info__nextstep"
					>{{ `Step ${step + 2}. ${steps[step + 1].menu}` }}</div>
				</div>
				<div class="menu__items">
					<div 
						v-for="(item, i) in steps" 
						:key="'step' + i" 
						class="menu__item"
						:class="{
							'menu__item-pass': i <= step, 
							'menu__item-active': i == step
						}"
						@click="setStep(i)"
					>
						<div class="menu__item-desktop -flex -flex__yCenter">
							<div class="menu__item__step -flex -flex__xCenter">
								<Icons v-if="i < step" name="Check" />
								<div v-else>{{ i + 1 }}</div>
							</div>

							<div class="menu__item__title">{{ item.menu }}</div>
						</div>
					</div>
				</div>
			</div>

			<div class="page -flex" :class="{'page-hide': pagehide}">
				<div class="name">{{ form.name }}</div>
				<div class="title">{{ steps[step].title }}</div>

				<component 
					:is="pages[steps[step].page]" 
					:form="form"
					class="page__content" 
					@setStep="setStep(step + $event)"
					@change="change"
				></component>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.main {
		flex-grow: 1;
	}
	.main-box {
		--padding: 14px;

		width: 100%;
		max-width: calc(var(--appmaxwidth) + var(--padding) * 2);
		margin: 0 auto;
		padding: 0 var(--padding);
		box-sizing: border-box;
	}

	.menu__item {
		border-radius: 10px;
		overflow: hidden;
	}

	.menu__item:not(.menu__item-pass),
	.menu__item-active {
		pointer-events: none;
		cursor: default;
	}

	.menu__info {
		margin-bottom: 8px;
	}

	.menu__info__currentstep {
		color: #5551FF;
	}

	.menu__info__nextstep {
		opacity: 0.3;
	}

	.page {
		flex-direction: column;
		opacity: 1;
		transition: .2s linear opacity;
	}
	.page-hide {
		opacity: 0;
	}

	.page__content {
		flex-grow: 1;
	}

	.name {
		color: #00000066;
		margin-bottom: 10px;
	}

	.title {
		font-weight: 600;
	}

	@media (min-width: 1000px) {
		.main-box {
			--menuwidth: 326px;
			--menumergin:  80px;

			padding-top: 61px;
			padding-bottom: 70px;
		}

		.menu {
			margin-right: var(--menumergin);
			width: var(--menuwidth);
		}

		.menu__info {
			display: none;
		}

		.menu__info {
			margin-bottom: 8px;
		}

		.menu__item-desktop {
			padding: 0 20px;
			transition: .1s linear background;
		}

		.menu__item:not(:last-child) {
			margin-bottom: 6px;
		}

		.menu__item-active .menu__item-desktop {
			background: #5551ff1a !important;
			color: #5551FF;
			cursor: pointer;
		}

		.menu__item-pass {
			cursor: pointer;
		}

		.menu__item-pass:hover .menu__item-desktop{
			background: #F6F6F6;
		}

		.menu__item:not(.menu__item-pass) {
			opacity: 0.3;
		}

		.menu__item-desktop {
			height: 40px;
		}

		.menu__item__step {
			width: 47px;
		}

		.page {
			width: calc(100% - var(--menuwidth) - var(--menumergin));
		}

		.name {
			margin-top: 9px;
		}

		.title {
			font-size: 36px;
			line-height: 54px;
			margin-bottom: 40px;
		}

		::v-deep(.backbutton) {
			width: 143px;
		}

		::v-deep(.backbutton .backbutton__title) {
			margin-left: 6px;
		}

		::v-deep(.nextbutton) {
			width: 285px;
		}
	}

	@media (max-width: 999px) {
		.main-box {
			flex-direction: column;
			padding-bottom: 14px;
		}
		.menu {
			margin-top: 14px;
		}

		.menu .menu__items {
			display: flex;
			justify-content: space-between;
		}

		.page {
			flex-grow: 1;
			margin-top: 39px;
		}

		.menu__item-desktop {
			display: none;
		}

		.menu__item {
			flex-grow: 1;
		}
		.menu__item:not(:last-child) {
			margin-right: 8px;
		}

		.menu__item {
			position: relative;
			height: 5px;
			overflow: hidden;
			background: rgba(0, 0, 0, 0.08);
		}

		.menu__item:before {
			content: '';
			position: absolute;
			height: 100%;
			width: 0%;
			top: 0;
			left: 0;
			background: #5551FF;
			opacity: 0;
			transition: .2s linear;
		}

		.menu__item-pass:before,
		.menu__item-active:before {
			width: 100%;
			opacity: 1;
			cursor: pointer;
		}

		.title {
			font-size: 24px;
			line-height: 36px;
			margin-bottom: 24px;
		}

		::v-deep(.backbutton)  {
			width: 50px;
		}

		::v-deep(.nextbutton) {
			margin-left: 12px;
			width: calc(100% - 50px - 12px);
		}

		::v-deep(.backbutton .backbutton__title) {
			display: none;
		}
	}
</style>