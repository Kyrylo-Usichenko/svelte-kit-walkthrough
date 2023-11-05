<script>
	import { page } from '$app/stores';
	import Logo from '$lib/components/logo/Logo.svelte';
</script>

<header>
	<div class="corner">
		<a href="/">
			<Logo />
		</a>
	</div>

	{#if $page.route.id !== '/navigation'}
		<a href="/navigation" class="navigation">Go to navigation </a>
	{/if}

	<div />
</header>

<style>
	header {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		height: 32px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.corner {
		position: absolute;
		left: 0;
		top: 0;
		width: 32px;
		height: 32px;
		& svg {
			width: 32px;
			height: 32px;
		}
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	.navigation {
		font-size: 20px;
	}
</style>
