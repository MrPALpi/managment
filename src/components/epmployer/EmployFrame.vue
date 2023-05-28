<template>
    <div class="desk">
        
        <div class="desk__item-left form">
            <CreatingEmploy @addEmployer="addEmployer"></CreatingEmploy>
        </div>
        <div class="desk__item-right form">
            <EmployerList :employers="employers" @deleteEmp="deleteEmp"></EmployerList>
            <div class="end-btn">
            <button :disabled="!this.employers.length" class="form__btn" @click="nextPage"> Далее &#8594; выбор предприятия</button>
            </div>
        </div>
   
    </div>
</template>

<script>
import CreatingEmploy from './CreatingEmploy.vue';

import EmployerList from './EmployerList.vue';
import globalStore from '../../stores/globalStore'
import { mapActions,  mapState } from 'pinia';
import { invoke } from "@tauri-apps/api";
export default {
    name:"create-empl",
    components:{
        CreatingEmploy,
        EmployerList,
    },

    methods:{
        ...mapActions(globalStore, ['pushEmployer','removeEmployer','removeAllEmployer']),

        async addEmployer(empl){
            const lengthEMPL = this.employers.length
            if (lengthEMPL < 5){
                empl.id = lengthEMPL;
                
                const workerToReq = {name:empl.name, skills:empl.qualities};
            
                const result = await invoke("get_vacancies_for_worker", {"worker":workerToReq});
                empl.vacancies = this.toArray(result.vacancies)
               
                this.pushEmployer(empl);
               
            }
            else{
                alert("Лимит работников = 5");
            }
            
        },
        toArray(res){

            const sortable = Object.keys(res).sort(function(a,b){return res[b]-res[a]})
            return sortable;
        },
        nextPage(){
            if (this.employers.length){
                this.$router.push("/enterprise")
            }else{
                console.log("Создайте работников");
            }

        },
        deleteEmp(empl){
            this.removeEmployer(empl);
        }
    },
    mounted(){
        this.removeAllEmployer();
    },
    computed:{
        ...mapState(globalStore,['employers'])
    },
    
}
</script>

<style>
.desk{
    display: flex;
    width: 100%;
    height: 90vh;
    gap: 30px;
    padding: 30px 0;
    
}
.desk__item-right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}
.desk__item-left,
.desk__item-right{
    max-width: none;
    width: 100%;
    margin: 0;
    overflow-y: auto;
    scrollbar-gutter: stable;
    padding: 40px 20px 20px 30px;
}
.form__btn:disabled{
    background: var(--tracing);
}

@media (max-width: 1100px) {
    .desk{
        flex-wrap: wrap;
        padding: 20px;
    }
}
</style>