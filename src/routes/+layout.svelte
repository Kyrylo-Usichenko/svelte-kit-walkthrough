<script>
	import { page } from '$app/stores';
	import NavigationButtons from '$lib/components/navigation/NavButtons.svelte';
	import Header from './Header.svelte';
	import routes from './navigation/routes';

	import './styles.css';

	$: currentPage = routes.find((route) => route.path === $page.url.pathname);

	$: console.log(
		`Hey, your "${currentPage?.name}" page is mounted!, your path is ${$page.url.pathname}`
	);
</script>

<div class="app">
	<Header />

	<main class="main">
		<div class="container">
			<h1 class="title">{currentPage?.name}</h1>
			<slot />
		</div>
	</main>

	<footer>
		<NavigationButtons />
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 100vh;
	}

	.main {
		margin: 52px auto 0;
		overflow: auto;
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 64rem;
		box-sizing: border-box;
	}

	.title {
		margin: 10px auto;
	}
</style>
