<template>
<div class="content">
    <div class="top-header">
        <div v-if="is_login" class="me-login">
            <router-link to="/person">
            <dl class="login-option">
                <dt><img src="/static/assets/images/me/default.jpg" alt=""></dt>
                <dd><span>{{ userInfo.nickname }}</span></dd>
            </dl>
            </router-link>
        </div>
        <div class="me-no-login" v-else>
            <dl class="no-login-option">
                <dt v-if="userInfo.head_pic == ''"><img src="/static/assets/images/me/defaultavatar.png" alt=""></dt>
                <dt ><img :src="userInfo.head_pic" alt=""></dt>
                <dd><router-link to="/login">点击登录</router-link></dd>
            </dl>
        </div>
    </div>

    <div class="cen-list">
        <div class="cen-item">
            <div class="all-order">
                <span>全部订单</span>
                <router-link to="/order">查看全部订单<i class="arrow-right"></i></router-link>
            </div>
            <ul class="order-list">
                <li>
                    <router-link to="">
                        <i class="oicon1"></i>
                        <em>待接单</em>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <i class="oicon2"></i>
                        <em>待配送</em>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <i class="oicon3"></i>
                        <em>已配送</em>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <i class="oicon4"></i>
                        <em>已完成</em>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="cen-item">
            <ul class="some-item">
                <li v-if="is_login">
                    <router-link to="/balance">
                        <span>我的余额</span>
                        <em><span class="ft-red">300</span><i class="arrow-right"></i></em>
                    </router-link>
                </li>
                <li v-else>
                    <router-link to="/balance">
                        <span>我的余额</span>
                        <em><i class="arrow-right"></i></em>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <span>邀请有礼</span>
                        <em><i class="arrow-right"></i></em>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <span>收货地址</span>
                        <em><i class="arrow-right"></i></em>
                    </router-link>
                </li>
                <li>
                    <router-link to="/explain">
                        <span>常见问题</span>
                        <em><i class="arrow-right"></i></em>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <span>设置</span>
                        <em><i class="arrow-right"></i></em>
                    </router-link>
                </li>
                <li @click="Exit">
                    <router-link to="" >
                        <span>退出登录</span>
                        <em><i class="arrow-right"></i></em>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>


    <v-foot></v-foot>
</div>
</template>
<script>
    import footer  from '../public/footer.vue'
    export default{
        data() {
            return {
                is_login : false, //is login or no
                userInfo: {}
            }
        },
        components: {
            'v-foot': footer
        },
        created() {
            var user  = JSON.parse(localStorage.getItem('userinfo'))
            this.userInfo =  user;
            console.log(user)
            if(this.userInfo == undefined ){
                this.is_login = false
            }else{
                this.is_login = true
            }
            // console.log(user.nickname)
        },
        methods: {
            Exit: function(){
                var user = localStorage.removeItem('userinfo')
                this.userInfo =  user;
                console.log(localStorage.removeItem('userinfo'))
            }
        }
    }
</script>
<style lang="scss" scoped src="../../../static/assets/css/me.scss"></style>
