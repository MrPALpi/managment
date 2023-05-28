<template>
    <div>
    <input  type="checkbox" :value="variant.content"  v-model="model" /> 
    <label class="list-item__text ml-5">{{ variant.content }}</label>
</div>
</template>

<script>
import FieldSet from '../UI/FieldSet.vue';
export default {
    components:{
        FieldSet,
    },
    props:{
        variantProps:{type:Object,
        required:true},
        modelValue: { type: [Array, String] },
        answer:[]
    },
    data(){
        return{
            variant:{},
        }
    },

    computed:{
        model:{
         get() {
            
            return this.modelValue;
          },
          set(value) {
            
            this.$emit("update:modelValue", value);
           
          }
      }
    },
    mounted(){
        this.variant=this.variantProps;
        // console.log(this.$refs.checkbox);
    },
    
 
}
</script>

<style>
.ml-5{
    margin-left: 5px;
}
</style>