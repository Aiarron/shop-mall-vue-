<template>
    <div class="balance">
        <div class="balance-t">
            <div class="order-h">
                <router-link to="/me" class="arrow-left"></router-link>
                <h1>我的余额（元）</h1>
            </div>
            <div class="coin">
                <h1>360.60</h1>
            </div>
        </div>
        <div class="balance-up"><router-link to="/withdraw">充值</router-link></div>

        <div class="balance-record">
            <h1>余额明细记录</h1>
            <ul v-if="item != '' ">
                <li v-for="v in item">
                    <dl>
                        <dt>
                            <p class="balance-name">{{ v.title }}</p>
                            <p class="balance-time">{{ v.time }}</p>
                        </dt>
                        <dd>
                            <p class="b-tips" v-if="v.status == -1">未审核通过</p>
                            <p class="b-tips" v-else-if="v.status == 0">处理中</p>
                            <p class="b-tips" v-else-if="v.status == 1">提现成功</p>
                            <p class="b-tips" v-else></p>
                            <span class="ft-red" v-if="v.type == 'add'">+{{ v.money }}</span>
                            <span class="ft-yellow" v-else-if="v.type == 'minus'">-{{ v.money }}</span>
                        </dd>
                    </dl>
                </li>
            </ul>
            <!--无数据-->
            <div class="no-record" v-else>
                <img src="/static/assets/images/null/blank_nodetailedrecord.png" alt="">
                <p>暂无明细记录</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                item:[]
            }
            // -1 未过审核 0处理中 1提现成功 2已经成功
            // add 加 minus减
        },
        created() {
            this.$http.get('static/balance.json').then(function(res){
                res = res.body
                this.item = res.data.result;
            })
        }
    }
</script>
<style lang="scss" scoped src="../../../static/assets/css/me.scss"></style>
