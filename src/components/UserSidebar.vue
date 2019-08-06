<template>
  <div>
    <MonacoEditor
      class="editor"
      theme="vs-dark"
      :options="options"
      v-model="code"
    />
  </div>
</template>

<script>
import MonacoEditor from "vue-monaco";

export default {
  name: "user-sidebar",
  components: {
    MonacoEditor
  },
  data() {
    return {
      code: "// Vue Monaco Editor is Working...",
      options: {
        language: "css",
        fontSize: 16,
        roundedSelection: true
      }
    };
  }
};
</script>

<style>
.editor {
  width: 800px;
  height: 600px;
}
</style>
