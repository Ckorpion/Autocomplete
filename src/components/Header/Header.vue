<script setup>
	import photo from './../../assets/images/photo.svg'
	import Icons from './../all/Icons.vue'
</script>

<template>
	<div class="header -flex -flex__xCenter -flex__yCenter">
		<div class="header-box -flex -flex__xSpace -flex__yCenter">
			<div class="-flex -flex__yCenter">
				<img :src="photo" class="header__photo" />
				<div>Account</div>
			</div>

			<div class="header__menu -flex -flex__yCenter">
				<a href="" class="header__menu__item">My orders</a>
				<a href="" class="header__menu__item">Create a task</a>
				<a href="" class="header__menu__item">Support</a>
			</div>

			<Icons name="Menu" :size="32" class="header__popupmenu -cur" />
		</div>
	</div>
</template>

<style scoped>
	.header {
		border-bottom: 1px solid #0000001a;
		font-size: 16px;
		line-height: 24px;
	}

	.header-box {
		--padding: 14px;

		width: 100%;
		max-width: calc(var(--appmaxwidth) + 200px + var(--padding) * 2);
		margin: 0 auto;
		padding: 0 var(--padding);
		box-sizing: border-box;
	}

	.header__photo {
		margin-right: 12px;
	}

	.header__menu__item:not(:last-child) {
		margin-right: 40px;
	}

	@media (min-width: 513px) {
		.header {
			height: 70px;
			min-height: 70px;
		}

		.header__popupmenu {
			display: none;
		}
	}

	@media (max-width: 512px) {
		.header {
			height: 68px;
		}

		.header__menu {
			display: none;
		}
	}
</style>