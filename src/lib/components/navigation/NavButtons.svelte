<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import routes from '../../../routes/navigation/routes';

	$: currentPage = $page.url.pathname;
	$: currentPageIndex = routes.findIndex((route) => route.path === currentPage);
	$: isFirstPage = currentPage === routes[0].path;
	$: isLastPage = currentPage === routes[routes.length - 1].path;

	function nextPage() {
		const nextRoute = routes[currentPageIndex + 1];
		goto(nextRoute.path);
	}

	function previousPage() {
		const previousRoute = routes[currentPageIndex - 1];
		goto(previousRoute.path);
	}
</script>

<div class="navigation">
	<button on:click={previousPage} disabled={isFirstPage}>
		{#if isFirstPage}
			Home
		{:else}
			{routes[currentPageIndex - 1].name}
		{/if}
	</button>
	<button on:click={nextPage} disabled={isLastPage}>
		{#if isLastPage}
			{routes[routes.length - 1].name}
		{:else}
			{routes[currentPageIndex + 1].name}
		{/if}
	</button>
</div>

<style>
	.navigation {
	background: var(--color-bg-0);
		margin: 0 auto;
		padding: 10px 10px;
		position: fixed;
		bottom: 0;
		left: 0;
		width: calc(100% - 20px);
		display: flex;
		justify-content: space-between;
		& button {
			padding: 10px 15px;
			background: var(--color-theme-1);
			color: var(--color-text);
			border-radius: 5px;
			border: none;
			cursor: pointer;
			&:disabled {
				cursor: not-allowed;
				opacity: 0.5;
			}
		}
	}
</style>
