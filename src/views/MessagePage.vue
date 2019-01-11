<template>
  <div class="about">
    <h1>{{ messageKey }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MessagePage',
  props: [
    'messageKey',
  ],
};
</script>
