<template>
  <div id="app">
    <Header :subtitle="subtitle"/>
    <Movie v-if="movie" :movie="movie" />
    <Comments v-if="movie" :movie="movie" />
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import Movie from '@/components/Movie.vue';
  import Comments from '@/components/Comments.vue';
  import { mapGetters} from 'vuex';

  export default {
    name: 'SingleMovie',

    components: {
      Header,
      Movie,
      Comments
    },

    data() {
      return {
        movie: null,
        subtitle: ''
      }
    },
    computed: {
        ...mapGetters(['getMovie'])
    },

    mounted() {
      this.getMovie(this.$route.params.id).then( res => {
        this.movie = res;
        this.subtitle = this.movie.title;
      });
    }
  }

</script>