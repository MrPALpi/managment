<template>
    
    <div class="employer-item">
        <div>Фамилия: {{ employer.name }} </div>
        <EmployerQualyti :qualityes="employer.qualities"></EmployerQualyti>
        <button class="employer-item__delete" @click="deleteEmp"> &#10006; </button>
    </div>
</template>

<script>
import EmployerQualyti from './EmployerQualyti.vue';
export default {
    name:'employer',
    components:{
        EmployerQualyti,
    },
    props:{
        employer:{},
    },
    methods:{
        deleteEmp(){
            this.$emit("deleteEmp", this.employer);
        }
    }
}
</script>

<style>
.employer-item{
    /* БЕЛЫЙ ТЕКСТ */
    padding: 5px 10px;
    display: flex;
    border-radius: 20px;
    color:var(--color);
    justify-content: space-between;
    align-items: center; 
    /* cursor: pointer; */
    /* transition: background 0.2s ease-in-out; */
}
.employer-item__delete{
    cursor: pointer;
    background: none;
    border: none;
    color: red;
    font-size: 24px;
    font-weight: 900;
}
</style>