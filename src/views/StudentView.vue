<template>
  <div class="full-window flex-center">
    <button class="form__btn back-button" @click="$router.back()">
      &#8592;
    </button>
    <div class="form">
      <button class="form__btn" @click="$router.push('/employers')">
        Пройти испытание
      </button>
      <button class="form__btn" @click="$router.push('/employers')">
        Пройти тест
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
