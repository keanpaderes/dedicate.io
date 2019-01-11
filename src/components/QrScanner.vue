<template>
  <div>
    <p class="error">{{ error }}</p>
    <h1>Scan your message here</h1>
    <!-- <p class="decode-result">Last result: <b>{{ result }}</b></p> -->
    <div v-if="cameraStatus">
      <QrcodeStream @decode="onDecode" @init="onInit" />
    </div>
    <button @click="toggleCameraStatusAction">Turn on Camera</button>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader';
import { mapActions, mapGetters } from 'vuex';
import Messages from '@/services/Messages';

export default {
  name: 'QrScanner',
  components: {
    QrcodeStream,
  },
  data() {
    return {
      error: '',
      result: '',
    };
  },

  computed: {
    ...mapGetters({
      cameraStatus: 'getCameraStatus',
    }),
  },

  methods: {
    ...mapActions([
      'toggleCameraStatusAction',
    ]),

    onDecode(result) {
      this.result = result;
    },

    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = 'ERROR: you need to grant camera access permisson';
        } else if (error.name === 'NotFoundError') {
          this.error = 'ERROR: no camera on this device';
        } else if (error.name === 'NotSupportedError') {
          this.error = 'ERROR: secure context required (HTTPS, localhost)';
        } else if (error.name === 'NotReadableError') {
          this.error = 'ERROR: is the camera already in use?';
        } else if (error.name === 'OverconstrainedError') {
          this.error = 'ERROR: installed cameras are not suitable';
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = 'ERROR: Stream API is not supported in this browser';
        }
      }
    },
  },

  watch: {
    // eslint-disable-next-line
    result(newResult, oldResult) {
      if (newResult !== '' && Object.keys(Messages).includes(newResult)) {
        this.$router.push({
          name: 'message',
          params: {
            messageKey: newResult,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>
