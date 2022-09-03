<template>
  <div id="app">
    <Header subtitle="Create account"/>

    <b-form name="mainForm" @submit="onSubmit">
      <b-form-group label="Email address:" label-for="email">
        <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group label="Username:" label-for="username">
        <b-form-input id="username" v-model="form.username" placeholder="Enter username" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password:" label-for="password">
        <b-form-input id="password" v-model="form.password" placeholder="Enter password" type="password" required></b-form-input>
      </b-form-group>
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
        }
      }
    },

    methods: {
      ...mapActions(['register']),

      onSubmit(e) {
        e.preventDefault();

        let email = document.forms["mainForm"]["email"].value;
        if (email === "") {
          alert("Email must be filled out");
          return false;
        } else if (email.length < 3 | !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
          alert("Email is not valid");
          return false;
        }
         let password = document.forms["mainForm"]["password"].value;
         if (password === "") {
           alert("Password must be filled out");
           return false;
         } else if (password.length < 3 | password.length > 16 ) {
           alert("Password is not valid!");
           return false;
         }

        this.register(this.form);
        this.$router.push({ name: 'Home' });
      }
    }
  }
</script>

<style scoped>

</style>
