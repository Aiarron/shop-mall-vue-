<template>
    <div class="content-temple">
        <div class="content content-detail">
            <div class="con-detail"   id="chatBot">
                <div class="det-top">
                    <swiper :options="swiperOptionIn" class="swiper-position">
                        <swiper-slide v-for="(s,i) in result.goods.images" :key="i">
                            <img class="recommand-swiper-img" :src="s.image_url">
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>  
                    </swiper> 
                    <div class="det-num">
                        <span>2</span>
                        <em>/</em>
                        <span>6</span>           
                    </div>
                </div>
                <div class="det-title">
                    <h1>{{ result.goods.goods_name }}</h1>
                    <p class="ems-tip">包邮 支付货到付款 更多秋冬新款</p>
                    <div class="det-about">
                        <span class="det-price">￥<em>{{ result.goods.shop_price }}</em><i>.00</i></span>
                        <a href="javascript:;" class="det-boon">返10元</a>
                        <em class="det-sales">销量：100</em>
                    </div>
                </div>
                <div class="h20"></div>
                <div class="det-norms det-size" @click="Spec(this)">
                    <span class="det-state">已选</span>
                    <span class="det-change-info">粉色 均码 1件</span>
                    <span class="det-icon"></span>
                </div>
                <div class="h20"></div>
                <div class=" det-tab">
                    <ul class="det-ul-tab">
                    <!--
                        <li v-bind:class="{'active' : index == active}" v-on:click="addClass(index)">图文详情</li>
                        <li v-bind:class="{'active' : index == active}" v-on:click="addClass(index)">商品规格</li>
                        -->
                        <li v-for="(i,index) in tab" v-bind:class="{'active' : index == active}" v-on:click="addClass(index)">{{ i.name }}</li>
                    </ul>
                    <div class="det-some-param">
                        <div class="det-part part0"></div>
                        <div class="det-part part1"></div>
                        
                        <component :is="part" transition="fade" transition-mode="out-in"></component>
                        
                    </div>
                </div>
            </div>
            <div class="our-option">
                <ul>
                    <li class="our-shop">
                        <router-link to="">
                            <em class="icon1"></em>
                            <i></i>
                            <p>购物车</p>
                        </router-link>
                    </li>
                    <li class="our-add">
                        <router-link to="">加入购物车</router-link>
                    </li>
                    <li class="our-buy"><router-link to="">立即购买</router-link></li>
                </ul>
            </div>
        </div>
        <div class="content-layer" v-if="showF" @click="Spec(this)">
            <div class="layer-con">
                <div class="layer-container">
                    <dl class="layer-price bd">
                        <dt><img src="" alt=""></dt>
                        <dd>
                            <h6>￥<b>259</b><i>.00</i></h6>
                            <p>商品编号：10658852025</p>
                        </dd>
                    </dl>
                    <div class="shop-color bd mp">
                        <p>颜色</p>
                        <ul>
                            <li>粉色</li>
                            <li>灰色</li>
                            <li>黑色</li>
                        </ul>
                    </div>
                    <div class="shop-size bd mp">
                        <p>尺寸</p>
                        <ul>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                        </ul>
                    </div>
                    
                    <div class="shop-num bd clearfix">
                        <span>购买数量</span>
                        <div class="shop-count">
                            <button>-</button>
                            <input type="num" value="1">
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div class="shop-my-opt">
                    <router-link to="">加入购物车</router-link>
                    <router-link to="">立即购买</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import tab1 from '../det/tab1.vue'
    import tab2 from '../det/tab2.vue'
    import qs from 'qs'
    import { swiper,swiperSlide } from 'vue-awesome-swiper'
    // import Banner from 'swiper'
    

    let key = 200
    export default {
        data() {
            return {
                showF:false,
                swiperOptionIn: {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    autoplay: 3000,
                },
                active:'0',
                part: 'part0',
                tab:[
                    { name:'图文详情' },
                    { name:'商品规格' }
                ],
                result: {}
            }
        },
        components:{
            'part0':tab1,
            'part1':tab2,
            // Banner,
            swiper,
            swiperSlide
        },
        methods:{
            Spec(index) {
                this.showF = !this.showF
            },
            addClass(index){
                this.active = index;
                this.part = 'part'+index;
            }
        },
        created() {
            var  id = this.$route.query.goods_id ;
            var  that = this 
            var data = qs.stringify({
                'goods_id': id  
            });
            this.$ajax({
                url: '/api/Api/Goods/goods_detail',
                method: 'POST',
                whithCredentials: true,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: data,
                responseType: 'json'
            }).then(function(res){
                console.log(res.data)
                if(res.data.code == key){
                    var result = res.data.data
                    console.log(result)
                    that.result =  result
                }
            }).catch(function(res){
                console.log(res)
            })
           
           
        }
    }
</script>
<style lang="scss" scoped src="../../../static/assets/css/style.scss"></style>

