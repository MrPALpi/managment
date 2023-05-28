<template>
    
    <div class="full-window flex-center">
        
        <div class="form">
            <div class="form__text">
            {{ this.name }}
        </div>
        <div class="form__text">
            {{ this.group}}
        </div>
        <div class="form__text">
          {{ $route.params.id>65 ? 'Поздравляем!' : $route.params.id>50 ? 'Неплохо!' : 'Есть куда расти.'}}
        </div>
        <div class="form__text">
         Ваш результат : {{ $route.params.id }}%
        </div>
        <button class="form__btn" @click="again">Занаво</button>
        </div>
    </div>
    
</template>

<script>
import globalStore from '../stores/globalStore'
import { mapState, mapActions } from 'pinia';
export default{
    data(){
        return{
            name:'',
            group:'',
        }
    },
    methods:{
        ...mapActions(globalStore, ['removeJobe','removeAllEmployer']),
        
        again(){
            this.removeAllEmployer();
            this.removeJobe();
            this.$router.push('/student');
        }
    },
    mounted(){
        this.name = localStorage.getItem('name');
        this.group = localStorage.getItem('group');
        
    },
    computed:{
        ...mapState(globalStore,['employers','jobe'])
    },

}
</script>

<style>
.creaters-text{
    font-weight: 600;
    font-size: 24px;
}

</style>