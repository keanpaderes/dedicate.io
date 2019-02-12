<template>
  <div class="about">
    <template v-if="this.messageKey === 'qLEux'">
      <!-- <div class="wrapper">
        <div class="heart">
        </div>
        <div class="message"><p>
          {{message}}
        </p></div>
      </div> -->
      <div class="start-button">
        <h2>Click on the circle</h2>
      </div>
      <div v-bind:class="{
        'heart': true,
        'heart-anim': isStartAnimation}" @click="startHeartAnimation">
      </div>
    </template>
    <template v-else>
      <h1>{{ message }}</h1>
    </template>
  </div>
</template>

<script>
import Messages from '@/services/Messages';

export default {
  name: 'MessagePage',
  props: [
    'messageKey',
  ],
  data() {
    return {
      isStartAnimation: false
    };
  },
  computed: {
    message() {
      return Messages[this.messageKey];
    },
  },
  methods: {
     startHeartAnimation() {
       console.log('clicked');
       this.isStartAnimation = true;
     }
  }
};
</script>
