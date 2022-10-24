<template>
  <div>
    <el-input v-model="username" placeholder="请输入帐号"></el-input>
    <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
    <el-button type="primary" @click="login">登录</el-button>
<!--    <el-button type="primary" @click="register">注册</el-button>-->
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'welcome',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    register: function () {
      console.log(this.username+this.password)
      this.axios.post('/api/register/', {
        username: this.username,
        password: this.password
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
      // this.$router.push({path:'/registry'});
    },
    login: function () {
      console.log(this.username+this.password)
      this.axios.post('/api/login/', {
        username: 'admin',
        password: '1234'
      }).then(function () {
        alert('登录成功');
      }).catch(function (e) {
        alert(e)
      })
       this.$router.push({path: '/layout'});
    }
  }
}
</script>

<style scoped>

</style>
