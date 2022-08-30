<template>
  <div id="app">
    <Header subtitle="Create account"/>

    <b-form @submit="onSubmit">
      <b-form-group label="Email address:" label-for="email">
        <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group label="Username:" label-for="username">
        <b-form-input id="username" v-model="form.username" placeholder="Enter username" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password:" label-for="password">
        <b-form-input id="password" v-model="form.password" placeholder="Enter password" type="password" required></b-form-input>
      </b-form-group>
      <b-form-checkbox id="isAdmin" v-model="form.isAdmin" :value="true" :unchecked-value="false">Admin</b-form-checkbox>
      <b-form-checkbox id="isModerator" v-model="form.isModerator" :value="true" :unchecked-value="false">Moderator</b-form-checkbox>
      <br>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'Register',
    
    components: {
      Header
    },

    data() {
      return {
        form: {
          email: '',
          username: '',
          password: '',
          isAdmin: false,
          isModerator: false
        },
        emailError:'',
        usernameError:'',
        passwordError:'',
      }
    },

    methods: {
      ...mapActions(['register']),

      onSubmit(e) {
        e.preventDefault();
        
        this.register(this.form);
        this.$router.push({ name: 'Home' });
      }
    }
  }
</script>

<style scoped>

</style>
