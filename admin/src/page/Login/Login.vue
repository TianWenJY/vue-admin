<template>
  <div class="main">
    <section>
      <img src="../../images/login/logo.png" alt="">
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Login'
  }
</script>

<style>
  .main {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background:url(../../images/login/bg.jpg) no-repeat;
    background-size: cover;
  }
  div.main > section {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    text-align: center;
    top: 30%;
    height: 240px;
    transition: height 0.4s, top 0.4s;
  }
  html {
    overflow: hidden;
    height: 100%;
  }
  @media screen and ( max-width: 1000px ) {
     div.main section {
       height: 360px;
       top: 20%;
     }
  }
</style>
