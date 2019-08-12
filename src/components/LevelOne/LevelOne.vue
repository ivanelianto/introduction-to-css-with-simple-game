<template>
  <div class="level-container">
    <UserSidebar
      ref="editor"
      :cssInitialCode="cssInitialCode"
      :htmlInitialCode="htmlInitialCode"
      :level="level"
      :description="description"
      :run="run"
    />

    <div class="iframe-container">
      <iframe height="100%" width="100%" />
    </div>

    <SuccessModal ref="modal" v-if="this.isModalVisible" />
  </div>
</template>

<script>
import UserSidebar from "@/components/UserSidebar/UserSidebar";
import SuccessModal from "@/components/Modal/SuccessModal/SuccessModal";

export default {
  name: "LevelOne",
  components: {
    UserSidebar,
    SuccessModal
  },
  data() {
    return {
      isModalVisible: false,
      htmlInitialCode: `<div class="light-bulb"></div>`,
      cssInitialCode: `/* Type css selector here */
{
  background-color: #CCFFFB;
  box-shadow: 0 0 1em #AAF9FF;
}`,
      level: 1,
      description:
        "Select <code>light-bulb</code> class element to turn on the light bulb."
    };
  },
  mounted() {
    this.iframe = document.querySelector("iframe").contentWindow.document;
    this.setContent("");
    $(window).click((e) => {
      if (this.isModalVisible 
        && this.isModalLostFocus(e.target))
      {
        $(this.$refs.modal.$el).css({
          "animation": "fadeOut .5s ease-in-out",
          "opacity": "0"
        })

        setTimeout(() => {
          this.isModalVisible = false;
        }, 550)
      }
    })
  },
  methods: {
    run() {
      let cssSelector = this.$refs.editor.cssCode.split("{")[0].trim();

      if (cssSelector === ".light-bulb") {
        this.$refs.editor.changeLevelToFinishedState();
        this.isModalVisible = true;
      }

      this.setContent(this.$refs.editor.cssCode);
    },
    setContent(cssCode) {
      this.iframe.open();
      this.iframe.write(`
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            height: 100%;
          }

          body {
            background-color: #202020;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          @keyframes fadeIn {
            from { 
              background-color: #2a2a2a;
            }

            to {
              box-shadow: 0 0 1em #AAF9FF;
              background-color: #CCFFFB;
            }
          }

          @keyframes bounce {
            0%, 100% {
              top: -1.5em;
            }

            90% {
              top: 0;
            }
          }

          .light-bulb {
            position: relative;
            height: 100px;
            width: 100px;
            border: none;
            border-radius: 50%;
            background-color: #2a2a2a;
            animation: fadeIn .2s ease-in-out,
              bounce .8s 1s cubic-bezier(1,-0.11,.18,1.1) infinite;
          }

          ${cssCode}
        </style>

        ${this.htmlInitialCode}
      `);
      this.iframe.close();
    },
    isModalLostFocus(clickedElement) {
      let modalElement = this.$refs.modal;

      if (modalElement === undefined || clickedElement === undefined)
        return undefined;

      console.log($(modalElement.$el.innerHTML), $(clickedElement));
      
      if ($(clickedElement).hasClass("modal-wrapper"))
        return true;
      return false;
    }
  }
};
</script>
<style src="./style.css"></style>
