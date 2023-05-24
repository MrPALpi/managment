<template>
    
    <div class="list-item">
        <div class="list-item__text">Фамилия: {{ employer.name }} </div>
        <EmployerQualyti :qualityes="employer.vacancies">Профессии</EmployerQualyti>
        <EmployerQualyti :qualityes="employer.qualities">Качества</EmployerQualyti>
        <button class="list-item__delete" @click="deleteEmp"> &#10006; </button>
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

</style>