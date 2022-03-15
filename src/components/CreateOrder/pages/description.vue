<script setup>
	import { ref, computed, watchEffect } from 'vue'

	import json from './../../../assets/list.json'

	import InputField from './../../all/InputField.vue'
	import Icons from './../../all/Icons.vue'

	const props = defineProps({
		form: Object
	});

	const emit = defineEmits(['setStep', 'change']);

	// DATA
	let value = ref(props.form.description);

	const json_list = [];
	for (let id = 0; id < json.length; id++) {
		json_list[id] = {id, value: json[id]};
	}
	json_list.sort((a, b) => a.value.length - b.value.length);

	let json_first = [].concat(json_list);
	json_first = json_first.slice(0, 10);
	json_first = json_first.map(item => ({word: item.value, item}));

	const refInput = ref(null)


	// METHODS
	const select = (item) => {
		value.value = item.item.value + ' ';
		refInput.value.setFocus();
	};


	// COMPUTEDS
	const options = computed(() => {
		let val = value.value.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&').trim();
		if (!val) return json_first;

		const val_words = val.split(' ');
		const indexes = [];
		let list = [];

		for (const item of json_list) {
			if (item.value.search(new RegExp('^' + val, 'i')) != -1) {
				const words = item.value.split(' ');

				const difference = words.filter(x => !val_words.includes(x.toLowerCase()));

				if (difference.length) {
					list = list.concat({word: difference.join(' '), item});
				}
			}
		}

		list = list.filter((v, i, a) => a.indexOf(v) === i);
		list.sort((a, b) => a.word.length - b.word.length);
		list = list.slice(0, 15);


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
				<div 
					v-for="item in options" 
					:key="'word' + item.item.id" 
					class="option -cur" 
					@click="select(item)"
				>{{ item.word }}</div>
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
			margin: 0 -12px -12px 0;
		}

		.option {
			margin: 0 12px 12px 0;
		}
	}

	@media (max-width: 999px) {
		.input {
			margin-bottom: 14px;
		}

		.options {
			margin: 0 -10px -10px 0;
		}
		.option {
			margin: 0 10px 10px 0;
		}
	}
</style>