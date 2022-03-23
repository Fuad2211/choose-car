import CarData from '@/logic/CarData'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    numOfCarsCreated:0
  },
  mutations: {
    addCar (state,newCar:CarData) {
      state.numOfCarsCreated++;
      state.cars.push(newCar);
    }
  },
  getters:{
    cars(state):CarData[]{
      return state.cars;
    }
  },
  actions: {
  },
  modules: {
  }
})
