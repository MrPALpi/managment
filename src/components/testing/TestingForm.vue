<template>
  <div class="form">
    <variant-question
      :questionProp="questions[questionNumber]"
      @nextQuestion="nextQuestion"
    ></variant-question>
  </div>
</template>

<script>
import { invoke } from "@tauri-apps/api";
// import { defineAsyncComponent } from 'vue';
import VariantQuestion from "./VariantQuestion.vue";
import { mapState } from "pinia";
import useAnswerStore from "@/stores/answerStore.js";
// const VariantQuestion = defineAsyncComponent({
//   loader: () => import('./VariantQuestion.vue')
// });
export default {
  components: {
    VariantQuestion,
  },
  data() {
    return {
      questions: [{}],
      len: 0,
      questionNumber: 0,
    };
  },
  methods: {
    nextQuestion() {
      if (this.questionNumber < this.len - 1) {
        this.questionNumber++;
      } else {
        console.log("все ответы теста: ", this.answers);
        this.$router.push("/student");
      }
    },
  },
  computed: {
    ...mapState(useAnswerStore, ["answers"])
  },

  async created() {
    this.questions = await invoke("get_questions", {});
    this.len = this.questions.length;

    console.log("Вопросы: ", this.questions, "размер:", this.len);
  },
};
</script>

<style></style>
