<template>
  <div class="form">
    <variant-question
      :questionProps="questions[questionNumber]"
      @nextQuestion="nextQuestion"
    ></variant-question>
  </div>
</template>

<script>
import { invoke } from "@tauri-apps/api";
// import { defineAsyncComponent } from 'vue';
import VariantQuestion from "./VariantQuestion.vue";
// const VariantQuestion = defineAsyncComponent({
//   loader: () => import('./VariantQuestion.vue')
// });
export default {
  components: {
    VariantQuestion,
  },
  data() {
    return {
      questions: Array,
      len: 0,
      questionNumber: 0,
    };
  },
  methods: {
    nextQuestion() {
      if (this.questionNumber < this.len - 1) {
        this.questionNumber++;
      } else {
        this.$router.push("/student");
      }
    },
  },

  async created() {
    const questTest = await invoke("get_questions", {});
    this.questions = await questTest;
    this.len = this.questions.length;
  },
};
</script>

<style></style>
