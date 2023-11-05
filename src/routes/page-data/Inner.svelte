<script>
	import { page } from '$app/stores';
</script>

<div class="inner">
	<h4><b>Inner</b> is immitating deep component</h4>
	<p>Here is articles from store</p>
	<div>
		{#each $page.data.articles as article}
			<h2>{article.title}</h2>
			<p>{article.content}</p>
		{/each}
	</div>
</div>

<style>
	.inner {
		padding: 10px;
		background: rgb(116, 116, 116);
		border: 1px solid red;
	}
</style>
