<template>
  <div id="app">
    <Header subtitle="Add Streams"/>
    <div class="addMovies">
        <h2>Add Movies</h2>
      <form @submit="onMovieSubmit">
        <input type="text" v-model="movieTitle" placeholder="Title">
        <input type="year" v-model="movieYear" placeholder="Year">
        <input type="text" v-model="movieGenre" placeholder="Genre">
        <input type="text" v-model="movieMainActor" placeholder="Main Actor">
        <input type="number" min="0" max="10" step="0.1" v-model="movieRating" placeholder="Rating">
        <input type="submit" value="Submit">
      </form>
    </div>
    <hr>
    <div class="addShows">
        <h2>Add Shows</h2>
      <form @submit="onShowSubmit">
        <input type="text" v-model="showTitle" placeholder="Title">
        <input type="year" v-model="showYear" placeholder="Year">
        <input type="text" v-model="showGenre" placeholder="Genre">
        <input type="number" v-model="showSeason" placeholder="Season">
        <input type="number" v-model="showEpisode" placeholder="Episode">
        <input type="number" min="0" max="10" step="0.1" v-model="showRating" placeholder="Rating">
        <input type="submit" value="Submit">
      </form>
    </div>
    <hr>
    <div class="addStandups">
    <h2>Add Standups</h2>
      <form @submit="onStandupSubmit">
        <input type="text" v-model="standupTitle" placeholder="Title ">
        <input type="year" v-model="standupYear" placeholder="Year ">
        <input type="text" v-model="standupMainActor" placeholder="Main Actor ">
        <input type="number" min="0" max="10" step="0.1" v-model="standupRating" placeholder="Rating">
        <input type="submit" value="Submit">
      </form>
    </div>
    <hr>
    <div class="addAnimes">
    <h2>Add Animes</h2>
      <form @submit="onAnimeSubmit">
        <input type="text" v-model="animeTitle" placeholder="Title">
        <input type="year" v-model="animeYear" placeholder="Year">
        <input type="number" v-model="animeSeason" placeholder="Season">
        <input type="number" v-model="animeEpisode" placeholder="Episode">
        <input type="text" v-model="animeCreator" placeholder="Creator">
        <input type="number" min="0" max="10" step="0.1" v-model="animeRating" placeholder="Rating">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { mapActions } from 'vuex'

export default {

  name:"AddDepartment",
  components: {
      Header
    },

  data() {
    return {
      movieTitle: '',
      showTitle: '',
      standupTitle: '',
      animeTitle: '',
      movieYear:'',
      showYear:'',
      standupYear:'',
      animeYear:'',
      movieRating:'',
      showRating:'',
      standupRating:'',
      animeRating:'',
      showSeason:'',
      showEpisode:'',
      animeSeason:'',
      animeEpisode:'',
      movieMainActor:'',
      standupMainActor:'',
      movieGenre:'',
      showGenre:'',
      animeCreator:''
    }
  },
  methods: {  
    ...mapActions(['addMovie','addShow','addStandup','addAnime']),
    onMovieSubmit(){
      const payload = {
        title: this.movieTitle,
        year: this.movieYear,
        genre: this.movieGenre,
        mainActor: this.movieMainActor,
        rating: this.movieRating
      }
      this.addMovie(payload)
    },
    onShowSubmit(){
      const payload = {
        title: this.showTitle,
        year: this.showYear,
        genre: this.showGenre,
        season: this.showSeason,
        episode: this.showEpisode,
        rating: this.showRating
      }
      this.addShow(payload)
    },
    onStandupSubmit(){
      const payload = {
        title: this.standupTitle,
        year: this.standupYear,
        mainActor: this.standupMainActor,
        rating: this.standupRating
      }
      this.addStandup(payload)
    },
    onAnimeSubmit(){
      const payload = {
        title: this.animeTitle,
        year: this.animeYear,
        creator: this.animeCreator,
        season: this.animeSeason,
        episode: this.animeEpisode,
        rating: this.animeRating
      }
      this.addAnime(payload)
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
    padding: 40px;
  }

  input[type="text"]{
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
  }

  input[type="submit"]{
    flex: 2;
    max-width: 70px;
    background: #41b8;
    color: aliceblue;
    border: 1px #41b883 solid;
    cursor: pointer;
  }

</style>