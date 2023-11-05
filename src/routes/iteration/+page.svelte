<script lang="ts">
	import MinusIcon from '$lib/components/icons/MinusIcon.svelte';
	import PlusIcon from '$lib/components/icons/PlusIcon.svelte';

	let count = 0;
	let changes = 0;
	let values: number[] = [];

	$: count, (changes += 1), (values = [...values, count]);

	function increment() {
		count += 1;
	}

	function decrement() {
		count -= 1;
	}
</script>

<svelte:head>
	<title>Counter</title>
	<meta name="description" content="Counter" />
</svelte:head>

<div class="wrapper">
	<div class="counter">
		<button on:click={decrement}>
			<MinusIcon />
		</button>

		<div class="counter-viewport">
			<strong>{count}</strong>
		</div>

		<button on:click={increment}>
			<PlusIcon />
		</button>
	</div>

	<p>Your results will be displayed here</p>

	<div class="values">
		{#each values as value}
			<p>{value}</p>
		{/each}
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
	.counter {
		margin: 0 auto;
		width: fit-content;
		display: flex;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		& button {
			width: 2em;
			padding: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			border: 0;
			background-color: transparent;
			touch-action: manipulation;
			font-size: 2rem;
			cursor: pointer;
		}
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

	.counter .counter button:hover {
		background-color: var(--color-bg-1);
	}

	.counter-viewport {
		width: 8em;
		height: 4em;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		font-weight: 400;
		color: var(--color-theme-1);
		font-size: 4rem;
		align-items: center;
		justify-content: center;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.hidden {
		top: -100%;
		user-select: none;
	}

	.smile-wrapper {
		& svg {
			width: 70px;
			height: 70px;
		}
	}

	.values {
		height: 400px;
		width: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2px;
		overflow-x: none;
		overflow-y: auto;
		border: 1px solid black;
	}
</style>
