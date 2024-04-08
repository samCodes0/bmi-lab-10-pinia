<script setup>
import {useBMIStore} from "../stores/BMIStore.js";
import {storeToRefs} from "pinia";

const emit = defineEmits([
    'notify-calculate-pressed'
])

const bmiStore = useBMIStore();
// allow access to the height reactive data from the store
const {height, weight, units} = storeToRefs(bmiStore);

</script>

<template>
  <table>
    <tr>
      <td><label for="height-input">Height
        <!-- Using the v-if and v-else-if directives to choose different spans
         displaying either meters or inches -->
        <span v-if="units === 'metric'">(in meters)</span>
        <span v-else-if="units === 'american'">(in inches)</span></label></td>
      <td><input id="height-input" v-model="height" type="number"></td>
    </tr>
    <tr>
      <td><label for="weight-input">Weight
        <!-- Doing the same thing except with kilograms and pounds -->
        <span v-if="units === 'metric'">(in kilograms)</span>
        <span v-else-if="units === 'american'">(in pounds)</span></label></td>
      <td><input id="weight-input" v-model="weight" type="number"></td>
    </tr>
  </table>
  <br>
  <button v-on:click="emit('notify-calculate-pressed')">Calculate</button>
</template>

<style scoped>
table {
  /* making sure the table appears centered */
  margin: auto;
}
</style>