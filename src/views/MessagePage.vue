<template>
  <div class="about">
    <template v-if="this.messageKey === 'qLEux'">
      <div class="wrapper">
        <div class="heart">
        </div>
        <div class="message"><p>
          {{message}}
        </p></div>
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
  computed: {
    message() {
      return Messages[this.messageKey];
    },
  },
};
</script>
