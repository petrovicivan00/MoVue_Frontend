<template>
  <div id="app">
    <Header subtitle="Animes"/>
    <Animes />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Animes from '@/components/Animes.vue';

  export default {
    name: 'AnimeDepartment',
    
    components: {
      Header,
      Animes
    }
  }
</script>
