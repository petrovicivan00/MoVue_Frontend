<template>
  <div>
    <h4>User Comments</h4>

    <div v-if="token">
      <div style="display: flex;">
        <b-form-input v-model="comment" placeholder="Say something..."></b-form-input>
        <button type="button" @click="onSubmit">Submit</button>
      </div>
      <b-card v-for="comment in currentComments" :title="comment.user" :key="comment.id">
        <b-card-text>
          {{ comment.body }}
        </b-card-text>
      </b-card>
    </div>
    <p v-else>You must be signed in to leave a comment</p>
  </div>
</template>

<script>

  import { mapState, mapMutations} from 'vuex';

  export default {
    name: 'Comments',

  props: {
    obj:[],
    currentComments:[]
  },
    data() {
      return {
        comment: ''
      }
    },

    computed: {
      ...mapState(['comments','token']),
    },

    methods: {
      ...mapMutations(['getComments','addComment']),

      onSubmit() {
        if(this.comment==""){
          alert("Cannot post empty comment!")
          return false;
        }
        this.$socket.emit('comment', { content: this.comment, object: this.obj.id,token:this.token });
        this.comment = '';
        this.currentComments = this.getComments(this.obj.id)
      }
    },
    mounted() {
    this.currentComments = this.getComments(this.obj.id)
    }
  }

</script>

<style scoped>
  .card {
    margin-top: 10px;
    text-align: left;
  }

  .card-title {
    margin-bottom: 0px;
  }

  .card-body {
    padding-bottom: 5px;
  }
</style>