<template>
    <div class="list-item two-collumns">
        <div class="list-item__text">Предприятие: {{ entrprice }} </div>
        <button class="form__btn" @click="choose"> Выбрать </button>
    </div>
</template>

<script>

export default {
    name:'entrprice-item',

    props:{
        entrprice:'',
    },
    methods:{
        choose(){
            this.$emit("choose", this.entrprice);
        }
    }
}
</script>

<style>
.two-collumns{
    grid-template-columns: 3fr 0.5fr;
    grid-template-rows: 1fr;
    gap:40px
}
</style>