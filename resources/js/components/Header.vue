<template>
  <div v-if="logged_in" class="header">
    <div class="container">
      <router-link to="/">Home</router-link>
      <div class="username">ようこそ {{ me.name }} さん</div>
      <a v-on:click="logout" href="#">Logout</a>
    </div>
  </div>
  <div v-else class="header">
    <div class="container">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },

  computed: {
    me() {
      return this.$store.state.me
    },
    logged_in() {
      return this.$store.state.logged_in
    },
  },

  mounted() {
    this.$store.dispatch('getUser')
  },

}
</script>

<style lang="scss" scoped>
.header {
  line-height: 3rem;
  background-color: lightblue;
  .container {
    display: flex;
    justify-content: flex-end;
    > :first-child {
      margin-right: auto;
    }
  }
}
.username {
  margin-right: 1rem;
}
</style>