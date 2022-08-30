<template>
  <div id="app">
    <Header subtitle="Standups"/>
    <Standups />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Standups from '@/components/Standups.vue';

  export default {
    name: 'StandupDepartment',
    
    components: {
      Header,
      Standups
    }
  }
</script>
