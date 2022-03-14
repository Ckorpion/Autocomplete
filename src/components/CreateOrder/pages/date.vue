<script setup>
	import { computed, ref } from 'vue'

	import Icons from './../../all/Icons.vue'

	const emit = defineEmits(['setStep']);


	// DATA
	let currentDate = ref(new Date());
	const now = new Date();
	const months = [
		'January', 'February', 
		'March', 'April', 'May', 
		'June', 'July', 'August', 
		'September', 'October', 'November', 
		'December'
	];


	// METHODS
	const getDayData = (date) => {
		const id = getId(date);
		const data = {
			id,
			datetime: date,
			date: date.getDate(),
			today: false,
			another_month: currentDate.value.getMonth() != date.getMonth(),
		};

		if (!data.another_month && id == getId(now)) {
			data.today = true;
		}

		return data;
	};

	const getId = (date) => {
		return [
			date.getFullYear(),
			(date.getMonth() + 1).toString().padStart(2, 0),
			date.getDate().toString().padStart(2, 0)
		].join('-');
	};

	const changeMonth = (value) => {
		const date = new Date(currentDate.value);
		date.setMonth(date.getMonth() + value);
		currentDate.value = date;
	};

	const select = (day) => {
		if (!day.another_month) return;

		if (day.datetime.getMonth() > currentDate.value.getMonth()) {
			changeMonth(1);
		} else {
			changeMonth(-1);
		}
	};

	
	// COMPUTEDS
	const monthyear = computed(() => {
		return months[currentDate.value.getMonth()] + ' ' + currentDate.value.getFullYear();
	});

	const days = computed(() => {
		const items = [];

		let firstDay = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 1);
		if (firstDay.getDay() != 1) {
			const lastDay = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 0);

			for (let day = lastDay.getDate() - (firstDay.getDay() || 7) + 2; day <= lastDay.getDate(); day++) {
				const dayData = new Date(lastDay.getFullYear(), lastDay.getMonth(), day);
				items.push(getDayData(dayData));
			}
		}

		const lastDay = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 0);

		for (let day = 1; day <= lastDay.getDate(); day++) {
			const dayData = new Date(firstDay.getFullYear(), firstDay.getMonth(), day);
			items.push(getDayData(dayData));
		}

		if (lastDay.getDay() != 0) {
			firstDay = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);

			for (let day = 1; day <= 7 - lastDay.getDay(); day++) {
				const dayData = new Date(firstDay.getFullYear(), firstDay.getMonth(), day);
				items.push(getDayData(dayData));
			}
		}

		return items;
	});
</script>

<template>
	<div class="date -flex">
		<div class="date-box">
			<div class="-flex -flex__yCenter -flex__xSpace">
				<Icons name="Arrow left" class="-cur" @click="changeMonth(-1)" />
				<div class="date__monthyear">{{ monthyear }}</div>
				<Icons name="Arrow right" class="-cur" @click="changeMonth(1)" />
			</div>

			<div class="calendar__dayweeks">
				<div class="calendar__dayweeks__item">Mon</div>
				<div class="calendar__dayweeks__item">Tue</div>
				<div class="calendar__dayweeks__item">Wed</div>
				<div class="calendar__dayweeks__item">Thu</div>
				<div class="calendar__dayweeks__item">Fri</div>
				<div class="calendar__dayweeks__item">Sat</div>
				<div class="calendar__dayweeks__item">Sun</div>
			</div>

			<div class="calendar__days">
				<div 
					v-for="day of days" 
					:key="'day' + day.id" 
					class="calendar__days__item -cur"
               :class="{
                  'calendar__days__item-today': day.today, 
                  'calendar__days__item-another_month': day.another_month,
               }"

               @click="select(day)"
				>{{ day.date }}</div>
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
	.date {
		margin-top: 6px;
		flex-direction: column;
	}
	
	.date-box {
		flex-grow: 1;
		margin-bottom: 50px;
	}

	.calendar__dayweeks,
	.calendar__days {
		display: grid;
		justify-content: space-between;
	}

	.calendar__dayweeks {
		margin-top: 20px;
	}

	.calendar__dayweeks,
	.calendar__days  {
		text-align: center;
	}

	.calendar__days__item {
		border-radius: 8px;
	}

	.calendar__days__item-today {
		background: rgba(0, 0, 0, 0.05);
	}

	.calendar__days__item-another_month {
		color: rgba(0, 0, 0, 0.3);
	}
	
	@media (min-width: 1000px) {
		.date__monthyear,
		.calendar__dayweeks,
		.calendar__days  {
			font-weight: 400;
			font-size: 18px;
			line-height: 27px;
		}

		.calendar__dayweeks,
		.calendar__days  {
			grid-template-columns: repeat(7, 50px);
			grid-gap: 2px 0;
		}

		.calendar__dayweeks__item,
		.calendar__days__item  {
			padding: 12px 0;
		}
	}

	@media (max-width: 999px) {
		.date__monthyear,
		.calendar__dayweeks,
		.calendar__days  {
			font-weight: 400;
			font-size: 16px;
			line-height: 24px;
		}

		.calendar__dayweeks,
		.calendar__days  {
			grid-template-columns: repeat(7, 36px);
			grid-gap: 12px 0;
		}

		.calendar__dayweeks__item,
		.calendar__days__item  {
			padding: 5px 0;
		}
	}
</style>