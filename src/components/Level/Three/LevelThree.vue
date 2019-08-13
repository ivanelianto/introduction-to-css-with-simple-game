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
  name: "LevelThree",
  components: {
    Level
  },
  data() {
    return {
      isModalVisible: false,
      level: 3,
      description: metadata.description,
      htmlInitialCode: `<div class="light-bulb"></div>`,
      cssInitialCode: `/* Type css selector here */
{
  background-color: #CCFFFB;
  box-shadow: 0 0 1em #AAF9FF;
}`,
      answer: ".light-bulb",
      iframeCSS: metadata.css
    };
  }
};
</script>
<style src="./level-three.css"></style>
