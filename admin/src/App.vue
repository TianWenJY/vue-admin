<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
//  name: 'app'
}
</script>

<style>
#app {
  font-family: "Microsoft YaHei", Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  height: 100%;
}
  html {
    height: 100%;
    overflow: hidden;
  }
  body {

    font-size: 14px;
    color: #434343;
    background-color: #EDF1F5;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
  }

</style>
