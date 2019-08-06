<template>
  <div class="level-container">
    <UserSidebar
      ref="editor"
      :initialCode="initialCode"
      :level="level"
      :description="description"
      :run="run"
    />

    <iframe />
  </div>
</template>

<script>
import UserSidebar from "./../UserSidebar.vue";
export default {
  name: "level-one",
  components: {
    UserSidebar
  },
  mounted() {
    this.iframe = document.querySelector("iframe").contentWindow.document;
    this.setContent("");
  },
  data() {
    return {
      iframme: null,
      initialCode: `.box {
  /* Code here */
}
      `,
      level: 1,
      description: `
        Change Something
      `
    };
  },
  methods: {
    run() {
      console.log(this.$refs.editor.code);
      this.setContent(this.$refs.editor.code);
    },
    setContent(cssCode) {
      this.iframe.open();
      this.iframe.write(`
        <style>
          .box {
            height: 100px;
            width: 100px;
            border: 1px solid black;
          }
          ${cssCode}
        </style>

        <div class="box">
          Box 1
        </div>
      `);
      this.iframe.close();
    }
  }
};
</script>

<style>
iframe {
  width: 50%;
  min-height: 100vh;
}
</style>
