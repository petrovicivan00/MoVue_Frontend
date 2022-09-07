<template>
  <div id="app">
    <Header :subtitle="subtitle"/>
    <Show :show="show"/>
    <hr>
    <Comments :obj="show" />
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import Show from '@/components/Show.vue';
  import Comments from '@/components/Comments.vue';
  import { mapGetters, mapActions} from 'vuex';

  export default {
    name: 'SingleShow',

    components: {
      Header,
      Show,
      Comments
    },

    data() {
      return {
        show: [],
        subtitle: ''
      }
    },
    computed: {
        ...mapGetters(['getShow'])
    },
    methods:{
      ...mapActions(['GET_COMMENTS'])
    },
    mounted() {
        this.show = this.getShow
        this.subtitle = this.show.title
        this.GET_COMMENTS()
    }
  }
</script>