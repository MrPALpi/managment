<template>
    <div class="desk">
        
        <div class="desk__item-left form">
            
            <EmployerList :employers="employers"></EmployerList>
        </div>
        <div class="desk__item-right form">
                <DraggableBlocks></DraggableBlocks>
          
        </div>
   
    </div>
</template>

<script>
import EmployerList from './EmployerList.vue';

import globalStore from '../stores/globalStore'

import { mapActions,  mapState } from 'pinia';
import { invoke } from "@tauri-apps/api";
export default {
    name:"create-empl",
    components:{
        EmployerList,
    
    },
    data(){
        return{
            // employers:[]
        }
    },
    methods:{
        ...mapActions(globalStore, ['pushEmployer','removeEmployer']),


        nextPage(){
            if (this.employers.length){
                this.$router.push("/enterprise")
            }
        },
    },
    computed:{
        ...mapState(globalStore,['employers'])
    },
    
}

</script>