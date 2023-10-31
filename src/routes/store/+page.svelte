<script>
	import Wrapper from './Wrapper.svelte';
	export let data;
</script>

<div class="page">
	<h1>Page</h1>
	<h2>Here is our content <b>as page props:</b></h2>
	<div>
		{#each data.articles as article}
			<h2>{article.title}</h2>
			<p>{article.content}</p>
		{/each}
	</div>
	<Wrapper />
</div>

<style>
	.page {
		padding: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		background: rgb(198, 198, 198);
		border: 1px solid #000;
	}
</style>
