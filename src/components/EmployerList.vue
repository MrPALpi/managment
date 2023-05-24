<template>
    <div class="list">
      <transition-group name="list-clear">
      <EmployerItem
        v-for="empl in employers"
        :key="empl"
        :employer="empl"
        @deleteEmp="deleteEmp"
      ></EmployerItem>
  </transition-group>
    </div>
  </template>
  
  <script>
  // import QualityItem from "./QualityItem.vue";
  import EmployerItem from './EmployerItem.vue';
  export default {
      // emits: ['addOrDelete'],
    components: {
      EmployerItem,
    },
    props:{
        employers:{type: Array,
      required:true},
    },
    methods:{
      deleteEmp(emp){
          
          this.$emit("deleteEmp", emp);
      }
    }
  };
  </script>
  
  <style>
  
  .list-clear-move,
  .list-clear-enter-active,
  .list-clear-leave-active{
      transition: all 0.5s ease;
  }
  
  
  .list-clear-enter-from,
  .list-clear-leave-to{
      opacity: 0;
      transform: translateX(30px);
  }
  
  
  /* .list-clear-leave-active {
      position: absolute;
  } */
  </style>
  