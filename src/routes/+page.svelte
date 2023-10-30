<script>
	import arrowDown from '$lib/images/arrow-down.svg';
	import logo from '$lib/images/svelte-welcome.webp';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Hello everyone, I will show how Svelte's basic features work.</h1>

	<img src={logo} alt="SvelteKit" class="welcome" />

	<h2>
		To navigate between pages, you can use the navigation menu at the top or the
		<b>"Next"</b>("Prev") buttons.
	</h2>

	<img src={arrowDown} alt="arrow-down" class="arrow" />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.arrow {
		width: 100px;
	}

	.welcome {
		width: 100%;
	}
</style>
