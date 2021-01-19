<template>
  <div id="app">
    <header-component/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style>
.container {
  margin: auto;
  width: 960px;
}
.error {
  color: red;
}
</style>