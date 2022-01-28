<template>
  <div id="app">
    <button @click="addNewCar">New Car</button>
    <Car v-for="car in cars" :key="car.name" :carData="car"> </Car>
    <div>{{cars[0].color}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Car from "./components/Car.vue";
import CarData from "./logic/CarData";

@Component({
  components: {
    Car,
  },
})
export default class App extends Vue {  
  cars: CarData[] = [];

  addNewCar() {
    const newCar = new CarData(5, "red", "new car");
    this.cars.push(newCar);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
