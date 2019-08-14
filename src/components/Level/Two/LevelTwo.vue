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
import { metadata } from "./metadata";

export default {
  name: "LevelTwo",
  components: {
    Level
  },
  data() {
    return {
      isModalVisible: false,
      level: 2,
      description: metadata.description,
      htmlInitialCode: `<div class="chemical" id="copper"></div>
<div class="chemical" id="manganese"></div>
<div class="chemical" id="nickel"></div>`,
      cssInitialCode: `/* Type css selector here */
{
  background: linear-gradient(0deg, #f06292 70%, #202020 0%);
}`,
      answer: "#manganese",
      iframeCSS: metadata.css
    };
  }
};
</script>

<style></style>
