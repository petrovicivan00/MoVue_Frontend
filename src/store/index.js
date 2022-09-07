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
    comments:[],
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
  },
  mutations: {

    setMovies: (state,movies) => state.movies = movies,
    newMovie: () => alert('movie added'),
    removeMovie: (state,movie) => state.movies = state.movies.filter(m => m !== movie),
    addMovie: (state,movie) => state.movies.push(movie),
    setMovie: (state,movie) => state.movie = movie,
    searchMovie: (state,search) => state.movies = state.movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())),

    setShows: (state,shows) => state.shows = shows,
    newShow: () => alert('show added'),
    removeShow: (state ,show) => state.shows = state.shows.filter(s => s !== show),
    addShow: (state,show) => state.shows.push(show),
    setShow: (state,show) => state.show = show,
    searchShow: (state,search) => state.shows = state.shows.filter(show => show.title.toLowerCase().includes(search.toLowerCase())),

    setStandups: (state,standups) => state.standups = standups,
    newStandup: () => alert('standup added'),
    removeStandup: (state ,standup) => state.standups = state.standups.filter(s => s !== standup),
    addStandup: (state,standup) => state.standups.push(standup),
    setStandup: (state,standup) => state.standup = standup,
    searchStandup: (state,search) => state.standups = state.standups.filter(standup => standup.title.toLowerCase().includes(search.toLowerCase())),

    setAnimes: (state,animes) => state.animes = animes,
    newAnime: () => alert('anime added'),
    removeAnime: (state ,anime) => state.animes = state.animes.filter(a => a !== anime),
    addAnime: (state,anime) => state.animes.push(anime),
    setAnime: (state,anime) => state.anime = anime,
    searchAnime: (state,search) => state.animes = state.animes.filter(anime => anime.title.toLowerCase().includes(search.toLowerCase())),
    
    getComments: (state,obj) => state.comments.filter(comment => comment.object === obj),
    setComments: (state,comments) => state.comments = comments,
    addComment: (state,comment) => state.comments.push(comment),
    removeComment: (state,comment) => state.comments = state.comments.filter(c => c !== comment),

    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
      console.log(token)
    },
    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },
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
     .get(`http://localhost:3000/api/movies/find/${title}`)
     .then((response) => {
        const movie = response.data
        commit('setMovies',movie)
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
   .get(`http://localhost:3000/api/shows/find/${title}`)
   .then((response) => {
      const show = response.data
      commit('setShows',show)
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
 .get(`http://localhost:3000/api/standups/find/${title}`)
 .then((response) => {
    const standup = response.data
    commit('setStandups',standup)
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
    commit('removeAnime',title)
 })
  .catch((err) => {
    alert(err)
 })
  },
  async searchAnime({ commit },title) {
await axios
 .get(`http://localhost:3000/api/animes/find/${title}`)
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
  },
  async GET_COMMENTS({commit},id) {
    await axios
        .get('http://localhost:3000/api/comments/'+id)
        .then((response) => {
            const comments = response.data
            commit("setComments",comments)
        })
        .catch((err) => {
            alert(err)
        })
  },
  async postComment({ commit },payload){
    await axios
      .post('http://localhost:3000/api/comments',{ 
        object: payload.object,
        content: payload.content
     })
      .then((response) => {
        console.log(response.data)
        commit('')
     })
      .catch((err) => {
        alert(err)
     })
    },
  socket_comment({ commit }, comm) {
    const comment = JSON.parse(comm);
    commit('addComment', { content: comment.content, object: comment.object  });
  }
}      
})
