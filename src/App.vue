<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'
import {useBMIStore} from "./stores/BMIStore.js";
import {storeToRefs} from "pinia";
import {ref} from "vue";

const BMIStore = useBMIStore();
// the bmi value saved locally to the component. This is set to the calculated bmi value every time the
// calculate button is pressed.
const localBMI = ref(-1);
const {calculatedBMI, units} = storeToRefs(BMIStore);

const onNotifyCalculatePressed = () => {
  localBMI.value = calculatedBMI.value;
}
</script>

<template>
  <h1>Body Mass Index Calculator</h1>
  <input v-model="units" value="metric" id="metric-units" type="radio">
  <label for="metric-units">Metric Units</label>

  <input v-model="units" value="american" id="american-units" type="radio">
  <label for="american-units">American Units</label>

  <BodyMassIndexForm v-on:notify-calculate-pressed="onNotifyCalculatePressed"/>
  <p v-if="localBMI > 0">Your BMI is: {{localBMI}}</p>
</template>

<style scoped>

</style>
