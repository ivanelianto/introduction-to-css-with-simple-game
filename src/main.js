import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import LevelOne from "./components/level-1/LevelOne.vue";
import Home from "./components/Home.vue";
import * as monaco from "monaco-editor";

Vue.config.productionTip = false;

Vue.use(VueRouter);

require.config({
  paths: { vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/min/vs" }
});

window.MonacoEnvironment = {
  getWorkerUrl: function(workerId, label) {
    return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
        self.MonacoEnvironment = {
          baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.17.1/min/'
        };
        importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.17.1/min/vs/base/worker/workerMain.js');`)}`;
  }
};

const routes = [
  { path: "/", component: Home },
  { path: "/level/1", component: LevelOne }
];

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
}).$mount("#app");
