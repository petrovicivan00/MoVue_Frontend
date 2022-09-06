<template>
  <div id="app">
    <Header subtitle="Standups"/>
    <Standups />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Standups from '@/components/Standups.vue';
  import {mapActions} from 'vuex'


  export default {
    name: 'StandupDepartment',
    
    components: {
      Header,
      Standups
    },
    methods:{
      ...mapActions(['GET_STANDUPS'])
    },
    mounted() {
      this.GET_STANDUPS()
    }
  }
</script>
