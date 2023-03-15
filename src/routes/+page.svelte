<script>
	import Card from "$lib/components/Card.svelte";
	import DailyForecast from "$lib/components/DailyForecast.svelte";
	import Search from "$lib/components/Search.svelte";

	let searched = false
	setTimeout(() => {
		searched = true
	}, 2000);
</script>

<div class="transition-opacity duration-500 ease-in-out min-h-screen w-screen flex flex-col items-center justify-center px-5 bg-zinc-700 overflow-hidden">
	<Search/>
	{#if searched}
		<Card/>
		<DailyForecast/>
	{/if}
</div>
