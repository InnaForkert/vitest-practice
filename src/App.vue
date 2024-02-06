<script setup lang="ts">
import Pokemon from './components/Pokemon.vue';
import View from './components/View.vue'
</script>

<template>
  <View element="div" ariaLabel="ariaLabel" :isDisabled="false">
    Hi
  </View>
  <Pokemon/>
</template>

<style scoped>

</style>
