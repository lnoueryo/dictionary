<template>
<div class="container">
  <form @submit.prevent="login">
    <div>
      <input type="text" id="email" v-model="email" />
    </div>
    <div class="error" v-for="message in errors.email" v-bind:key="message">
        {{ message }}
    </div>
    <div>
      <input type="password" id="password" v-model="password" />
    </div>
    <div class="error" v-for="message in errors.password" v-bind:key="message">
        {{ message }}
    </div>

    <button type="submit">login</button>
  </form>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Login',
  data: () => ({
    email: null,
    password: null,
    errors: {},
  }),
  methods: {
    login() {
      axios.get("/sanctum/csrf-cookie").then(response => {
        axios.post("/api/login", {
            email: this.email,
            password: this.password,
          })
          .then(response => {
              this.$store.dispatch('getUser')
              this.$router.push({name: 'home'})
          })
          .catch((error) => {
            this.errors = error.response.data.errors
          })
      })
    },
  },
  mounted() {
  },
}
</script>
<style scoped>
.container {
  text-align: center;
}
</style>