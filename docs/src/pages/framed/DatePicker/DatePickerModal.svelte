<script>
  import {
    Button,
    Modal,
    DatePicker,
    DatePickerInput,
  } from "carbon-components-svelte";

  let open = false;
</script>

<Button on:click={() => (open = true)}>Select date</Button>

<Modal
  bind:open
  modalHeading="Meeting date"
  primaryButtonText="Confirm"
  secondaryButtonText="Cancel"
  on:click:button--secondary={() => (open = false)}
>
  <DatePicker datePickerType="single" style="min-height: 420px">
    <DatePickerInput labelText="Meeting date" placeholder="mm/dd/yyyy" />
  </DatePicker>
</Modal>
