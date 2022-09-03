<template>
    <div class="animes">
      <div class="anime" v-for="anime in getAnimes" :key="anime.id">
        <div class="card" style="width: 15rem;">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Anime_film_icon.svg/1200px-Anime_film_icon.svg.png" style="width: 14rem; align-self: center;"/>
           <ul class="list">
            <li>Title: <b>{{ anime.title }}</b> ({{anime.year}})</li>
            <li>S{{ anime.season}}E{{ anime.episode}}</li>
            <li>Creator: {{ anime.creator }}</li>
            <li>Rating: {{ anime.rating}}</li>
           </ul>
           <div class="btn">
            <button @click="playAnime(anime)" v-if="token">Play</button>
           </div>
        </div>
      </div>
    </div>
</template>

<script>

import {mapActions , mapState, mapMutations, mapGetters} from 'vuex'

export default {
  name: 'Animes',

  computed: {
     ...mapState(['animes','token']),
    ...mapGetters(['getAnimes'])
  },
  methods: {
    ...mapActions(['GET_ANIMES']),
    ...mapMutations(['removeAnime','searchAnime', 'setAnime']),

    playAnime(a) {
      this.setAnime(a),
      this.$router.push({ name: 'SingleAnime' });
    },
    deleteAnime(a) {
      this.removeAnime(a)
    }
  },
  mounted() {
    this.GET_ANIMES()
  }
}
</script>

<style scoped>

.btn{
  width:200px;
  position:absolute;
  bottom:0;
  align-content: space-around;
}
.card {
  padding: 20px ;
  margin: 20px;
  background: #101010;
  color:#a4a4a4;
  width:250px;
  height:450px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  margin-right:10px;
  margin-bottom: 15px;
  float: left;
}
.list{
  list-style-type: none; 
  padding: 0;
  margin: 0;

}

</style>
