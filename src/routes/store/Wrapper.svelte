<script>
	import Inner from './Inner.svelte';
</script>

<div class="wrapper">
	<h1>Just a <b> wrapper </b> for imitate props drilling</h1>
	<Inner />
</div>

<style>
	.wrapper {
		background: rgb(173, 173, 173);
		padding: 40px;
		border: 1px solid red;
	}
</style>
