<template>
  <div class="hello">
    <div class="login">
      <h3>login</h3>
      <input v-model="login.userName" name="userName" type="text" placeholder="请输入用户名"><br><br>
      <input v-model="login.passWord" name="passWord" type="password" placeholder="请输入密码"><br><br>
      <input @click="submit" type="button" value="确定">

    </div>

    <div class="register">
      <h3>register</h3>
      <input v-model="register.userName" name="userName" type="text" placeholder="请输入用户名"><br><br>
      <input v-model="register.passWord" name="passWord" type="password" placeholder="请输入密码"><br><br>
      <input @click="handleRegister" type="button" value="确定">

    </div>

  </div>
</template>

<script>
import ls from '../util/ls';

export default {
  name: 'login',
  data () {
    return {
      login:{
        userName:'',
        passWord:''
      },
      register:{
        userName:'',
        passWord:''
      },
    }
  },
  methods: {
    submit(){
      this.$http.post("/login", {
        'userName':this.login.userName,
        'passWord':this.login.passWord
      })
      .then( res => {
        let result = res
        console.log(result);
        if(result.state){
          ls.set('access_token',result.access_token);
          ls.set('userInfo',result);

          this.$router.push('/home')
        }
      }, err => {
        throw err
      })
    },
    handleRegister(){
      this.$http.post("/register",{
        'userName':this.register.userName,
        'passWord':this.register.passWord
      })
        .then( res => {
          console.log(res);
        }, err => {
          throw err
        })
    }
  }
}
</script>

<style scoped>
  .login,
  .register{
    display: inline-block;
    margin: 2rem
  }
</style>
