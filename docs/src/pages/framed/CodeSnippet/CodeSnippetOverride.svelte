<script>
  import copy from "clipboard-copy";
  import { CodeSnippet } from "carbon-components-svelte";
</script>

<CodeSnippet
  code="npm i carbon-components-svelte"
  copy={(text) => copy(text)}
/>
