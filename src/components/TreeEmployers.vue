<template>
  <div class="tree">
    <ul class="tree-list">
      <node-tree
        :node="treeData"
        :emp="BufferEmpl"
        @select="select"
      ></node-tree>
    </ul>
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
        job_name: "OOP", //Заменить на company_name
        workers: {}, // Заменить на placements
      },
    };
  },
  methods: {
    select(node, value) {
      // console.log(node);
      // this.requestObj.workers = this.requestObj.workers.filter((elm)=>
      //   Object.values(elm)[0]!=value);
      //this.requestObj.workers.push({[node.label]:value});
      const current_employer = this.employers.find(
        (el, ind, array)=> { 
          if (el.name == value) {
            return el;
          }
        }
        )
      this.requestObj.workers[node.label] = current_employer;
      
      console.log(JSON.stringify(this.requestObj));
    },
    // selected(value)
  },
  async mounted() {
    console.log(this.employers);
    const res = await invoke("get_current_company", { companyName: this.jobe });

    this.treeData = res.tree;
    this.requestObj.job_name = this.jobe;
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
.tree {
  width: 100%;
  height: auto;
  text-align: center;
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
  border: 1px solid #94a0b4;
}
.tree li span:hover + ul li::after,
.tree li span:hover + ul li::before,
.tree li span:hover + ul::before,
.tree li span:hover + ul ul::before {
  border-color: #94a0b4;
}
</style>
