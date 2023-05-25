<template>
    <li class="node-tree" >
      <span class="label">{{ node.label }}
        
        <MySelector @select="select" :qualityes="emp">

        </MySelector>
             
    </span>
        
      <ul v-if="node.children && node.children.length">
        <node v-for="child in node.children" :key="child" :node="child" :emp="emp" @select="selected"></node>
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
    // data(){
    //     return{
    //         empl:Object,
    //     }
    // },
    methods:{
        // onDragstart(ev, emp){
        //     console.log(ev,emp);
        //     ev.dataTransfer.dropEffect='move';
        //     ev.dataTransfer.effectAllowed='move';
        //     ev.dataTransfer.setData('emp',emp.toString());
        // },
        onDrop(ev, emp){
            console.log(ev);
        },
        selected(node,value){
            this.$emit("select",node,value);
        },
        select(value){
            // console.log(this.node,value);
            this.$emit("select",this.node,value);
        }
    },
    // async mounted() {
    //     this.tauriListeners.push(
    //       await tauriListen("tauri://file-drop", console.log("SSSSSSSS"))
    //     );
    // }

  };
  </script>