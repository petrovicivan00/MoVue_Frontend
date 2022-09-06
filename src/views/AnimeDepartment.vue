<template>
  <div id="app">
    <Header subtitle="Animes"/>
    <Animes />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Animes from '@/components/Animes.vue';
  import {mapActions} from 'vuex'

  export default {
    name: 'AnimeDepartment',
    
    components: {
      Header,
      Animes
    },
    methods:{
      ...mapActions(['GET_ANIMES'])
    },
    mounted() {
      this.GET_ANIMES()
    }

  }
</script>
