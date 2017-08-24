<template>
    <section>
        <div class="car-header">
            <h1>购物车(0)</h1>
        </div>
        <div class="car content" v-if="list">
            <div class="con-menu">
                <div class="con-menu-all" ref="menu" >
                    <ul>
                        <li v-for="(item,k) in items" :key="k">
                            <dl>
                                <dt>
                                    <img :src="item.original_img" alt="">
                                </dt>
                                <dd>
                                <router-link :to="{path:'/detail',query: item.goods_id}">{{ item.goods_name }}</router-link>
                                <p><span>￥<em>{{ item.shop_price }}</em></span><i>返{{ item.coin_rate }}%</i></p>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="nextpage" @click="dy">
                <span>下一页</span>
            </div>
        </div>

        
        <!--无数据-->
        <div class="no-car" v-else>
            <img src="/static/assets/images/null/blank_emptyshoppingcart.png" alt="">
            <p>您的购物车空空如也</p>
            <router-link to="">去逛逛</router-link>
        </div>
    </section>
</template>
<script>
    import qs from 'qs'

    export default {
        data() {
            return {
                list: true,
                page: 1,
                items: [],
                scrolled: false,
                top: 0
            }
        },
        created() {
            var that = this
            var data = qs.stringify({
                page : this.page
            })
            // this.$ajax({
            //      url: '/api/Api/Index/coin_index',
            //      method: 'post',
            //      whithCredentials: true,
            //      headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded'
            //     },
            //     data: data,
            //     responseType: 'json'
            //  }).then(function(res){
            //     //  console.log(res.data.data)
            //      if(res.data.code == 200){
                     
                     
            //          if(res.data.data.length <= 0){
            //              that.list = false
            //          }else{
            //              that.list = true

            //              that.items = res.data.data.coin_goods_list;
            //              console.log(that.items)
            //              that.page ++

            //          }
            //      }
            //  }).catch(function(res){
            //      console.log(res)
            // })
           

            getItem(this.$ajax,data,that)
        },
        methods: {
            handleScroll () {
                this.scrolled = window.scrollY > 0;
                // console.log(window.scrollY)
            },
            dy() {
                var that = this
                var data = qs.stringify({
                    page : this.page
                })
                getItem(this.$ajax,data,that)
            }
        },
        ready () {
            window.addEventListener('scroll', this.handleScroll);
            // console.log(this.handleScroll)
        },
        watch: {
            items: function(e){
                // console.log(this.$refs.menu.clientHeight)
            }
        },
        mounted() {
            
        }
    }
    //get item
    function getItem(ajax,data,that) {
        console.log(data)
        ajax({
                url: '/api/Api/Index/coin_index',
                method: 'post',
                whithCredentials: true,
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data,
            responseType: 'json'
            }).then(function(res){
            //  console.log(res.data.data)
                if(res.data.code == 200){
                    
                    console.log(res)
                    if(res.data.data.length <= 0){
                        that.list = false
                    }else{
                        that.list = true
                        console.log(that)
                        that.items = res.data.data.coin_goods_list;
                        // that.items.push(res.data.data.coin_goods_list)
                        
                        console.log(that.items)
                        that.page ++
                    }
                }
            }).catch(function(res){
                console.log(res)
        })
    }
</script>
<style lang="scss" scoped src="../../../static/assets/css/style.scss"></style>
<style lang="scss" scoped src="../../../static/assets/css/car.scss"></style>
