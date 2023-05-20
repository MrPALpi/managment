<template>
    <div class="employ-desk">
        
        <div class="employ-desk__item-left form">
            <CreatingEmploy @addEmployer="addEmployer"></CreatingEmploy>
        </div>
        <div class="employ-desk__item-right form">
            <EmployerList :employers="employers" @deleteEmp="deleteEmp"></EmployerList>
        </div>
   
    </div>
</template>

<script>
import CreatingEmploy from './CreatingEmploy.vue';
import EmployerList from './EmployerList.vue';
export default {
    name:"create-empl",
    components:{
        CreatingEmploy,
        EmployerList,
    },
    data(){
        return{
            employers:[]
        }
    },
    methods:{
        addEmployer(empl){
            this.employers.push(empl);
        },
        deleteEmp(emp){
            
            this.employers = this.employers.filter(empl => empl!==emp);
        }
    }
}
</script>

<style>
.employ-desk{
    display: flex;
    width: 100%;
    height: 90vh;
    gap: 30px;
    padding: 30px 0;
    
    
}

.employ-desk__item-left,
.employ-desk__item-right{
    max-width: none;
    width: 100%;
    margin: 0;
    overflow-y: auto;
    /* min-height: 500px; */
    
}

@media (max-width: 1100px) {
    .employ-desk{
        flex-wrap: wrap;
        padding: 20px;
    }
}
</style>