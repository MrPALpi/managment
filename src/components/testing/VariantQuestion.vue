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
import useAnswerStore from "@/stores/answerStore";
import { mapActions } from "pinia";
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
    ...mapActions(useAnswerStore, ["pushNewAnswer"]),
    
    async nextQuestion(){
        console.log("Полученный ответ: ", this.answer);
        const res = await invoke("get_questions_answers", {answers: [this.answer]});
        console.log(res);
        
        this.pushNewAnswer(
          {
            questions_uuid: this.answer.question_uuid, 
            answer_reslt: Boolean(res)
          }
        );

        this.$emit("nextQuestion");
        this.answer.answers = [];
    }
  },


  watch: {
    questionProps(newQuestion, oldQuestion) {
      this.question = newQuestion;

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
