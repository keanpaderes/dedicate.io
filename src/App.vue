<template>
  <div id="app" class="uk-background-muted">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/api">API Sample</router-link>
    </div> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  h1, h2 {
    font-weight: normal;
  }

  // ul {
  //   list-style-type: none;
  //   padding: 0;
  // }
  //
  // li {
  //   display: inline-block;
  //   margin: 0 10px;
  // }

  a {
    color: #42b983;
  }
</style>
