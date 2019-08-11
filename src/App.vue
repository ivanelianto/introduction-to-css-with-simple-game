<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
@import "./assets/styles/variables.css";

* {
  padding: 0;
  margin: 0;
  outline: none;
  box-sizing: border-box;
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

.level-container {
  display: flex;
  align-items: center;
  width: 100%;
}

iframe {
  border: none;
}
</style>
