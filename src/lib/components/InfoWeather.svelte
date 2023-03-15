<script>
  export let percentage;
  export let icon;
  export let type;
</script>
<div class="bg-zinc-800 drop-shadow-2xl shadow-[0px_22px_20px_4px_rgba(0,0,0,0.50)] transition duration-300 ease-in-out hover:scale-110 w-40 p-2.5 flex flex-col items-center gap-1 rounded border-zinc-400/50 text-center">
  <img src={icon} alt="" class="w-5">
  <p class="font-semibold text-sm">{percentage}</p>
  <p class="font-normal text-xs">{type}</p>
</div>