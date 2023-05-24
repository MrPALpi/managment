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
import globalStore from '../stores/globalStore'
import { mapActions,  mapState } from 'pinia';
import { invoke } from "@tauri-apps/api";
export default {
    name:"create-empl",
    components:{
        CreatingEmploy,
        EmployerList,
    },
    data(){
        return{
            // employers:[]
        }
    },
    methods:{
        ...mapActions(globalStore, ['pushEmployer','removeEmployer']),

        async addEmployer(empl){
            // const lengthEMPL = this.employers.length
            if (this.employers.length < 5){
                // empl.id = lengthEMPL;
                console.log(this.employers.length);
                const workerToReq = {name:empl.name, skills:empl.qualities};
            
                const result = await invoke("get_vacancies_for_worker", {"worker":workerToReq});
                empl.vacancies = this.toArray(result.vacancies)
                console.log(empl);
                this.pushEmployer(empl);
                // console.log(this.employers,"SSS");
                // this.employers.push(empl);
            }
            
        },
        toArray(res){

            const sortable = Object.keys(res).sort(function(a,b){return res[b]-res[a]})
            return sortable;
        },
        nextPage(){
            if (this.employers.length){
                this.$router.push("/enterprise")
            }
        },
        deleteEmp(empl){
            this.removeEmployer(empl);
        }
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
    /* display: block;
    position: relative; */
}
.desk__item-left,
.desk__item-right{
    max-width: none;
    width: 100%;
    margin: 0;
    overflow-y: auto;
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