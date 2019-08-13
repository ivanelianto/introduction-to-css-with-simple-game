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
import template from "./template.js";

export default {
  name: "LevelOne",
  components: {
    Level
  },
  data() {
    return {
      isModalVisible: false,
      level: 1,
      description:
        "In this level, Select <code>light-bulb</code> class element to turn on the light bulb.",
      htmlInitialCode: `<div class="light-bulb"></div>`,
      cssInitialCode: `/* Type css selector here */
{
  background-color: #CCFFFB;
  box-shadow: 0 0 1em #AAF9FF;
}`,
      answer: ".light-bulb",
      iframeCSS: template
    };
  }
};
</script>
<style src="./level-one.css"></style>
