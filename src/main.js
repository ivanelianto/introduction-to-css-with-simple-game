import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import * as monaco from "monaco-editor";
import routes from "./routes.js";

Vue.config.productionTip = false;

/**
 * Using jQuery
 */
global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;

/**
 * Using Vue Router
 */
Vue.use(VueRouter);

/**
 * Using Monaco Editor
 */
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

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
}).$mount("#app");
