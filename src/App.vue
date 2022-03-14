<script setup>
	import { onMounted } from 'vue'
	import APP from './assets/js/app.js'

	import Header from './components/Header/Header.vue'
	import CreateOrder from './components/CreateOrder/CreateOrder.vue'

	import icons_url from './assets/images/Icons.svg'

	onMounted(() => {
		APP.icons.init(icons_url)
	})
</script>

<template>
	<Header />

	<CreateOrder />
</template>

<style>
	@import './assets/styles/base.css';
</style>