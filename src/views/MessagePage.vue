<template>
  <div class="about">
    <template v-if="this.messageKey === 'qLEux'">
      <div v-bind:class="{
        'message-header': true,
        'message-header-before': !isEndAnimation,
        'message-header-after': isEndAnimation,
        }">
        <transition
          name="fader"
          mode="out-in">
          <template v-if="!isEndAnimation">
            <h1>Click on the circle</h1>
          </template>
          <template v-else>
            <div>
              <div class="center-message">
                <div class="container">
                  <div class="small-hearts anim1">&hearts;</div>
                </div>
                <div class="container">
                  <div class="small-hearts anim2">&hearts;</div>
                </div>
                <div class="container">
                  <div class="small-hearts anim3">&hearts;</div>
                </div>
                <div class="container">
                  <div class="small-hearts anim4">&hearts;</div>
                </div>
              </div>
              <div class="center-message">
                <h2>
                  Happy Valentine's <br/> Day,
                  <span class='message-header-highlight'>Eunice</span>!
                </h2>
                <span>{{ message }}</span>
                <h2>I love you so much!</h2>
              </div>
            </div>
          </template>
        </transition>
      </div>
      <!-- <div v-else>
        <div class="center-after">
          <div class="container">
            <div class="small-hearts anim1">&hearts;</div>
          </div>
          <div class="container">
            <div class="small-hearts anim2">&hearts;</div>
          </div>
          <div class="container">
            <div class="small-hearts anim3">&hearts;</div>
          </div>
          <div class="container">
            <div class="small-hearts anim4">&hearts;</div>
          </div>
          <h1>Happy Valentine's Day, Eunice!</h1>
        </div>
      </div> -->
      <div v-bind:class="{
        'heart': true,
        'heart-anim': isStartAnimation,
        'heart-end': isEndAnimation,
        }" @click="startHeartAnimation">
      </div>
      <!-- <div class="message-box" v-if="isEndAnimation">
        <div class="message-box-container">
          <span>{{ message }}</span>
        </div>
      </div> -->
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
      isStartAnimation: false,
      isEndAnimation: false,
    };
  },
  computed: {
    message() {
      return Messages[this.messageKey];
    },
  },
  methods: {
    startHeartAnimation() {
      if (this.messageKey === 'qLEux' && !this.isEndAnimation) {
        console.log('clicked');
        this.isStartAnimation = true;
        document.body.className += ' html-anim';
        this.isEndAnimation = true;
        setTimeout(() => {
          document.body.className = ' html-bg-end';
          this.isStartAnimation = false;
        }, 1000);
      }
    },
  },
  mounted() {
    if (this.messageKey === 'qLEux') {
      document.body.className += ' html-bg';
    }
  },
  destroyed() {
    document.body.className = '';
  },
};
</script>
