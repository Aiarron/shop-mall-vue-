<template>
    <div class="login-module">
        <div class="login-header">
            <div class="login-box">
                <span></span>
                <h4>登录</h4>
                <router-link to="/register">注册</router-link>
            </div>
        </div>
        <div class="login-form">
            <form  @submit.prevent="submit">
                <div class="login-content">
                    <div class="login-label">
                        <label for="">手机号码</label>
                        <input type="text" placeholder="请输入手机号码" name="mobile" v-model="user.mobile">
                    </div>
                    <div class="login-label">
                        <label for="">密码</label>
                        <input type="password" placeholder="请输入密码" name="password" v-model="user.password">
                    </div>
                    <div class="btn">
                        <button type="submint">登陆</button>
                    </div>
                </div>
            </form>
            <router-link to="/forget" class="forget-btn">忘记密码？</router-link>
        </div>
        <div class="other-login-type">
            <h1>第三方登录</h1>
            <ul>
                <li>
                    <span class="qq-icon"></span>
                    <p>QQ</p>
                </li>
                <li>
                    <span class="wx-icon"></span>
                    <p>微信</p>
                </li>
                <li>
                    <span class="wb-icon"></span>
                    <p>微博</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import qs from 'qs'
    export default {
        data() {
            return {
                user: {
                    mobile : '',
                    password : ''
                }
            }
        },
        methods: {
           submit: function(event){
               var that = this
               var data = qs.stringify(this.user);
               this.$ajax({
                    url: '/api/Api/User/login',
                    method: 'POST',
                    whithCredentials: true,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: data,
                    responseType: 'json'
                }).then(function(res){
                    console.log(res.data)
                    // console.log(res.data.code)
                    if(res.data.code == 200){
                        that.$router.push({ path: '/me', params: { login: 1 }})
                        localStorage.setItem('userinfo',JSON.stringify(res.data.data));
                    }
                    
                }).catch(function(res){
                    console.log(res)
                })
           }
        }  
    }
</script>
<style lang="scss" scoped src="../../static/assets/css/public.scss"></style>
