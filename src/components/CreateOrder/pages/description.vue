<script setup>
	import { ref, computed, watchEffect } from 'vue'

	import json_list from './../../../assets/list.json'

	import InputField from './../../all/InputField.vue'
	import Icons from './../../all/Icons.vue'

	const props = defineProps({
		form: Object
	});

	const emit = defineEmits(['setStep', 'change']);

	// DATA
	let value = ref(props.form.description);

	json_list.sort((a, b) => a.length - b.length);

	let json_first = [].concat(json_list);
	json_first = json_first.slice(0, 10);
	json_first = json_first.map(item => ({word: item, phrase: item}));

	const refInput = ref(null)


	// METHODS
	const select = (item) => {
		value.value = item.phrase + ' ';
		refInput.value.setFocus();
	};


	// COMPUTEDS
	const options = computed(() => {
		let val = value.value.toLowerCase().trim();
		if (!val) return json_first;

		const val_words = val.split(' ');
		const indexes = [];
		let list = [];

		for (const phrase of json_list) {
			if (phrase.search(new RegExp('^' + val, 'i')) != -1) {
				const words = phrase.split(' ');

				const difference = words.filter(x => !val_words.includes(x.toLowerCase()));

				if (difference.length) {
					list = list.concat({word: difference.join(' '), phrase});
				}
			}
		}

		list = list.filter((v, i, a) => a.indexOf(v) === i);

		return list;
	});


	// WATCHS
	watchEffect(() =>
		emit('change', {description: value.value})
	);
</script>

<template>
	<div class="description -flex">
		<div class="description-box">
			<InputField ref="refInput" v-model="value" class="input" />

			<div class="options -flex">
				<div v-for="(item, i) in options" :key="'word' + i" class="option -cur" @click="select(item)">{{ item.word }}</div>
			</div>
		</div>

		<div class="-flex -flex__xSpace">
			<button class="backbutton button-white" @click="emit('setStep', -1)">
				<Icons name="Back" />
				<div class="backbutton__title">Back</div>
			</button>
			<button class="nextbutton button-blue" @click="emit('setStep', 1)">Next</button>
		</div>
	</div>
</template>

<style scoped>
	.description {
		flex-direction: column;
	}
	
	.description-box {
		flex-grow: 1;
		margin-bottom: 50px;
	}

	.option {
		padding: 7px 14px 8px;
		background: rgb(85 81 255 / 10%);
		border-radius: 30px;
		transition: .1s linear background;
	}
	.option:hover {
		background: rgb(85 81 255 / 20%);
	}

	@media (min-width: 1000px) {
		.input {
			margin-bottom: 18px;
		}

		.options {
			gap: 12px;
		}
	}

	@media (max-width: 999px) {
		.input {
			margin-bottom: 14px;
		}

		.options {
			gap: 10px;
		}
	}
</style>