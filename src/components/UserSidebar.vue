<template>
  <div class="sidebar-container" @keydown="onKeyDown" @keyUp="onKeyUp">
    <div class="level-description-container">
      <h3 class="level-text">Level {{ level }}</h3>

      <p class="description-text">
        {{ description }}
      </p>
    </div>

    <div class="editor-container">
      <MonacoEditor
        class="editor"
        theme="vs-dark"
        :options="options"
        v-model="code"
      />
    </div>

    <div class="action-button-container">
      <button
        id="btn-run"
        class="btn"
        @click="run"
        title="Shortcut: Ctrl + Enter"
      >
        Run
      </button>
      <button class="btn">Next</button>
    </div>
  </div>
</template>

<script>
import MonacoEditor from "vue-monaco";

export default {
  name: "user-sidebar",
  components: {
    MonacoEditor
  },
  props: ["initialCode", "level", "description", "run"],
  data() {
    return {
      isControlPressed: false,
      code: this.initialCode,
      options: {
        language: "css",
        fontFamily: "Consolas",
        fontLigatures: true,
        fontSize: 14,
        roundedSelection: true
      }
    };
  },
  methods: {
    onKeyDown(e) {
      if (e.keyCode === 17) {
        this.isControlPressed = true;
      }

      if (this.isControlPressed && e.keyCode === 13) {
        document.querySelector("#btn-run").click();
      }
    },
    onKeyUp(e) {
      if (e.keyCode === 17) {
        this.isControlPressed = false;
      }
    }
  }
};
</script>

<style scoped>
.sidebar-container {
  height: 100vh;
  width: 50%;
  padding: 2em 2em;
  background-color: var(--dark-background-color);
  display: flex;
  flex-direction: column;
}

.level-description-container {
  flex: 1 1 auto;
  color: #aaa;
  font-family: Arial, Helvetica, sans-serif;
}

.level-description-container .level-text {
  margin-bottom: 0.5em;
}

.level-description-container .description-text {
  min-height: 50px;
}

.editor-container {
  flex: 2 1 auto;
  width: 100%;
  height: 30%;
}

.editor {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 5px #333;
}

.action-button-container {
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.action-button-container .btn {
  border: 1px solid #444;
  border-radius: 5px;
  background-color: transparent;
  padding: 1em;
  color: #fff;
}

.action-button-container .btn:not(:last-child) {
  margin-right: 1em;
}
</style>
