<template>
  <div id="app">
    <Header subtitle="Shows"/>
    <Shows />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Shows from '@/components/Shows.vue';

  export default {
    name: 'ShowDepartment',
    
    components: {
      Header,
      Shows
    }
  }
</script>
