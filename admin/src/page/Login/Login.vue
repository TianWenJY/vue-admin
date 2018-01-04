<template>
  <div class="main">
    <section>
      <img src="../../images/login/logo.png" alt="">
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
              <el-input v-model="loginForm.username" placeholder="请输入用户名" ref="username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
              <el-input v-model="loginForm.password" placeholder="请输入密码" ref="password"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary"  @click="submitForm()" class="submit_btn">登录</el-button>
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
        showLogin: false,
      }
    },
    methods: {
      submitForm:function() {
         this.$http.post(
           'http://api.cheshili.com.cn:8000/Admin/Login/LG',
          {

                 AdminName: this.loginForm.username,
                 Password: this.loginForm.password,
                 Platform: '23',
                 Mobile: 1,
           },
           // {
           //   headers: {'Content-Type': 'application/x-www-form-urlencoded'}
           // }
           {emulateJSON: true}
         ).then((res) => {
           res = res.body;
           if(res.Status == 0 && res.Data) {
             // $$.setToken(res.Data.WToken);
             sessionStorage.setItem('__UINFO__',res.Data.Info);
             this.$router.push({ path: '/index'})
           }
         }),function (err){
           console.log(err)
         }
       }
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
  form {
    width: 220px;
    height: 240px;
    position: absolute;
    top: 40px;
    right: 15%;
  }
  .submit_btn {
    width: 100%;
  }
  .main >section > img {
    width: 338px;
    height: 70px;
    margin-top: 75px;
    margin-left: -30%;
  }
  @media (max-width: 1000px) {
    div.main > section > img {
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      top: 10%;
    }
  }
  @media (max-width: 1000px)
  {
    div.main > section > form {
      margin: 0 auto;
      right: 0;
      left: 0;
      top: 40%;
    }
  }
  .el-input__inner {
    background-image: url("../../images/login/user.png");
    padding: 0 15px 0 35px;
    background-repeat: no-repeat;
  }

</style>
