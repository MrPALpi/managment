<template>
  <div>
    <div class="form__text">
      {{ question.title }}
      <div class="answers">
        <variant-answer
          v-for="variant in question.variants"
          :key="variant"
          :variantProps="variant"
          v-model="answer.answers"
     
        ></variant-answer>
      </div>
      <button class="form__btn" @click="nextQuestion">
        Ответить
      </button>
    </div>
  </div>
</template>

<script>
// import { computed, defineAsyncComponent } from "vue";
import { invoke } from "@tauri-apps/api";
import VariantAnswer from "./VariantAnswer.vue";
// const VariantAnswer = defineAsyncComponent({
//   loader: () => import('./VariantAnswer.vue')
// });
export default {
  components: {
    VariantAnswer,
  },
  props: {
    questionProps: {
      type: Object,
    //   required: true,
    },
  },
  data() {
    return {
      question: {},
      answer: { question_uuid: "", answers: [] },
    };
  },
  methods: {
    async nextQuestion(){
        console.log(this.answer);
        const res = await invoke("get_questions_answers", [{answers:[this.answer]}]);
        console.log(res);
        this.$emit("nextQuestion");
        this.answer.answers = [];
    }
  },


  watch: {
    questionProps(newQuestion, oldQuestion) {
      this.question = newQuestion;
    //   console.log(this.question);

      this.answer.question_uuid = newQuestion.uuid;
    },

  },
};
</script>

<style>
.answers{
    display: flex;
    flex-direction: column;
    align-items: start;
}
</style>
