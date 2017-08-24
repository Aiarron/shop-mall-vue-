<template>
    <div class="footer">
        <ul class="foo">
        <!--
            <li>
                <router-link to="">
                    <i class="foot-icon1"></i>
                    <span>首页</span>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <i class="foot-icon2"></i>
                    <span>购物车</span>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <i class="foot-icon3"></i>
                    <span>消息</span>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <i class="foot-icon4"></i>
                    <span>我的</span>
                </router-link>
            </li>-->

            <template v-for="(item,index) in items" >
                <li @click="footBar(index)" :class="{'active':index== curr}">
                    <router-link :to="item.link">
                        <i :class="'foot-icon'+item.index" ></i>
                        <span>{{ item.name }}</span>
                    </router-link>
                </li>
            </template>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return{
                items: [
                    { link: '/', name: '首页' , index: '1' },
                    { link: '/car', name: '购物车', index: '2' },
                    { link: '/news', name: '消息', index: '3'},
                    { link: '/me', name: '我的', index: '4' }
                ],
                curr:'0'
            }
        },
        methods:{ 
            footBar(index) {
                this.curr = index;
            }
        }
        
    }

     
</script>
<style lang="scss" scoped src="../../../static/assets/css/style.scss"></style>
