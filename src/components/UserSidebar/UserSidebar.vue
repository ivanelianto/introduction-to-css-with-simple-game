<template>
  <div class="sidebar-container" @keydown="onKeyDown" @keyUp="onKeyUp">
    <div class="menu-container">
      <span class="hamburger-icon-wrapper" @click="toggleMenu">
        <span class="hamburger-icon-line"></span>
        <span class="hamburger-icon-line"></span>
        <span class="hamburger-icon-line"></span>
      </span>

      <ul class="level-list">
        <li v-for="route in routes" :key="route.path">
          <router-link
            :to="route.path"
            :class="{
              'main-button': true,
              finished: route.isFinished ? true : false
            }"
          >
            <img
              :src="
                route.isFinished ? levelFinishedImage : levelNotFinishedImage
              "
              alt=""
              class="level-finish-indicator"
            />

            Level {{ route.level }}
          </router-link>
        </li>
      </ul>
    </div>

    <div class="level-description-container">
      <h3 :class="{ 'level-text': true, finished: this.isFinished }">
        <button
          class="btn transparent-background"
          @click="onPreviousButtonClicked"
        >
          <img src="@/assets/images/previous.svg" class="btn-prev" />
        </button>

        <p>Level {{ level }}</p>

        <button class="btn transparent-background" @click="onNextButtonClicked">
          <img src="@/assets/images/previous.svg" class="btn-next" />
        </button>
      </h3>

      <p class="description-text">
        <span v-html="description"></span>
      </p>
    </div>

    <div class="editor-container">
      <div class="html-editor-container">
        <div class="editor-description">
          <b class="editor-title">HTML Viewer</b>
          <p class="editor-filename">index.html</p>
        </div>
        <MonacoEditor
          class="editor"
          theme="vs-dark"
          :options="htmlEditorOptions"
          language="html"
          v-model="htmlCode"
        />
      </div>

      <div class="css-editor-container">
        <div class="editor-description">
          <b class="editor-title">CSS Editor</b>
          <p class="editor-filename">style.css</p>
        </div>
        <MonacoEditor
          ref="cssEditor"
          class="editor"
          theme="vs-dark"
          :options="cssEditorOptions"
          language="css"
          v-model="cssCode"
        />
      </div>
    </div>

    <div class="action-button-container">
      <button
        id="btn-run"
        class="btn btn-run"
        @click="run"
        title="Shortcut: Alt + Enter"
      >
        Run
      </button>
    </div>
  </div>
</template>

<script>
import MonacoEditor from "vue-monaco";
import routes from "@/routes";
import levelFinishedImage from "@/assets/images/level-finished.svg";
import levelNotFinishedImage from "@/assets/images/level-not-finished.svg";
import { debounce, throttle } from "lodash";

const ALT_KEY_CODE = 18;
const ENTER_KEY_CODE = 13;

export default {
  name: "UserSidebar",
  components: {
    MonacoEditor
  },
  props: ["cssInitialCode", "htmlInitialCode", "level", "description", "run"],
  data() {
    return {
      routes: routes.filter((v, i) => {
        return v.level !== undefined;
      }),
      isFinished: false,
      levelFinishedImage: levelFinishedImage,
      levelNotFinishedImage: levelNotFinishedImage,
      isAltPressed: false,
      cssCode: this.cssInitialCode,
      htmlCode: this.htmlInitialCode,
      htmlEditorOptions: {
        fontFamily: "consolas",
        fontLigatures: true,
        fontSize: 14,
        roundedSelection: true,
        automaticLayout: true,
        readOnly: true,
        minimap: {
          enabled: false
        }
      },
      cssEditorOptions: {
        fontFamily: "consolas",
        fontLigatures: true,
        fontSize: 14,
        roundedSelection: true,
        automaticLayout: true,
        minimap: {
          enabled: false
        }
      }
    };
  },
  mounted() {
    this.toggleMenu = throttle(this.toggleMenu, 500);

    this.routes.forEach(route => {
      if (route.level === this.level) {
        this.isFinished = route.isFinished;
      }
    });

    $(window).on("click", this.onWindowClick);
    this.$refs.cssEditor.focus();
  },
  methods: {
    onWindowClick(e) {
      if (
        $(".hamburger-icon-wrapper").hasClass("active") &&
        !$(e.target).is($(".hamburger-icon-wrapper"))
      ) {
        this.hideMenu();
      }
    },
    onKeyDown(e) {
      if (e.keyCode === ALT_KEY_CODE) {
        this.isAltPressed = true;
      }

      if (this.isAltPressed && e.keyCode === ENTER_KEY_CODE) {
        document.querySelector("#btn-run").click();
      }
    },
    onKeyUp(e) {
      if (e.keyCode === ALT_KEY_CODE) {
        this.isAltPressed = false;
      }
    },
    onPreviousButtonClicked() {
      this.routes.forEach((route, index) => {
        if (route.path === this.$route.path && index > 0)
          this.$router.push({ path: this.routes[index - 1].path });
      });
    },
    onNextButtonClicked() {
      this.routes.some((route, index) => {
        if (route.path === this.$route.path && index < this.routes.length - 1) {
          this.$router.push({ path: this.routes[index + 1].path });
          return true;
        }
      });
    },
    toggleMenu(e) {
      if ($(e.target).hasClass("active")) this.hideMenu();
      else this.showMenu();
    },
    hideMenu() {
      $(".level-list").fadeOut();
      $(".hamburger-icon-wrapper").removeClass("active");
    },
    showMenu() {
      $(".level-list").fadeIn();
      $(".hamburger-icon-wrapper").addClass("active");
    },
    changeLevelToFinishedState() {
      this.isFinished = true;

      this.routes.forEach(route => {
        if (route.level === this.level) {
          route.isFinished = true;
        }
      });
    }
  }
};
</script>
<style src="./style.css"></style>
