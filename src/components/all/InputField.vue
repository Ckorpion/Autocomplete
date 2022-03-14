<script setup>
	import Icons from './Icons.vue'

	defineProps({
		modelValue: {
			type: String
		}
	});

	const emit = defineEmits(['update:modelValue']);

	const input = (event) => {
		updateValue(event.target.value);
	}

	const updateValue = (value) => {
		emit('update:modelValue', value)
	}

	const clear = () => {
		updateValue('');
	}
</script>

<template>
	<div class="inputfield">
		<input type="text" :value="modelValue" class="inputfield__input" @input="input" />

		<Icons 
			name="Cross circle" 
			class="inputfield__icon -cur" 
			:class="{'inputfield__icon-hide': !modelValue}"
		/>
		<Icons 
			name="Cross circle black" 
			class="inputfield__icon-hover -cur" 
			:class="{'inputfield__icon-hide': !modelValue}"
			@click="clear"
		/>
	</div>
</template>

<style scoped>
	.inputfield {
		position: relative;
	}

	.inputfield__input {
		width: 100%;
		padding: 13px 13px 13px 14px;
		box-sizing: border-box;

		background: rgba(0, 0, 0, 0.05);
		border: none;
		border-radius: 10px;
		outline: none;

		font-family: inherit;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #000000;

		transition: .1s linear background;
	}

	.inputfield__input:focus {
		background: rgba(0, 0, 0, 0.1);
	}

	.inputfield__icon,
	.inputfield__icon-hover {
		position: absolute;
		top: 13px;
		right: 13px;
		opacity: 1;
		transition: .1s linear opacity;
	}
	.inputfield__icon-hide {
		opacity: 0;
		pointer-events: none;
	}

	.inputfield__icon {
		pointer-events: none;
	}
	.inputfield__icon-hover {
		opacity: 0;
		transition: .1s linear opacity;
	}
	.inputfield__icon-hover:hover {
		opacity: 1;
	}
</style>