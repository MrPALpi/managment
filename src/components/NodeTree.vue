<template>
    <li class="node-tree" >
      <span class="label">{{ node.label }}
        
        <MySelector @select="select" @addBack="addBack" :qualityes="emp">

        </MySelector>
             
    </span>
        
      <ul v-if="node.children && node.children.length">
        <node v-for="child in node.children" :key="child" :node="child" :emp="emp" @select="selected" @addBack="addBacked"></node>
      </ul>
    </li>
  </template>
  
  <script>
//   import { listen as tauriListen } from "@tauri-apps/api/event";
import MySelector from './MySelector.vue';
  export default {
    name: "node",
    components:{
        MySelector
    },
    props: {
      node: Object,
      emp:Array,
    },

    methods:{
        addBack(emplBack){
          // console.log("Добавить назад 1", emplBack);
          this.$emit("addBack",this.node,emplBack);
        },
        addBacked(node,emplBack){
          // console.log("Добавить назад 1", emplBack);
          this.$emit("addBack",node,emplBack);
        },
        selected(node,value){
            this.$emit("select",node,value);
        },
        select(value){
            this.$emit("select",this.node,value);
        }
    },


  };
  </script>