import { defineStore } from "pinia";

const useAnswerStore = defineStore("answerStore", {
    state: () => ({
        answers: []
    }),
    actions: {
        pushNewAnswer(answer) {
            this.answers.push(answer);
        }
    }
});

export default useAnswerStore;