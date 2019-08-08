<template>
  <div class="sidebar-container" @keydown="onKeyDown" @keyUp="onKeyUp">
    <div class="level-description-container">
      <h3 class="level-text">Level {{ level }}</h3>

      <p class="description-text">
        {{ description }}
      </p>
    </div>

    <div class="editor-container">
      <div class="css-editor-container">
        <div class="editor-description">
          <b class="editor-title">CSS Editor</b>
          <p class="editor-filename">style.css</p>
        </div>
        <MonacoEditor
          class="editor"
          theme="vs-dark"
          :options="cssEditorOptions"
          language="css"
          v-model="cssCode"
        />
      </div>

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
    </div>

    <div class="action-button-container">
      <button
        id="btn-run"
        class="btn"
        @click="run"
        title="Shortcut: Alt + Enter"
      >
        Run
      </button>
      <button class="btn">Next</button>
    </div>
  </div>
</template>

<script>
import MonacoEditor from "vue-monaco";

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
  methods: {
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
    }
  }
};
</script>
<style src="./style.css"></style>
