<template>
  <div class="main">
    <section>
      <img src="../../images/login/logo.png" alt="">
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
              <el-input v-model="input" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
              <el-input v-model="input" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登录</el-button>
          </el-form-item>
        </el-form>
      <p class="tip"></p>
      <p class="tip"></p>
      <p class="tip"></p>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Login',
    data() {
      return {
        loginForm: {
           username: '',
          password: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
        },
        showLogin: false,
      }
    },
    mounted(){
      this.showLogin=true;
      if(!this.adminInfo.id) {
          this.getAdminData()
      }
    },
    computed: {

    }
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
