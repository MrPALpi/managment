<template>
  <div class="full-window flex-center">
    <button class="form__btn back-button" @click="$router.back()">&#8592;</button>
   
    <div class="desk display__block">
      <ListEnterprise></ListEnterprise>
    </div>
  </div>
  
</template>

<script>
import ListEnterprise from "../enterprise/ListEnterprise.vue";
export default {
  components: {
    ListEnterprise,
  },
};
</script>

<style>

.display__block{
  display: block;
}
.back-button{
  position: absolute;
  top:10px;
  left:10px;
  padding: 5px;
  background: var(--tracing);
}
</style>
