<script>
  let flagLocal = false;
</script>

<style>
  .check-label-on {
    color: rgb(172, 42, 26);
  }
  .check-label-off {
    color: rgba(0, 0, 0, 0.2);
  }
</style>

<div><div><div>
  <div>
    <p class="{ !flagLocal ? 'check-label-off' : 'check-label-on' }">CHECKED</p>
    <input type="text" value="{ !flagLocal ? 'clear' : 'checked' }">
  </div>
  <div>
    <input type="checkbox" bind:checked={ flagLocal }>
  </div>
</div></div></div>
