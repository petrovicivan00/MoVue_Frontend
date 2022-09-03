import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movie:[],
    movies: [],
    shows: [],
    show:[],
    standups: [],
    standup:[],
    animes: [],
    anime:[],
    admin:'',
    moderator:'',
    token: ''
  },
  getters: {  
    getMovies: state => state.movies,
    getMovie: state => state.movie,
    getShows: state => state.shows,
    getShow: state => state.show,
    getStandups: state => state.standups,
    getStandup: state => state.standup,
    getAnimes: state => state.animes,
    getAnime: state => state.anime,
    getAdmin: state => state.admin,
    getModerator: state => state.moderator
  },
  mutations: {

    setMovies: (state,movies) => state.movies = movies,
    newMovie: () => alert('movie added'),
    removeMovie: (state,movie) => state.movies = state.movies.filter(m => m !== movie),
    addMovie: (state,movie) => state.movies.push(movie),
    searchMovie: (state,search) => state.movies = state.movies.filter(movie => movie.title.includes(search)),
    setMovie: (state,movie) => state.movie = movie,

    setShows: (state,shows) => state.shows = shows,
    newShow: () => alert('show added'),
    removeShow: (state ,show) => state.shows = state.shows.filter(s => s !== show),
    addShow: (state,show) => state.shows.push(show),
    searchShow: (state,) => state.shows = state.shows.filter(show => show.title.includes(search)),
    setShow: (state,show) => state.show = show,

    setStandups: (state,standups) => state.standups = standups,
    newStandup: () => alert('standup added'),
    removeStandup: (state ,standup) => state.standups = state.standups.filter(s => s !== standup),
    addStandup: (state,standup) => state.standups.push(standup),
    searchStandup: (state,search) => state.standups = state.standups.filter(standup => standup.title.includes(search)),
    setStandup: (state,standup) => state.standup = standup,

    setAnimes: (state,animes) => state.animes = animes,
    newAnime: () => alert('anime added'),
    removeAnime: (state ,anime) => state.animes = state.animes.filter(a => a !== anime),
    addAnime: (state,anime) => state.animes.push(anime),
    searchAnime: (state,search) => state.animes = state.animes.filter(anime => anime.title.includes(search)),
    setAnime: (state,anime) => state.anime = anime,

    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },
    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },
    setAdmin(state,admin){
      state.admin = admin;
      localStorage.admin = admin;
    },
    setModerator(state){
      state.moderator = moderator;
      localStorage.moderator = moderator;
    },
    removeAdmin(state) {
      state.admin = '';
      localStorage.token = '';
    },
    removeModerator(state) {
      state.moderator = '';
      localStorage.moderator = '';
    }
  },

  actions: {
    async GET_MOVIES({commit}) {
      await axios
          .get('http://localhost:3000/api/movies')
          .then((response) => {
              const movies = response.data
              commit("setMovies",movies)
              console.log(movies)
          })
          .catch((err) => {
              alert(err)
          })
    },
    async addMovie({ commit },payload){
      await axios
        .post('http://localhost:3000/api/movies',{ 
          title: payload.title,
          year: payload.year,
          genre: payload.genre,
          mainActor: payload.mainActor,
          rating: payload.rating
       })
        .then((response) => {
          console.log(response.data)
          commit('')
       })
        .catch((err) => {
          alert(err)
       })
   },
   async deleteOneMovie({ commit }, id) {
    await axios
      .delete(`http://localhost:3000/api/movies/${id}`)
      .then((response) => {
        console.log(response.data)
        commit('removeMovie',title)
     })
      .catch((err) => {
        alert(err)
     })
   },
  async searchMovie({ commit },title) {
    await axios
     .get(`http://localhost:3000/api/movies/${title}`)
     .then((response) => {
        const movie = response.data
        commit('setMovie',movie)
      })
    .catch((err) => {
        alert(err)
      })
   },
   async GET_SHOWS({commit}) {
    await axios
        .get('http://localhost:3000/api/shows')
        .then((response) => {
            const shows = response.data
            commit("setShows",shows)
            console.log(shows)
        })
        .catch((err) => {
            alert(err)
        })
  },
  async addShow({ commit },payload){
    await axios
      .post('http://localhost:3000/api/shows',{ 
        title: payload.title,
        year: payload.year,
        genre: payload.genre,
        season: payload.season,
        episode: payload.episode,
        rating: payload.rating
     })
      .then((response) => {
        console.log(response.data)
        commit('')
     })
      .catch((err) => {
        alert(err)
     })
 },
 async deleteOneShow({ commit }, id) {
  await axios
    .delete(`http://localhost:3000/api/shows/${id}`)
    .then((response) => {
      console.log(response.data)
      commit('removeShow',title)
   })
    .catch((err) => {
      alert(err)
   })
 },
  async searchShow({ commit },title) {
  await axios
   .get(`http://localhost:3000/api/shows/${title}`)
   .then((response) => {
      const show = response.data
      commit('setShow',show)
    })
  .catch((err) => {
      alert(err)
    })
  },
  async GET_STANDUPS({commit}) {
  await axios
      .get('http://localhost:3000/api/standups')
      .then((response) => {
          const standups = response.data
          commit("setStandups",standups)
          console.log(standups)
      })
      .catch((err) => {
          alert(err)
      })
  },
  async addStandup({ commit },payload){
  await axios
    .post('http://localhost:3000/api/standups',{ 
      title: payload.title,
      year: payload.year,
      mainActor: payload.mainActor,
      rating: payload.rating
   })
    .then((response) => {
      console.log(response.data)
      commit('')
   })
    .catch((err) => {
      alert(err)
   })
  },
  async deleteOneStandup({ commit }, id) {
await axios
  .delete(`http://localhost:3000/api/standups/${id}`)
  .then((response) => {
    console.log(response.data)
    commit('removeStandup',title)
 })
  .catch((err) => {
    alert(err)
 })
  },
  async searchStandup({ commit },title) {
await axios
 .get(`http://localhost:3000/api/standups/${title}`)
 .then((response) => {
    const standup = response.data
    commit('setStandup',standup)
  })
.catch((err) => {
    alert(err)
  })
  },
  async GET_ANIMES({commit}) {
  await axios
      .get('http://localhost:3000/api/animes')
      .then((response) => {
          const animes = response.data
          commit("setAnimes",animes)
          console.log(animes)
      })
      .catch((err) => {
          alert(err)
      })
  },
  async addAnime({ commit },payload){
  await axios
    .post('http://localhost:3000/api/animes',{ 
      title: payload.title,
      year: payload.year,
      genre: payload.genre,
      creator: payload.creator,
      season: payload.season,
      episode: payload.episode,
      rating: payload.rating
   })
    .then((response) => {
      console.log(response.data)
      commit('')
   })
    .catch((err) => {
      alert(err)
   })
  },
  async deleteOneAnime({ commit }, id) {
await axios
  .delete(`http://localhost:3000/api/animes/${id}`)
  .then((response) => {
    console.log(response.data)
    commit('removeAnime',title)
 })
  .catch((err) => {
    alert(err)
 })
  },
  async searchAnime({ commit },title) {
await axios
 .get(`http://localhost:3000/api/animes/${title}`)
 .then((response) => {
    const anime = response.data
    commit('setAnime',anime)
  })
.catch((err) => {
    alert(err)
  })
  },
  async register({ commit }, obj) {
  fetch('http://localhost:2000/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj)
  }).then( res => res.json() )
    .then( tkn => commit('setToken', tkn.token) );
  },
  async login({ commit }, obj) {
    const parameters = {
      email: obj.email,
      password: obj.password,
    };
  fetch('http://localhost:2000/auth/login', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(parameters)
}).then( res => res.json() )
  .then( tkn => {
    if (tkn.msg) {
      alert(tkn.msg);
    } else {
      commit('setToken', tkn.token)
    }
  });
  }
}      
})
