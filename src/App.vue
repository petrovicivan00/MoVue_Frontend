<template>
  <div id="app">
    <div>
      <b-navbar toggleable="sm" type="light" variant="danger">
        <b-navbar-brand to="/">MyMovieApp</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>

            <b-nav-item-dropdown text="Library">
              <b-dropdown-item to="/movies">Movies</b-dropdown-item>
              <b-dropdown-item to="/shows">Shows</b-dropdown-item>
              <b-dropdown-item to="/standups">Standups</b-dropdown-item>
              <b-dropdown-item to="/animes">Animes</b-dropdown-item>
            </b-nav-item-dropdown>
       <!-- <b-nav-item v-if="moderator" to="/add">Add</b-nav-item>
            <b-nav-item v-else-if="admin" to="/add">Add</b-nav-item> --> 
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="!token" to="/register">Register</b-nav-item>
            <b-nav-item v-if="!token" to="/login">Log In</b-nav-item>
            <b-nav-item v-else @click="logout()">Log Out</b-nav-item>
            <b-nav-form>
              <b-form-input v-model="search" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button  @click="browse()" size="sm" class="my-2 my-sm-0" color="black" type="button">Search</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view class="stranica" />
  </div>
</template>

<script>

  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    name: 'App',

    data() {
      return {
        search: '',
      }
    },

    methods: {
      ...mapActions(['GET_MOVIES','GET_SHOWS','GET_STANDUPS','GET_ANIMES']),

      ...mapMutations([
        'removeToken',
        'setToken',
        'searchMovie',
        'searchShow',
        'searchStandup',
        'searchAnime'
      ]),

      logout() {
        this.removeToken();
      },
      browse(){
        this.searchMovie(this.search);
        this.searchShow(this.search);
        this.searchStandup(this.search);
        this.searchAnime(this.search);
      }
    },

    computed: {
      ...mapState([
        'token'
      ]),
    },

    mounted() {
      if (localStorage.token) {
        this.setToken(localStorage.token);
      }
      this.GET_MOVIES()
      this.GET_SHOWS()
      this.GET_STANDUPS()
      this.GET_ANIMES()
    },

    sockets: {
      error(err) {
        alert(err);
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-bottom: 10px;
  }

  .stranica {
    width: 80%;
    margin-left: 10%;
  }
</style>
