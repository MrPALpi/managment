<template>
    <div class="flex-center">
        
        <div class="desk display__block" @drop="console.log('sss')">
                <TreeEmployers></TreeEmployers>
          
        </div>
   
    </div>
</template>

<script>

import TreeEmployers from './TreeEmployers.vue';
import globalStore from '../stores/globalStore'

import { mapActions,  mapState } from 'pinia';
import { invoke } from "@tauri-apps/api";
export default {
    name:"create-empl",
    components:{

        TreeEmployers
    
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
<style>
.grid{
    display: grid;
}
</style>