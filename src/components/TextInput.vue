<template>
  <v-container>
    <label for="text">Комментарий</label>
    <input
      type="text"
      id="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </v-container>

</template>

<script>
export default {
  name: "TextInput",
  props: ['value']
};
</script>

<style scoped>

</style>
