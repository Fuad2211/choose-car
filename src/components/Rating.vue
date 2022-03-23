<template>
  <div >
   <ul>
     <li :style="{background: ratingData.color}">
       <button type="button" @click="giveRating">Poor</button></li>
   </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import RatingData from "@/logic/RatingData";


@Component
export default class Rating extends Vue {  
  @Prop({required:true}) ratingData!: RatingData;

  colors: string[] = ["blue", "green"]; 
  colorIndex = 0;

 giveRating(){
   this.colorIndex = (this.colorIndex +1)  % this.colors.length;
   this.ratingData.color = this.colors[this.colorIndex]
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
