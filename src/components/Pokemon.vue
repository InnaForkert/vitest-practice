<script lang="ts" setup>
import { ref } from 'vue';

interface Pokemon {
  name: string
}

const pokemons = ref<Pokemon[]>([]);

async function getPokemon() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const pokemon = await data.json()
  console.log(pokemon);
  pokemons.value = pokemon.results
}
</script>

<template>
  <button @click="getPokemon">Hey</button>
  <div class="" v-for="pokemon in pokemons" :key="pokemon.name">
    <h4 :key="pokemon.name">{{pokemon.name}}</h4>
  </div>
</template>

<style lang="postcss" scoped>
  
</style>
