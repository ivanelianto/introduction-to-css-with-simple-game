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
  user-select: none;
  scrollbar-width: thin;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #191919;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #171717;
  border-radius: 10px;
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
