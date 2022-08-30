import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    shows: [],
    standups: [],
    animes: [],
    loading: false,
    error: null,
    token: ''
  },
  getters: {  
    getMovies: state => state.movies,
    getShows: state => state.shows,
    getStandups: state => state.standups,
    getAnimes: state => state.animes,
    user: state => state.user
  },
  mutations: {

    setMovies: (state,movies) => state.movies = movies,
    newMovie: () => alert('movie added'),
    removeMovie: (state,movie) => state.movies = state.movies.filter(m => m !== movie),
    setMovie: (state,movie) => state.movie.push(movie),
    searchMovie: (state,search) => state.movies = state.movies.filter(movie => movie.title.includes(search)),

    setShows: (state,shows) => state.shows = shows,
    newShow: () => alert('show added'),
    removeShow: (state ,show) => state.shows = state.shows.filter(s => s !== show),
    setShow: (state,show) => state.shows.push(show),
    searchShow: (state,) => state.shows = state.shows.filter(show => show.title.includes(search)),

    setStandups: (state,standups) => state.standups = standups,
    newStandup: () => alert('standup added'),
    removeStandup: (state ,standup) => state.standups = state.standups.filter(s => s !== standup),
    setStandup: (state,standup) => state.standup.push(standup),
    searchStandup: (state,search) => state.standups = state.standups.filter(standup => standup.title.includes(search)),

    setAnimes: (state,animes) => state.animes = animes,
    newAnime: () => alert('anime added'),
    removeAnime: (state ,anime) => state.animes = state.animes.filter(a => a !== anime),
    setAnime: (state,anime) => state.anime.push(anime),
    searchAnime: (state,search) => state.animes = state.animes.filter(anime => anime.title.includes(search)),

    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },

    addComment(state, obj) {
      const image = state.items.filter( item => item.objectID == obj.artId )[0];
      if (image) {
        image.comments.push(obj.comment);
      }
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
  fetch('http://localhost:3000/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj)
  }).then( res => res.json() )
    .then( tkn => commit('setToken', tkn.token) );
  },
  async login({ commit }, obj) {
  fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj)
}).then( res => res.json() )
  .then( tkn => {
    if (tkn.msg) {
      alert(tkn.msg);
    } else {
      commit('setToken', tkn.token)
    }
  });
  },
  socket_comment({ commit }, msg) {
      const comment = JSON.parse(msg);
      commit('addComment', { artId: comment.artId, comment: comment });
  }
}      
})
