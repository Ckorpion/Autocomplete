<script setup>
	import { ref, onMounted } from 'vue'
	import APP from './../../assets/js/app.js'

	const props = defineProps({
		name: {
			type: String,
			required: true
		},
		size: {
			type: Number,
			default: 24
		}
	});

	let top = ref('0px');
	let left = ref('0px');
	let boxSize = ref(props.size + 'px');

	onMounted(() => {
		render();
	});

	const render = () => {
		if (!APP.icons.icon) {
			document.addEventListener('iconload', onloadicon);
			return;
		}

		const icon = APP.icons.icon.querySelector('[id="Icons / ' + boxSize.value + ' / ' + props.name + '"]');

		if (!icon) {
			console.error('Icon "' + boxSize.value + ' / ' + props.name + '" not found');
			return;
		}
		const sizes = icon.getBBox();
		top.value = (sizes.y * -1 + ((props.size - sizes.height) / 2)) + 'px';
		left.value = (sizes.x * -1 + ((props.size - sizes.width) / 2)) + 'px';

		if (props.name == 'Back Dark Gray') left = parseInt(left.value) - 2 + 'px';
	};

	const onloadicon = () => {
		document.removeEventListener('iconload', onloadicon);
		render();
	}
</script>

<template>
	<div 
		class="icons -flex-inline" 
		:style="{width: boxSize, height: boxSize, 'background-position': left + ' ' + top}"
		v-bind="$attrs"
	></div>
</template>

<style scoped>
	.icons {
		vertical-align: top;
	}
</style>