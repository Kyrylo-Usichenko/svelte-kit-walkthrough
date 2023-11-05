<script lang="ts">
	// imports
	import PlusIcon from '$lib/components/icons/PlusIcon.svelte';
	import MinusIcon from '../icons/MinusIcon.svelte';

	// getting props from parent component
	export let type: 'increment' | 'decrement';
	export let onClick: () => void;
</script>

<div class="wrapper">
	<button class="button" on:click={onClick}>
		{#if type === 'increment'}
			<PlusIcon />
		{/if}
		{#if type === 'decrement'}
			<MinusIcon />
		{/if}
	</button>
</div>

<style>
	.wrapper {
		margin: 0 auto;
		width: min-content;
		border: 3px solid rgba(0, 0, 0, 0.6);
	}
	.button {
		width: 64px;
		height: 64px;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 2rem;
		cursor: pointer;
		& svg {
			width: 25%;
			height: 25%;
		}
		& path {
			vector-effect: non-scaling-stroke;
			stroke-width: 2px;
			stroke: #444;
		}
	}
</style>
