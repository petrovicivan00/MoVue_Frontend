<template>
  <div class="standups">
    <div class="standup" v-for="standup in getStandups" :key="standup.id">
      <div class="card" style="width: 15rem;">
        <img src="https://sommersetretirement.com/assets/comedy-club.jpg" style="width: 14rem; align-self: center;"/>
        <ul class="list">
          <li>Title: <b>{{ standup.title }}</b></li>
          <li>({{standup.year}})</li>
          <li>Creator: {{ standup.mainActor }}</li>
          <li>Rating: {{ standup.rating}}</li>
        </ul>
        <div class="btn">
          <button>Edit</button>
          <button @click="deleteStandup(standup)">Delete</button>
         </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions , mapState, mapMutations, mapGetters} from 'vuex'

export default {
name: 'Standups',

computed: {
  ...mapState(['standups']),
  ...mapGetters(['getStandups'])
},
methods: {
  
  ...mapActions(['GET_STANDUPS']),
  ...mapMutations(['removeStandup','searchStandup']),

  deleteStandup(s) {
    this.removeStandup(s)
  },
  
  search(){
    this.searchStandup(this.searchStandup)
  }

},
mounted() {
  this.GET_STANDUPS() 
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
margin-right:15px;
margin-bottom: 15px;
float: left;
}
.list{
list-style-type: none; 
padding: 0;
margin: 0;

}
</style>
