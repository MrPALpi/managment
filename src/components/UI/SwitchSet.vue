<template>
<label  class="switch">
    <input @click="swipeCheck" type="checkbox">
    <span class="slider"></span>
</label>  
</template>

<script>
export default {
    name:"switch-set",
    props:{
        check:false
    },
    methods: {
        swipeCheck(){
            // console.log(this.check);
            this.$emit("update:check",!this.check);
        }
    },
}
</script>

<style>
.switch input
{
  display: none;
}

.switch 
{
  display: inline-block;
  width: 40px; /*=w*/
  height: 20px; /*=h*/
  /* margin: 4px; */
  /* transform: translateY(50%); */
  position: relative;
}

.slider
{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 10px;
  box-shadow: 0 0 0 2px #777, 0 0 4px #777;
  cursor: pointer;
  border: 3px solid transparent;
  overflow: hidden;
  transition: 0.2s;
}

.slider:before
{
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: #777;
  border-radius: 30px;
  transform: translateX(-20px); /*translateX(-(w-h))*/
  transition: 0.2s;
}

.switch input:checked + .slider:before
{
  transform: translateX(20px); /*translateX(w-h)*/
  background-color: limeGreen;
}

.switch input:checked + .slider
{
  box-shadow: 0 0 0 2px limeGreen, 0 0 8px limeGreen;
}

</style>