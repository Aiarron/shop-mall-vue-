<template>
    <swiper :options="swiperOptionIn" class="swiper-position">
        <swiper-slide v-for="(s,i) in items.goods.images" :key="i">
            <img class="recommand-swiper-img" :src="s.image_url">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>  
    </swiper> 
</template>

<script>
    import { swiper,swiperSlide } from 'vue-awesome-swiper'
    export default{
        data() {
            return {
                swiperOptionIn: {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    autoplay: 3000,
                },
                items: {}
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        create() {
            console.log(this.childData)
        },
        props: ['childData']
    }
</script>
<style lang="scss" scoped src="../../../static/assets/css/style.scss"></style>