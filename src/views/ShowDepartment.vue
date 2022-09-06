<template>
  <div id="app">
    <Header subtitle="Shows"/>
    <Shows />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Shows from '@/components/Shows.vue';
  import {mapActions} from 'vuex'

  export default {
    name: 'ShowDepartment',
    
    components: {
      Header,
      Shows
    },
    methods:{
      ...mapActions(['GET_SHOWS'])
    },
    mounted(){
      this.GET_SHOWS()
    }
  }
</script>
