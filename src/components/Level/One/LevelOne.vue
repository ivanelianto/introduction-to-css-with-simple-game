<template>
  <Level
    :level="level"
    :description="description"
    :cssInitialCode="cssInitialCode"
    :htmlInitialCode="htmlInitialCode"
    :answer="answer"
    :iframeCSS="iframeCSS"
  />
</template>

<script>
import Level from "@/components/Level/Master/Level";
import { metadata } from "./metadata.js";

export default {
  name: "LevelOne",
  components: {
    Level
  },
  data() {
    return {
      isModalVisible: false,
      level: 1,
      description: metadata.description,
      htmlInitialCode: `<h1>Hello, World</div>`,
      cssInitialCode: `/* Type css selector here */
{
  color: #ddd;
  background-color: transparent;
  animation: pulse .5s ease-out infinite, flip 1s cubic-bezier(0,-0.33,1,-0.24);
  box-shadow: none;
}`,
      answer: "h1",
      iframeCSS: metadata.css
    };
  }
};
</script>
<style src="./level-one.css"></style>
