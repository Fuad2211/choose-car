<template>
  <div class="car-container" :style="{ background: carData.color }">
   
      <input type="text" class="car-field" v-model="carData.name" />

    <div class="car-item">
      <select id="car" name="carSelect" v-model.number="carData.doors">
        <option value="2">2 doors</option>
        <option value="3">3 doors</option>
        <option value="4">4 doors</option>
        <option value="5">5 doors</option>
      </select>
    </div>
    <button type="button"  @click="changeColor" class="carData-color">Change color</button>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CarData from "@/logic/CarData";

@Component
export default class Car extends Vue {  
  @Prop({required:true}) carData!: CarData;

  colors: string[] = ["red", "blue", "green", "black"];
  colorIndex = 0;

 
  changeColor() {
    this.colorIndex = (this.colorIndex + 1) % this.colors.length;
    this.carData.color = this.colors[this.colorIndex];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.car-item{
  margin: 10px;
  padding: 10px;
}
</style>
