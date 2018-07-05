<template>
  <div class="base uk-flex uk-flex-strech uk-flex-right">
    <div class="uk-width-medium" uk-height-viewport="expand: true">
      <ParticleJS class="uk-position-cover"/>
      <div class="uk-position-large uk-position-center uk-card uk-card-default uk-card-medium uk-card-body">
        <h3 class="uk-card-title">Large</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <!-- <div class="uk-margin-top uk-dark uk-position-top-center">
        <h1 class="uk-heading-primary">{{this.title}}</h1>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import ParticleJS from '../components/home/ParticleJS.vue'

export default {
  name: 'home',
  components: {
    ParticleJS,
  },
  computed: {
    ...mapGetters({title:'getTitle'})
  },
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //     vm.$socket.emit('initialize_mirror', {})
  //     setTimeout(() => {
  //       if (!vm.initialized) {
  //         next('/setup')
  //         // router.go('/setup')
  //       }
  //     }, 5000)
  //   })
  // },
  created () {
  }
}
</script>

<style lang="scss">
</style>
