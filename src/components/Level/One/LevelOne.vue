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
  animation: pulse .5s ease-out infinite;
}`,
      answer: "h1",
      iframeCSS: metadata.css
    };
  }
};
</script>
<style src="./level-one.css"></style>
