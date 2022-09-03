<template>
  <div id="app">
    <Header :subtitle="subtitle"/>
    <Anime :anime="anime"/>
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import Anime from '@/components/Anime.vue';
  //import Comments from '@/components/Comments.vue';
  import { mapGetters} from 'vuex';

  export default {
    name: 'SingleAnime',

    components: {
      Header,
      Anime,
     // Comments
    },

    data() {
      return {
        anime: null,
        subtitle: ''
      }
    },
    computed: {
        ...mapGetters(['getAnime'])
    },
    mounted() {
        this.anime = this.getAnime
        this.subtitle = this.anime.title
    }
  }

</script>