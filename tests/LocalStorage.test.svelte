<script lang="ts">
  import { LocalStorage } from "carbon-components-svelte";

  let storage: LocalStorage;
  let toggled = false;
  let events: { event: string; detail?: any }[] = [];

  $: if (storage) storage.clearItem();
  $: if (storage) storage.clearAll();
</script>

<LocalStorage
  bind:this={storage}
  key="dark-mode"
  bind:value={toggled}
  on:save={() => {
    events = [...events, { event: "on:save" }];
  }}
  on:update={({ detail }) => {
    events = [...events, { event: "on:update", detail }];
  }}
/>
