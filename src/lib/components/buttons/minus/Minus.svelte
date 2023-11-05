<script lang="ts">
	import MinusIcon from '$lib/components/icons/MinusIcon.svelte';
	export let decrement: () => void;
</script>

<button on:click={decrement}>
	<MinusIcon />
</button>
