// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const globalStore = defineStore('globalStore', {
  state: () => ({ 
    employers: [],
    jobe: 'Eduardo'
  }),
  getters: {
    getEmployers: (state) => state.employers,
  },
  actions: {
    pushEmployer(empl) {
      this.employers.push(empl);
    },
    removeAllEmployer(){
      this.employers=[];
    },
    removeJobe(){
      this.jobe='';
    },
    removeEmployer(empl){
      this.employers = this.employers.filter(emp => emp!==empl);
    },
    setJobe(jobe) {
      this.jobe = jobe;
    },
  },
})
export default globalStore;