<template>
    <div class="movies">
      <div class="movie" v-for="movie in getMovies" :key="movie.id">
        <div class="card" style="width: 15rem;">
           <img src="https://img.freepik.com/premium-vector/clapper-film-movie-icon-design_24877-23150.jpg" style="width: 15rem; align-self: center;"/>
           <ul class="list">
            <li>Title: <b>{{ movie.title }}</b> ({{movie.year}})</li>
            <li>Genre: {{ movie.genre }}</li>
            <li>Main Actor: {{ movie.mainActor}}</li>
            <li>Rating: {{ movie.rating}}</li>
           </ul>
           <div class="btn">
            <button>Edit</button>
            <button @click="deleteMovie(movie)">Delete</button>
           </div>
        </div>
      </div>
    </div>
</template>

<script>

import {mapActions , mapState, mapGetters, mapMutations} from 'vuex'

export default {
  name: 'Movies',

  computed: {
    ...mapState(['movies']),
    ...mapGetters(['getMovies'])
  },
  methods: {
    ...mapActions(['GET_MOVIES']),
    ...mapMutations(['removeMovie','searchMovie']),

    deleteMovie(m) {
      this.removeMovie(m)
    },

    search(){
      this.searchMovie(this.searchMovie)
    }
  },
  mounted() {
    this.GET_MOVIES() 
  }
}
</script>

<style scoped>

.card {
  padding: 20px ;
  margin: 20px;
  background: #101010;
  color:#a4a4a4;
  width:250px;
  height:400px;
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
