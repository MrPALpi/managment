<template>
    <div class="drag-list">
      <transition-group name="list-clear">
      <DragItem 
        v-for="empl in employers"
        :key="empl.id"
        :employer="empl"
        draggable="true"
        
        @dragstart="onDragstart($event,empl)"
      ></DragItem>
  </transition-group>
    </div>
  </template>
  
  <script>
  // import QualityItem from "./QualityItem.vue";
  import DragItem from './DragItem.vue';
  export default {
      // emits: ['addOrDelete'],
    components: {
        DragItem,
    },
    props:{
        employers:Array,
    },
    methods:{
        onDragstart(ev, emp){
            // console.log(ev,emp);
            ev.dataTransfer.dropEffect='move';
            ev.dataTransfer.effectAllowed='move';
            ev.dataTransfer.setData('emp',emp.toString());
        },
      
    }
  };
  </script>
  
  <style>
  .drag-list{
    display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  grid-auto-rows: minmax(299px, 350px);
  grid-auto-columns: minmax(255px, auto);
  }

  
  
  /* .list-clear-leave-active {
      position: absolute;
  } */
  </style>
  