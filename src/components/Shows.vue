<template>
    <div class="shows">
      <div class="show" v-for="show in getShows" :key="show.id">
        <div class="card" style="width: 15rem;">
          <img src="data:image/png;base64,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" style="width: 14rem; align-self: center;"/>
          <ul class="list">
            <li>Title: {{ show.title }} ({{show.year}})</li>
            <li>Genre: {{ show.genre }}</li>
            <li>S{{ show.season}}E{{ show.episode}}</li>
            <li>Rating: {{ show.rating}}</li>
          </ul>
           <div class="btn">
            <button @click="playShow(show)" v-if="token">Play</button>
           </div>
        </div>
      </div>
    </div>
</template>

<script>

import {mapActions , mapState, mapMutations, mapGetters} from 'vuex'


export default {
  name: 'Shows',

  computed: {
    ...mapState(['shows','token']),
    ...mapGetters(['getShows'])
  },
  methods: {
    ...mapActions(['GET_SHOWS']),
    ...mapMutations(['removeShow','searchShow', 'setShow']),

    playShow(s) {
      this.setShow(s),
      this.$router.push({ name: 'SingleShow' });
    },
    deleteShow(s) {
      this.removeShow(s)
    }
  },
  mounted() {
    this.GET_SHOWS() 
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
