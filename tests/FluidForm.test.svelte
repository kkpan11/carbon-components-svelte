<script lang="ts">
  import {
    FluidForm,
    TextInput,
    PasswordInput,
  } from "carbon-components-svelte";
</script>

<FluidForm action="" method="get">
  <TextInput labelText="User name" placeholder="Enter user name..." required />
  <PasswordInput
    required
    type="password"
    labelText="Password"
    placeholder="Enter password..."
  />
</FluidForm>
