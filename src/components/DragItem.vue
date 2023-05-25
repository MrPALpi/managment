<template>
    
    <div class="drag-item"  >
        <div class="list-item__text">Фамилия: {{ employer.name }} </div>
        <EmployerQualyti :qualityes="employer.vacancies">Профессии</EmployerQualyti>
        <EmployerQualyti :qualityes="employer.qualities">Качества</EmployerQualyti>
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
        employer:{required:true},

    },
    methods:{
        // onDragstart(ev, emp){
        //     console.log(ev,emp);
        //     ev.dataTransfer.dropEffect='move';
        //     ev.dataTransfer.effectAllowed='copy';
        //     ev.dataTransfer.setData('emp',emp.toString());
        // }
    }
}
</script>

<style>
.drag-item{
    display: flex;
    flex-direction: column;
    cursor: grab;
    gap: 30px;
    border: 1px solid var(--border);
    border-radius: 5px;
    padding: 30px 30px;
    text-align: center;
    transition: box-shadow .2s ease-in-out;
 
}
</style>