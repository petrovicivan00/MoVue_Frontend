<template>
  <div id="app">
    <Header subtitle="Movies"/>
    <Movies />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Movies from '@/components/Movies.vue';
  import {mapActions} from 'vuex'
  
  export default {
    name: 'MovieDepartment',
    
    components: {
      Header,
      Movies
    },
    methods:{
      ...mapActions(['GET_MOVIES'])
    },
    mounted(){
      this.GET_MOVIES()
    }
  }
</script>
