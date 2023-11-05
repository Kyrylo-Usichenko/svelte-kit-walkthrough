<script>
	import Inner from './Inner.svelte';
</script>

<div class="wrapper">
	<h1>Just a <b> wrapper </b> for imitate props drilling</h1>
	<Inner />
</div>

<style>
	.wrapper {
		padding: 10px;
		background: rgb(173, 173, 173);
		border: 1px solid red;
	}
</style>
