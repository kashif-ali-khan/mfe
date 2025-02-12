<template>
    <div id="app">
      <h1>Vue Remote Application</h1>
      <VueButton />
    </div>
  </template>
  
  <script>
  import VueButton from './components/VueButton.vue'
  
  export default {
    name: 'App',
    components: {
      VueButton
    }
  }
  </script>