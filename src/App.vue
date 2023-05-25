<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>

import HelloWorld from './components/FormSubmit.vue'
export default{
  comments:{
    HelloWorld,
  }
}
</script>

<style >
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-left-enter-from,  .slide-right-leave-to  {
  transform: translateX(-60%);
  opacity: 0;
}

.slide-right-enter-from, .slide-left-leave-to {
  transform: translateX(60%);
  opacity: 0;
}

</style>
