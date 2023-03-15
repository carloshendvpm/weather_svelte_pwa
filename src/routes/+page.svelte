<script>
	import Card from "$lib/components/Card.svelte";
	import DailyForecast from "$lib/components/DailyForecast.svelte";
	import Search from "../lib/components/Search.svelte";
</script>

<div class="min-h-screen w-screen flex flex-col items-center justify-center px-5 bg-zinc-700">
	<Search/>
	<Card/>
	<DailyForecast/>
</div>
