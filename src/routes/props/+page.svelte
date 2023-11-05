<script>
	import CounterButton from '$lib/components/buttons/CounterButton.svelte';

	let count = 0;
	function increment() {
		count += 1;
	}

	function decrement() {
		count -= 1;
	}
</script>

<h3>
	Here, I will show you how props work. In this example, functions for increment
	and decrement are passed down and called in child components.
</h3>
<p>
	In the future, visual representation of components will display borders. This
	is done to visualize nesting, which will help to show parent, child
	components, and nesting levels.
</p>
<div class="wrapper component">
	<h1>{count}</h1>
	<div class="buttons">
		<CounterButton onClick={decrement} type="decrement" />
		<CounterButton onClick={increment} type="increment" />
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.buttons {
		display: flex;
		gap: 10px;
	}
</style>
