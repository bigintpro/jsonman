<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'jsonman'
  }
</script>

<style>
@font-face {
  font-family: icomoon;
  src: url('./assets/icomoon.ttf');
  font-weight: normal;
  font-style: normal;
}
body {
  margin: 0;
  padding: 0;
  width: 100%;
  /*height: 600px;*/
  height: calc(98vh);
}

#app {
  font-family: menlo, monospace, Tahoma, "微软雅黑", "幼圆", icomoon;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  height: 100%;
  width: 100%;
}
</style>
