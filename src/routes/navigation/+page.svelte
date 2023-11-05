<script>
	import routes from './routes';

	const otherRoutes = routes.filter((route) => route.name !== 'Navigation');
</script>

<div class="pages">
	{#each otherRoutes as route}
		<a class="link" href={route.path}>
			{route.name}
		</a>
	{/each}
</div>

<style>
	.pages {
		display: flex;
		flex-direction: column;
	}

	.link {
		width: fit-content;
		font-size: 18px;
		padding: 5px;
	}

	.active {
		font-weight: bold;
	}
</style>
