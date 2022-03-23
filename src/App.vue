<template>
  <div id="app">
    <button @click="addNewCar">New Car</button>
    <div class="car-cpm">
      <Car
       v-for="car in cars" 
       :key="car.name" 
       :carData="car"
       ></Car>
      <!-- <div>{{cars[0].color}}</div> -->
    </div>
    <Rating></Rating>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Car from "./components/Car.vue";
import Rating from "./components/Rating.vue";
import CarData from "./logic/CarData";

@Component({
  components: {
    Car,
    Rating,
  },
})
export default class App extends Vue {
  //-------------------------------------------------------------------
  
  get cars(): CarData[] {
    return this.$store.getters.cars;  // i can sent the car array directly to the Veux
  }

  addNewCar() {
    const newCar = new CarData(5, "red", "new car");
    //this.cars.push(newCar);
    //this.$store.state.cars.push(newCar);  // this case only if you know you didnt mack any change on data and you will save it derectly
    this.$store.commit("addCar",newCar);  // some time you need to mack some change in the data before save it. so you must sent them to the mutation

  }
  //---------------------------------------------------------------------
  




}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.car-cpm {
  display: flex;
  margin: 20px;
  padding: 20px;
}


.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

</style>
