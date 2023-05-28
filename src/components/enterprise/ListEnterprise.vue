<template>
  <div class="list">
    <transition-group name="list">
      <EnterpriceItem
        v-for="entr in enterprices"
        :key="entr"
        :entrprice="entr"
        @choose="choose"
      ></EnterpriceItem>
    </transition-group>
  </div>
</template>

<script>
import EnterpriceItem from "./EnterpriceItem.vue";
import globalStore from '../../stores/globalStore'
import { mapActions} from 'pinia';
import { invoke } from "@tauri-apps/api";
export default {
  components: {
    EnterpriceItem,
  },
  data(){
    return{
      enterprices:[],
    }
  },
  methods:{
    ...mapActions(globalStore, ['setJobe']),
    choose(entrprice){
      console.log("выбор предприятия");
      this.setJobe(entrprice);
      this.$router.push("/schema");
    } 
  },
  async mounted() {
        this.enterprices = await invoke("get_companies", {});
        
    },

};
</script>

<style>


</style>
