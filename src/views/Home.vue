<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <QrScanner />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import QrScanner from '@/components/QrScanner.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    QrScanner,
  },
};
</script>
