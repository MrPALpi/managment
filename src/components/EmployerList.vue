<template>
    <div class="employer-list">
      <transition-group name="list">
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
  .qualities-list {
    display: flex;
    flex-direction: column;
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
  