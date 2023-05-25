<template>
  <div class="full-window">
    <div class="end-btn">
      <button @click="$router.push('/about')" class="form__btn">About</button>
    </div>
    <div class="flex-center full">
  <auth-form></auth-form>
</div>
</div>
</template>

<script>
import AuthForm from './AuthForm.vue'
export default {
  components:{
    AuthForm,
  }
}
</script>

<style>
.full{
  height: 90%;
  width: 100%;
}
</style>