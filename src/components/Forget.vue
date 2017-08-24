<template>
    <div class="login-module">
        <div class="login-header">
            <div class="login-box">
                <span></span>
                <h4>注册</h4>
            </div>
        </div>
        <div class="login-form">
            <form action="">
                <div class="login-content">
                    <div class="login-label">
                        <label for="">手机号码</label>
                        <input type="text" placeholder="请输入手机号码">
                    </div>
                    <div class="login-label">
                        <label for="">验证码</label>
                        <input type="text" placeholder="请输入短信验证码">
                        <button type="button" class="get-code">获取验证码</button>
                    </div>
                    <div class="login-label">
                        <label for="">新密码</label>
                        <input type="password" placeholder="6-20位字母、数字或符号的密码">
                    </div>
                    <div class="reg-agrement">
                        <p><i></i>已阅读并同意<router-link to="">注册协议或服务条款</router-link></p>
                    </div>
                    <div class="btn">
                        <button type="button">完成</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
