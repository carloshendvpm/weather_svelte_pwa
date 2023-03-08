<script>
  export let icon;
</script>
<div class="bg-zinc-800 flex flex-col p-7 justify-between min-h-fit rounded pb-10 w-2/5 max-w-xl min-w-fit">
  <div class="header w-full flex justify-between items-center mb-10">
    <div class="text-white text-xl">
      <p class="font-bold text-2xl">Recife, PE</p>
      <p class="font-semibold">Tue, 7 - broken clouds </p>

    </div>
    <img src={icon} class="w-20 h-20 mr-2" alt="sun img">
  </div>
  <div class="flex w-full justify-between items-center gap-2 md:gap-20">
    <p class="text-8xl font-semibold text-white">26<span class="text-4xl font-normal">ºC</span></p>
    <div class="details text-white font-medium">
      <h3>Details</h3>
      <p>Feels Like: 26.02ºC</p>
      <p>Humidity: 11%</p>
      <p>Pressure: 1013hPs</p>
    </div>
  </div>
</div>
<style>

</style>