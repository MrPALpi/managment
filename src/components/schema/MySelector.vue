<template>
    <div class="qualityes-menu" @mouseenter="showMenu" @mouseleave="hideMenu" @click="showMenu">
      <span class="qualityes-menu__name" @click="clearSelect">
        {{ selected.name }} 
      </span>
      <transition name="qualityes-menu">
        <div class="qualityes-menu__wrap" v-show="show">
          <div v-for="qlt in qualityes" :key="qlt" class="qualityes-menu__item" @click="select(qlt)">
            {{ qlt.name }}
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      qualityes: Array,
    },
    data(){
        return{
            show:false,
            selected:{name:''},
        }
    },
    methods: {
      showMenu() {
        this.show=true;
      },
      hideMenu(){
        this.show=false;
      },
      clearSelect(){
        if (this.selected.name){
          console.log(this.selected);
        this.$emit("addBack", this.selected);
        this.selected = {name:''};
        }
      },
      select(qlt){
        if (this.selected.name){
          this.clearSelect();
        }
        this.selected = qlt;
        this.$emit("select", qlt);
        // }
      }
      
    }
  }
  </script>
  
  <style>
  .qualityes-menu {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 10px;
    
  }
  .qualityes-menu__wrap {
    display: flex;
    flex-direction: column;
    align-items: left;
    border-radius: 5px;
    /* border: 1px solid var(--tracing); */
    box-shadow: var(--shadow-box);
    background-color:var(--alt-color);
    position: absolute;
    z-index: 2;
    top: 100%;
    width: 100%;
    min-width: 170px;
  }
  
  .qualityes-menu__item:first-child {
    border-radius: 5px 5px 0 0;
  }
  .qualityes-menu__item:last-child {
    border-radius: 0 0 5px 5px;
  }
  .qualityes-menu__item {
    padding: 10px 10px;
    text-decoration: none;
    color: inherit;
    text-align: left;
    transition: all 0.05s ease-in;
    word-break: break-word;
    
  }
  .qualityes-menu__name{
    cursor: help;
    font-weight: 600;
  }

  .qualityes-menu__item:active{
    background: red;
  }


  @media (hover: hover) {
    .qualityes-menu__item:hover {
      background: linear-gradient(90deg, rgba(66, 227, 180, 1) 0%, rgba(0, 135, 205, 1) 100%);
      color: var(--alt-color);
    }
  }
  
  .qualityes-menu-enter-active,
  .qualityes-menu-leave-active {
    transition: all 0.3s ease;
  }
  .qualityes-menu-enter-from,
  .qualityes-menu-leave-to {
    opacity: 0;
    transform: translateY(-30px) scaleY(0.8);
  }
  </style>