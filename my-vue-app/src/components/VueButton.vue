<template>
    <button @click="increment">
      Vue Button clicked {{ count }} times
    </button>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'VueButton',
    setup() {
      const count = ref(0)
      
      const increment = () => {
        count.value++
      }
  
      return {
        count,
        increment
      }
    }
  }
  </script>