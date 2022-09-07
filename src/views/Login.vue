<template>
  <div id="app">
    <Header subtitle="Log In"/>

    <b-form name="mainForm" @submit="onSubmit">
      <b-form-group label="Email:" label-for="email">
        <b-form-input id="email" v-model="form.email" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password:" label-for="password">
        <b-form-input id="password" v-model="form.password" placeholder="Enter password" type="password" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import { mapActions, mapMutations } from 'vuex';

  export default {
    name: 'Login',
    
    components: {
      Header
    },

    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },

    methods: {
      ...mapActions(['login']),

      onSubmit(e) {
        e.preventDefault();

        let email = document.forms["mainForm"]["email"].value;
        if (email.length < 3 | !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
          alert("Email is not valid");
          return false;
        }
        let password = document.forms["mainForm"]["password"].value;
        if (password.length < 3 | password.length > 16 ) {
           alert("Password is not valid!");
           return false;
         }
        this.login(this.form);
        this.$router.push({ name: 'Home' });
      }
    }
  }
</script>

<style scoped>

</style>
