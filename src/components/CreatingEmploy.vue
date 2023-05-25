<template>
  <div class="employ-create">
    <div >
        <fieldset class="form__fieldset ">
            <legend>Фамилия сотрудника</legend>
            <input ref="name" @keyup.enter.prevent="focusInput"  class="form__input"
                type="text" v-model="employer.name" />
        </fieldset>
        
        <qualities-list class="m-20" @addOrDelete="deleteQuality" :qualities=" employer.qualities"></qualities-list>
 
    </div>
    <div >
        <div class="text-h1">Выбор качеств</div>
        <qualities-list class="m-20" @addOrDelete="addQuality" :qualities="qualities"></qualities-list>
    </div>
    <div class="end-btn">
        <button @click="addEmployer" class="form__btn">Добавить</button>
    </div>
  </div>
</template>

<script>
import QualitiesList from './QualitiesList.vue';
import { invoke } from "@tauri-apps/api";
export default {
    components:{
        QualitiesList
    },
    data(){
        return{
            employer:{
                name:'',
                qualities:[],
            },
            qualities: [
             
                
      ],
        }
    },
    methods:{
        addQuality(quality){
            if(!this.employer.qualities.find(qlt => qlt===quality)){
                this.employer.qualities.push(quality);
            }
            
        },
        deleteQuality(quality){
            this.employer.qualities = this.employer.qualities.filter(qlt => qlt!==quality);
        },
        addEmployer(){
            if (this.employer.name && this.employer.qualities.length){
                this.$emit('addEmployer', this.employer);
                this.employer={
                name:'',
                qualities:[],
            }
            }
            else{
                alert("Фамилия пуста или выберите качества");
            }
        }

    },
    async mounted() {
         this.qualities = (await invoke("get_skills", {})).map((elm)=> elm.name);
    },
}
</script>

<style>
.employ-create{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.m-20{
   
    margin-top: 20px;
}
.end-btn{
    display: flex;
    justify-content: flex-end;
}
</style>