<template>
  <div id="app">
    <Header :subtitle="subtitle"/>
    <Movie :movie="movie"/>
    <hr>
    <Comments :obj="movie" />
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import Movie from '@/components/Movie.vue';
  import Comments from '@/components/Comments.vue';
  import { mapGetters, mapActions} from 'vuex';

  export default {
    name: 'SingleMovie',

    components: {
      Header,
      Movie,
      Comments
    },

    data() {
      return {
        movie: [],
        subtitle: ''
      }
    },
    computed: {
        ...mapGetters(['getMovie'])
    },
    methods:{
      ...mapActions(['GET_COMMENTS'])
    },
    mounted() {
        this.movie = this.getMovie
        this.subtitle = this.movie.title
        this.GET_COMMENTS()
    }
  }

</script>