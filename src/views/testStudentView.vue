<template>
  <div class="full-window flex-center">
    <button class="form__btn back-button" @click="$router.back()">
      &#8592;
    </button>
    <TestingForm></TestingForm>
  </div>
</template>

<script>

import TestingForm from "../components/testing/TestingForm.vue";
export default {
  components: {
    TestingForm,
  },
};
</script>

<style></style>
