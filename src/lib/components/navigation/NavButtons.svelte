<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import routes from '$lib/utils/routes';

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
	<button on:click={previousPage} disabled={isFirstPage}>Previous Page</button>
	<button on:click={nextPage} disabled={isLastPage}> Next Page </button>
</div>

<style>
	.navigation {
		margin: 0 auto;
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
