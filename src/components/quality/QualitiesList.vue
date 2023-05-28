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
  position: relative;
  display: flex;
  flex-flow: row wrap;
  -webkit-flex-wrap: wrap;
  -webkit-flex-flow: row wrap;
  width: 100%;
  gap: 5px;
}

</style>
