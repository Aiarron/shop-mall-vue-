<template>
    <div class="all">
        <ul class="all-list">
            <li v-for="(item,index) in showItem" @click="tab(index)" :class="{'active':index == active }"><router-link to="">{{ item.name }}</router-link></li>
        </ul>
        <div class="all-menu" id="menu">
            <div class="all-item" v-if="isShow == 'item0'">
                <ul class="clearfix">
                    <li>
                        <router-link to="/detail">
                            <div class="item-img">
                                <img src="//gw3.alicdn.com/bao/uploaded/i4/TB1tquEPpXXXXXNXXXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg" alt="">
                            </div>

                            <div class="item-info">
                                <h1>[热销]2016秋冬中长款连帽卫衣韩版宽松套头扯闪 响亮更多想嘎哈哦啊哈个</h1>
                                <p>￥<span>328.00</span><i>返10元</i></p>
                            </div>

                        </router-link>
                    </li>
                    <li>
                        <router-link to="/detail">
                            <div class="item-img">
                                <img src="//gw3.alicdn.com/bao/uploaded/i4/TB1tquEPpXXXXXNXXXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg" alt="">
                            </div>
                            <div class="item-info">
                                <h1>[热销]2016秋冬中长款连帽卫衣韩版宽松套头扯闪 响亮更多想嘎哈哦啊哈个</h1>
                                <p>￥<span>328.00</span><i>返10元</i></p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/detail">
                            <div class="item-img">
                                <img src="//gw3.alicdn.com/bao/uploaded/i4/TB1tquEPpXXXXXNXXXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg" alt="">
                            </div>
                            <div class="item-info">
                                <h1>[热销]2016秋冬中长款连帽卫衣韩版宽松套头扯闪 响亮更多想嘎哈哦啊哈个</h1>
                                <p>￥<span>328.00</span><i>返10元</i></p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="all-item" v-else-if="isShow == 'item1'">
                <ul class="clearfix">
                    <li>
                        <router-link to="/detail">
                            <div class="item-img">
                                <img src="//gw3.alicdn.com/bao/uploaded/i1/TB14nemQpXXXXXhXpXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg" alt="">
                            </div>

                            <div class="item-info">
                                <h1>[热销]2016秋冬中长款连帽卫衣韩版宽松套头扯闪 响亮更多想嘎哈哦啊哈个</h1>
                                <p>￥<span>328.00</span><i>返10元</i></p>
                            </div>

                        </router-link>
                    </li>
                    <li>
                        <router-link to="/detail">
                            <div class="item-img">
                                <img src="//gw3.alicdn.com/bao/uploaded/i1/TB14nemQpXXXXXhXpXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg" alt="">
                            </div>
                            <div class="item-info">
                                <h1>[热销]2016秋冬中长款连帽卫衣韩版宽松套头扯闪 响亮更多想嘎哈哦啊哈个</h1>
                                <p>￥<span>328.00</span><i>返10元</i></p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/detail">
                            <div class="item-img">
                                <img src="//gw3.alicdn.com/bao/uploaded/i1/TB14nemQpXXXXXhXpXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg" alt="">
                            </div>
                            <div class="item-info">
                                <h1>[热销]2016秋冬中长款连帽卫衣韩版宽松套头扯闪 响亮更多想嘎哈哦啊哈个</h1>
                                <p>￥<span>328.00</span><i>返10元</i></p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="all-item" v-else="isShow == 'item2'">
                <ul class="clearfix">
                    <li>
                        <router-link to="/detail">
                            <div class="item-img">
                                <img src="//gw3.alicdn.com/bao/uploaded/i4/2286670400/TB2hAHBoNXlpuFjSsphXXbJOXXa_!!2286670400.jpg_210x210.jpg" alt="">
                            </div>

                            <div class="item-info">
                                <h1>[热销]2016秋冬中长款连帽卫衣韩版宽松套头扯闪 响亮更多想嘎哈哦啊哈个</h1>
                                <p>￥<span>328.00</span><i>返10元</i></p>
                            </div>

                        </router-link>
                    </li>
                    <li>
                        <router-link to="/detail">
                            <div class="item-img">
                                <img src="//gw3.alicdn.com/bao/uploaded/i4/2286670400/TB2hAHBoNXlpuFjSsphXXbJOXXa_!!2286670400.jpg_210x210.jpg" alt="">
                            </div>
                            <div class="item-info">
                                <h1>[热销]2016秋冬中长款连帽卫衣韩版宽松套头扯闪 响亮更多想嘎哈哦啊哈个</h1>
                                <p>￥<span>328.00</span><i>返10元</i></p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/detail">
                            <div class="item-img">
                                <img src="//gw3.alicdn.com/bao/uploaded/i4/2286670400/TB2hAHBoNXlpuFjSsphXXbJOXXa_!!2286670400.jpg_210x210.jpg" alt="">
                            </div>
                            <div class="item-info">
                                <h1>[热销]2016秋冬中长款连帽卫衣韩版宽松套头扯闪 响亮更多想嘎哈哦啊哈个</h1>
                                <p>￥<span>328.00</span><i>返10元</i></p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showItem : [
                    { name: '综合' },
                    { name: '销量' },
                    { name: '价格' }
                ],
                active : '0' ,
                isShow: 'item0'
            }
        },
        methods: {
            tab(index) {
                this.active = index;
                this.isShow = 'item'+index;
            }
        }
    }
</script>
<style lang="scss" scoped src="../../../static/assets/css/style.scss"></style>
