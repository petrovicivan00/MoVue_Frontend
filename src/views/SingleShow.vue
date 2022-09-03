<template>
  <div id="app">
    <Header :subtitle="subtitle"/>
    <Show :show="show"/>
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import Show from '@/components/Show.vue';
  //import Comments from '@/components/Comments.vue';
  import { mapGetters} from 'vuex';

  export default {
    name: 'SingleShow',

    components: {
      Header,
      Show: Show,
     // Comments
    },

    data() {
      return {
        show: null,
        subtitle: ''
      }
    },
    computed: {
        ...mapGetters(['getShow'])
    },
    mounted() {
        this.show = this.getShow
        this.subtitle = this.show.title
    }
  }

</script>