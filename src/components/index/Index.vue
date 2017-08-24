<template>
    <div class="content">
        <div class="banner">
            <swiper :options="swiperOptionIn" class="swiper-position">
                <swiper-slide v-for="(s,i) in items.banner" :key="i">
                    <img class="recommand-swiper-img" :src="s.src">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>  
            </swiper> 
        </div>
        <div class="con-tab">
            <ul>
                <li>
                    <router-link to="/all">
                        <i class="tabicon1"></i>
                        <span>全部商品</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/invite">
                        <i class="tabicon2"></i>
                        <span>邀请有礼</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/question">
                        <i class="tabicon3"></i>
                        <span>常见问题</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="con-menu">
            <h1>商品推荐</h1>
            <div class="con-menu-all">
                <ul>
                    <li v-for="(s,i) in items.coin_goods_list" :key="i">
                        <dl>
                            <dt>
                                <img :src="s.original_img" alt="">
                            </dt>
                            <dd>
                               <router-link :to="{path:'/detail',query: {goods_id: s.goods_id}}">{{ s.goods_name }}</router-link>
                               <p><span>￥<em>{{ s.shop_price }}</em></span><i>返10元</i></p>
                            </dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>
        <v-foot></v-foot>
    </div>
    
    
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper' 
    import footer  from '../public/footer.vue'
     
    export default {
        name: 'content',
        components: {
            'v-foot': footer,
            swiper,
            swiperSlide
        },
        data() {
            return {
                items: [],
                swiperOptionIn: {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    autoplay: 3000,
                }
            }
        },
        //定义这个sweiper对象  
        computed: {  
            
        },  
        mounted () {  
             
        },
        created() {
            var that = this;
            this.$ajax({
                 url: '/api/Api/Index/index',
                 method: 'post',
                 whithCredentials: true
             }).then(function(res){
                 console.log(res.data.data)
                 if(res.data.code == 200){
                     that.items = res.data.data;
                 }
             }).catch(function(res){
                 console.log(res)
             })
        } ,
        ready() {
            
        }
    }
</script>
<style lang="scss" scoped src="../../../static/assets/css/style.scss"></style>
