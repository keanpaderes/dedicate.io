<template>
  <div id="app">
    <template v-if="$route.name !== 'message'">
      <TopHeader class="top-header" />
    </template>
    <transition
      name="fade"
      mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import TopHeader from '@/components/header/TopHeader.vue';

export default {
  name: 'App',
  components: {
    TopHeader,
  },
};
</script>

<style lang="scss">
</style>
