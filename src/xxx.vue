<template>
  <div>
  <button @click="show =! show"> show the details</button>

  <div v-if="show"> this's inof...</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>