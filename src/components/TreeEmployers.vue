<template>
  <div class="tree">
    <ul class="tree-list">
      <node-tree
        :node="treeData"
        :emp="BufferEmpl"
        @select="select"
        @addBack="addBack"
      ></node-tree>
    </ul>
    <button @click="rateSchema" class="form__btn next-btn">Далее</button>
  </div>
</template>

<script>
import NodeTree from "./NodeTree.vue";
import { invoke } from "@tauri-apps/api";
import globalStore from "../stores/globalStore";
import { mapState } from "pinia";
export default {
  data() {
    return {
      treeData: {
        label: "A cool folder",
        children: [
          {
            label: "A cool sub-folder 1",
            children: [
              { label: "A cool sub-sub-folder 1" },
              { label: "A cool sub-sub-folder 2" },
            ],
          },
          { label: "This one is not that cool" },
          { label: "A cool sub-sub-folder 1" },
        ],
      },
      BufferEmpl: [],
      requestObj: {
        company_name: "OOP", //Заменить на company_name
        placements: {}, // Заменить на placements
      },
    };
  },
  methods: {
    select(node, value) { 
      this.BufferEmpl = this.BufferEmpl.filter(elm => elm.id!==value.id);
      // console.log(this.BufferEmpl.length);
      // const current_employer = this.employers.find(
      //   (el, ind, array)=> { 
      //     if (el.name == value.name) {
      //       return el;
      //     }
      //   }
      //   )
      this.requestObj.placements[node.label] = value;
      
  /*    console.log(JSON.stringify(this.requestObj));*/
    },
    async rateSchema(){
      if (Object.keys(this.requestObj.placements).length !== this.employers.length){ 
        alert("Не все пользователи включены");
        return;
      }
      
      const res = await invoke("check_placement", {"data":this.requestObj});
      console.log(Math.round(res*100));
      this.$router.push(`result/${Math.round(res*100)}`);
    },
  
    addBack(node,emplBack){
      delete this.requestObj.placements[node.label];
      this.BufferEmpl.push(emplBack);
      
    }
  },
  async mounted() {
    const res = await invoke("get_current_company", { companyName: this.jobe });

    this.treeData = res.tree;
    this.requestObj.company_name = this.jobe;
    this.BufferEmpl = this.employers;
  },
  computed: {
    ...mapState(globalStore, ["jobe", "employers"]),
  },
  components: {
    NodeTree,
  },
};
</script>

<style>
.next-btn{
  position: absolute;
  right: 0px;
  bottom: 0px;
}
.tree {
  width: 100%;
  height: auto;
  text-align: center;
  position: relative;
}
.tree ul {
  padding-top: 20px;
  position: relative;
  transition: 0.5s;
}
.tree li {
  display: inline-table;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: 10px;
  transition: 0.5s;
}
.tree li::before,
.tree li::after {
  content: "";
  position: absolute;
  top: 0;
  right: 50%;
  border-top: 1px solid #ccc;
  width: 51%;
  height: 10px;
}
.tree li::after {
  right: auto;
  left: 50%;
  border-left: 1px solid #ccc;
}
.tree li:only-child::after,
.tree li:only-child::before {
  display: none;
}
.tree li:only-child {
  padding-top: 0;
}
.tree li:first-child::before,
.tree li:last-child::after {
  border: 0 none;
}
.tree li:last-child::before {
  border-right: 1px solid #ccc;
  border-radius: 0 5px 0 0;
  -webkit-border-radius: 0 5px 0 0;
  -moz-border-radius: 0 5px 0 0;
}
.tree li:first-child::after {
  border-radius: 5px 0 0 0;
  -webkit-border-radius: 5px 0 0 0;
  -moz-border-radius: 5px 0 0 0;
}
.tree ul ul::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  border-left: 1px solid #ccc;
  width: 0;
  height: 20px;
}

.tree li span {
  border: 1px solid #ccc;
  padding: 10px;
  display: inline-grid;
  border-radius: 5px;
  text-decoration-line: none;
  border-radius: 5px;
  transition: 0.5s;
}
.tree li span:hover,
.tree li span:hover i,
.tree li span:hover span,
.tree li span:hover + ul li span,
.tree li span:hover + ul li span div {
  background: #c8e4f8;
  color: #000;
  /* border: 1px solid #94a0b4; */
}
.tree li span:hover + ul li::after,
.tree li span:hover + ul li::before,
.tree li span:hover + ul::before,
.tree li span:hover + ul ul::before {
  border-color: #94a0b4;
}
</style>
