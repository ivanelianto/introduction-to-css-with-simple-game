<template>
  <div class="level-container">
    <UserSidebar
      ref="editor"
      :run="run"
      :cssInitialCode="cssInitialCode"
      :htmlInitialCode="htmlInitialCode"
      :level="level"
      :description="description"
    />

    <div class="iframe-container">
      <iframe v-cloak height="100%" width="100%" />
    </div>

    <SuccessModal ref="modal" v-if="this.isModalVisible" />
  </div>
</template>

<script>
import UserSidebar from "@/components/UserSidebar/UserSidebar";
import SuccessModal from "@/components/Modal/SuccessModal/SuccessModal";

export default {
  name: "level",
  components: {
    UserSidebar,
    SuccessModal
  },
  props: {
    level: {
      required: true,
      type: Number
    },
    description: {
      required: true,
      type: String
    },
    cssInitialCode: {
      required: true,
      type: String
    },
    htmlInitialCode: {
      required: true,
      type: String
    },
    answer: {
      required: true,
      type: String
    },
    iframeCSS: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  mounted() {
    this.setContent(this.iframeCSS + this.htmlInitialCode);

    $(window).click(e => {
      if (this.isModalVisible && this.isModalLostFocus(e.target)) {
        $(this.$refs.modal.$el).css({
          animation: "fadeOut .5s ease-in-out",
          opacity: "0"
        });

        setTimeout(() => {
          this.isModalVisible = false;
        }, 550);
      }
    });
  },
  methods: {
    run() {
      let cssSelector = this.$refs.editor.$data.cssCode.split("{")[0].trim();

      cssSelector = cssSelector.split(this.answer);

      if (
        cssSelector.length === 2 &&
        cssSelector[0] === "" &&
        cssSelector[1] === ""
      ) {
        this.insertUserCSSCode();
        this.$refs.editor.changeLevelToFinishedState();
        this.isModalVisible = true;
      }
    },
    isModalLostFocus(clickedElement) {
      let modalElement = this.$refs.modal;

      if (modalElement === undefined || clickedElement === undefined)
        return undefined;

      if ($(clickedElement).hasClass("modal-wrapper")) return true;

      return false;
    },
    setContent(code) {
      let iframe = document.querySelector("iframe").contentWindow.document;
      iframe.open();
      iframe.write(code);
      iframe.close();
    },
    insertUserCSSCode() {
      let styleArea = this.iframeCSS.split("</style>");

      styleArea.splice(1, 0, this.$refs.editor.$data.cssCode);

      styleArea[2] = "</style>";

      this.setContent(styleArea.join("") + this.htmlInitialCode);
    }
  }
};
</script>

<style src="./level.css" />
