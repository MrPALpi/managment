<template>
    
    <div class="quality-item">
        {{ quality }}
    </div>
</template>

<script>
export default {
    name:'qual-item',
    props:{
        quality:'',
    },

}
</script>

<style>
.quality-item{
    /* БЕЛЫЙ ТЕКСТ */
    padding: 5px 10px;
    border-radius: 20px;
    color:var(--alt-color); 
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
.quality-item:nth-child(3n) {
  background: #ff0066;
}
.quality-item:nth-child(3n + 1) {
  background: #42e3b4;
}
.quality-item:nth-child(3n + 2) {
  background: #0087cd;
}
</style>