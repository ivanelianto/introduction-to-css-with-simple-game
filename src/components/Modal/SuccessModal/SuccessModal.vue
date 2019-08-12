<template>
  <div class="modal-wrapper">
    <div class="modal">
      <img v-cloak src="@/assets/images/star.svg" alt="" class="star-logo" />
      <h1 class="caption">
        Level Completed!
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessModal",
  methods: {
    hide() {
      $(".modal-wrapper").css({
        "animation": "fadeOut .5s ease-in-out",
        "opacity": "0"
      })
    }
  }
};
</script>

<style src="./success-modal.css"></style>