<template>
  <div id="app">
    <Header subtitle="Home"/>
    <h2>Movies</h2>
    <section class="s"><Movies /></section>
    <hr>
    <h2>Shows</h2>
    <section class="s"><Shows /></section>
    <hr>
    <h2>Standups</h2>
    <section class="s"><Standups /></section>
    <hr>
    <h2>Animes</h2>
    <section class="s"><Animes /></section>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Movies from '@/components/Movies.vue';
  import Shows from '@/components/Shows.vue';
  import Standups from '@/components/Standups.vue';
  import Animes from '@/components/Animes.vue';

  export default {
    name: 'Home',
    
    components: {
      Header,
      Movies: Movies,
      Shows: Shows,
      Standups: Standups,
      Animes: Animes
    }
  }
</script>

<style scoped>
.s{
  min-height:500px;
}
</style>
