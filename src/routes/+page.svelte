<script>
	export let data
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#if data.user}
	<pre>{JSON.stringify(data.user)}</pre>
{/if}
<ul>
	<li>
		<a href="/signup">Signup</a>
	</li>
	<li><a href="/login">Login</a></li>
	<li><a href="/logout">Logout</a></li>
</ul>
