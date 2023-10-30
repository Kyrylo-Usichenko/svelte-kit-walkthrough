<script>
	import { page } from '$app/stores';
	import routes from '$lib/utils/routes';
	import NavigationButtons from '../lib/components/navigation/NavButtons.svelte';
	import Header from './Header.svelte';
	import './styles.css';

	$: currentPage = routes.find((route) => route.path === $page.url.pathname);

	$: console.log(
		`Hey, your "${currentPage?.name}" page is mounted!, your path is ${$page.url.pathname}`
	);
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<NavigationButtons />
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
