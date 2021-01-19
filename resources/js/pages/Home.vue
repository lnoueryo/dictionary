<template>
<div class="container">

  <div v-if="logged_in">
    Logged In
  </div>
  <div v-else>
    Home.
  </div>

</div>

</template>
<script>
export default {
  title: "Home",
  computed: {
    logged_in() {
      return this.$store.state.logged_in
    },
    me() {
      return this.$store.state.me
    },
  },
  mounted() {
  }
}
</script>