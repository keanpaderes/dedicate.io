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
              <div class="center-message smol-hearts">
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
      <div v-bind:class="{
        'heart': true,
        'heart-anim': isStartAnimation,
        'heart-end': isEndAnimation,
        }" @click="startHeartAnimation">
      </div>
    </template>
    <template v-else>
      <div class="center-message">
        <div>
          <div class="message-header message-header-after">
            <div id="crown-container" class="center-message">
              <svg id="crown" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50">
                <defs>
                  <svg:style type="text/css">.cls-1{fill:#0f74b5;}</svg:style>
                </defs>
                <title>Untitled-1</title>
                <polygon class="cls-1"
                  points="12.7 50 87.5 50 100 0 75 25 50 0 25.6 25 0 0 12.7 50"/>
              </svg>
            </div>
            <div class="center-message">
              <h2>
                {{ message.title }}
              </h2>
              <span>{{ message.main }}</span>
              <h2>{{ message.remarks }}</h2>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Messages from '@/services/Messages';
import mojs from '@mojs/core';

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
    } else {
      /* eslint-disable */
      const crown = document.querySelector('#crown');
      const container = document.querySelector('#crown-container');
  		const squashCurve = mojs.easing.path('M0,100.004963 C0,100.004963 25,147.596355 25,100.004961 C25,70.7741867 32.2461944,85.3230873 58.484375,94.8579105 C68.9280825,98.6531013 83.2611815,99.9999999 100,100');
      const angleEasing = mojs.easing.path('M0,100c1.2-1.1,25.8,0.4,34.8-8.5s25.1-72.6,34.5-82 S100,0,100,0');

			const moburst1 = new mojs.Burst({
  			parent: container,
				count: 10,
				duration: 970,
				radius: {0:120},
        children: {
          fill: { 'cyan' : 'yellow' }
        },
				delay: 230,
        repeat: 9999,
				shape : 'circle',
				fill : [ '#514c91' ],
				opacity: 0.6,
				x: '50%',
				y: '0',
				isRunLess: true,
				easing: mojs.easing.bezier(0.4, 1, 0.3, 1)
			}).generate().replay();


      new mojs.Tween({
        duration : 970,
        repeat:   0.01,
        delay:    0,
        onUpdate: function(progress) {
          const squashProgress = squashCurve(progress),
          scaleX = 1 - 2*squashProgress,
          scaleY = 1 + 2*squashProgress;
          const angleProgress = angleEasing(progress);
          crown.style.WebkitTransform = crown.style.transform = 'rotate(' + (360*angleProgress) + 'deg) scale3d(' + scaleX + ',' + scaleY + ',1)';
        }
      }).play();

      moburst1.play();
      // moburst2.play();
    }
  },
  destroyed() {
    document.body.className = '';
  },
};
</script>
