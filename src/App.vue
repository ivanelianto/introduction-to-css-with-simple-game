<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
@import "./assets/styles/variables.css";

* {
  padding: 0;
  margin: 0;
  outline: none;
  font-family: "Roboto", "Arial";
}

a {
  text-decoration: none;
  color: inherit;
}

a:visited {
  color: inherit;
}

#app {
  min-height: 100vh;
}
</style>
