<template>
  <div class="qualities-list">
    <transition-group name="list">
    <quality-item
      v-for="quality in qualities"
      :key="quality"
      :quality="quality"
      @click="$emit('addOrDelete', quality)"
    ></quality-item>
</transition-group>
  </div>
</template>

<script>
import QualityItem from "./QualityItem.vue";
export default {
    emits: ['addOrDelete'],
  components: {
    QualityItem,
  },
  props:{
    qualities:{type: Array,
    },
  },
  // methods:{
  //   addOrdelete(quality){
  //       console.log(quality)
  //       this.$emit("addOrDelete", quality);
  //   }
  // }
};
</script>

<style>
.qualities-list {
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(80px,max-content)); */
  display: flex;
  flex-flow: row wrap;
  -webkit-flex-wrap: wrap;
  -webkit-flex-flow: row wrap;
  width: 100%;
  gap: 5px;
}
.list-move,
.list-enter-active,
.list-leave-active{
    transition: all 0.5s ease;
}


.list-enter-from,
.list-leave-to{
    opacity: 0;
    transform: translateX(30px);
}


.list-leave-active {
    position: absolute;
}
</style>
