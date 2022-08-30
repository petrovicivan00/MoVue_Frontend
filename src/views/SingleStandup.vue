<template>
  <div id="app">
    <Header :subtitle="subtitle"/>
    <Standup v-if="standup" :standup="standup" />
    <Comments v-if="standup" :standup="standup" />
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import Standup from '@/components/Standup.vue';
  import Comments from '@/components/Comments.vue';
  import { mapGetters } from 'vuex';

  export default {
    name: 'SingleStandup',

    components: {
      Header,
      Standup,
      Comments
    },

    data() {
      return {
        standup: null,
        subtitle: ''
      }
    },
    computed: {
        ...mapGetters(['getStandup'])
    },

    mounted() {
      this.getStandup(this.$route.params.id).then( res => {
        this.standup = res;
        this.subtitle = this.standup.title;
      });
    }
  }

</script>