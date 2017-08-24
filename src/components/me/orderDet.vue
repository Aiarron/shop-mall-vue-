<template>
    <div class="order-content">
        <div class="order-h">
          <router-link to="/order" class="arrow-left"></router-link>
          <h1>订单详情</h1>
        </div>
        <div class="order-menu">
            <div class="order-d-t">
                <div class="order-d-h-info">
                    <h1 class="order-fail" v-if="status == 0">商家未接单，订单失败</h1>
                    <h1 class="order-succ" v-else-if="status == 1">商家已接单，等待商家配送商品</h1>
                    <h1 class="order-wait" v-else>等待商家接单</h1>
                </div>
            </div>
            <div class="order-d-a">
                <div class="order-d-adr">
                    <router-link to="">
                        <div>
                            <div class="order-d-name-info">
                            <em>张小娴</em><span>137****8974</span>
                            </div>
                            <p><i></i>深圳市南山区大冲国际中心红鸟网络</p>
                        </div>
                        <i class="arrow-right"></i>
                    </router-link>
                </div>
            </div>
            <div class="order-d-b">
                <h6>买家备注</h6>
                <p>我是九亿少女的梦 我是九亿少女的梦我是九亿少女的梦 我是九亿少女的梦</p>
            </div>
            <div class="order-info order-mes">
                <div class="order-list">
                    <div class="order-list-result">
                        <h1>商品信息</h1>
                    </div>
                    <div class="order-list-det">
                        <router-link to="/detail">
                        <dl>
                            <dt>
                            <img src="/static/assets/images/me/default.jpg" alt="">
                            </dt>
                            <dd class="order-title">
                            <h6>痰湿弄啊撒 手受伤啊道具发哦飞洒哈的还能扫黄金佛阿訇撒防洪法守法哈佛啊沙发和 </h6>
                            <p><span>种类：荔枝蜜</span>；<span>规格：500m</span></p>
                            </dd>
                            <dd class="order-price">
                            <h4>￥50.00</h4>
                            <p>X1</p>
                            </dd>
                        </dl>
                        </router-link>
                        <router-link to="/detail">
                            <dl>
                                <dt>
                                <img src="/static/assets/images/me/default.jpg" alt="">
                                </dt>
                                <dd class="order-title">
                                <h6>痰湿弄啊撒 手受伤啊道具发哦飞洒哈的还能扫黄金佛阿訇撒防洪法守法哈佛啊沙发和 </h6>
                                <p><span>种类：荔枝蜜</span>；<span>规格：500m</span></p>
                                </dd>
                                <dd class="order-price">
                                <h4>￥50.00</h4>
                                <p>X1</p>
                                </dd>
                            </dl>
                        </router-link>
                    </div>
                    <div class="order-list-p pd20">
                        <p>实付￥<span>50.00</span></p>
                    </div>
                    </div>
            </div>
            <div class="order-d-o-i">
                <h1>订单信息</h1>
                <dl>
                    <dd>支付方式：货到付款</dd>
                    <dd>订单编号：12345688555</dd>
                    <dd>下单时间：2016-12-29 12:20:50</dd>
                </dl>
            </div>
        </div>
        <div class="order-del-option">
            <span class="btn">删除订单</span>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return{
                status : 1
            }
        }
    }
</script>
<style lang="scss" scoped src="../../../static/assets/css/me.scss"></style>
