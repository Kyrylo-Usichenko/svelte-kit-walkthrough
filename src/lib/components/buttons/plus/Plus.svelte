<script lang="ts">
	import PlusIcon from '$lib/components/icons/PlusIcon.svelte';
	export let increment: () => void;
</script>

<button on:click={increment}>
	<PlusIcon />
</button>
