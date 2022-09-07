<template>
  <div id="app">
    <Header :subtitle="subtitle"/>
    <Anime :anime="anime"/>
    <hr>
    <Comments :obj="anime" />
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import Anime from '@/components/Anime.vue';
  import Comments from '@/components/Comments.vue';
  import { mapGetters, mapActions} from 'vuex';

  export default {
    name: 'SingleAnime',

    components: {
      Header,
      Anime,
      Comments
    },

    data() {
      return {
        anime: [],
        subtitle: ''
      }
    },
    computed: {
        ...mapGetters(['getAnime'])
    },
    methods:{
      ...mapActions(['GET_COMMENTS'])
    },
    mounted() {
        this.anime = this.getAnime
        this.subtitle = this.anime.title
        this.GET_COMMENTS()
    }
  }

</script>