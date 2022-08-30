<template>
  <div id="app">
    <Header subtitle="Movies"/>
    <Movies />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Movies from '@/components/Movies.vue';

  export default {
    name: 'MovieDepartment',
    
    components: {
      Header,
      Movies
    }
  }
</script>
