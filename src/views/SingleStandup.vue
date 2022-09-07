<template>
  <div id="app">
    <Header :subtitle="subtitle"/>
    <Standup :standup="standup"/>
    <hr>
    <Comments :obj="standup" />
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import Standup from '@/components/Standup.vue';
  import Comments from '@/components/Comments.vue';
  import { mapGetters,mapActions} from 'vuex';

  export default {
    name: 'SingleStandup',

    components: {
      Header,
      Standup,
      Comments
    },

    data() {
      return {
        standup:[],
        subtitle: ''
      }
    },
    computed: {
        ...mapGetters(['getStandup'])
    },
    methods:{
      ...mapActions(['GET_COMMENTS'])
    },
    mounted() {
        this.standup = this.getStandup
        this.subtitle = this.standup.title
        this.GET_COMMENTS()
    }
  }

</script>