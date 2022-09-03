<template>
  <div id="app">
    <Header subtitle="Welcome to MyMovieApp!"/>
    <img class="img" src="../assets/favicon.jpg">
    <hr>
    <br>
    <div class="container">
    <h3 @click="movies">Movies</h3>
    <h3 @click="shows">Shows</h3>
    <h3 @click="standups">Standups</h3>
    <h3 @click="animes">Animes</h3>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'

  export default {
    name: 'Home',
    
    components: {
      Header
    },

    methods:{
      movies(){
        this.$router.push({ name: 'MovieDepartment' })
      },
      shows(){
        this.$router.push({ name: 'ShowDepartment' })
      },
      standups(){
        this.$router.push({ name: 'StandupDepartment' })
      },
      animes(){
        this.$router.push({ name:'AnimeDepartment'})
      },
    }
  }
</script>

<style scoped>

.container{
  position:fixed;
  display:flex;
  flex-direction:row;
  justify-content: space-around;
}
.img{
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.s{
  min-height:500px;
}
</style>
