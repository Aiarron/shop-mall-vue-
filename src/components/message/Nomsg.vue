<template>
    <div class="content">
        <div class="no-msg">
            <img src="/static/assets/images/null/blank_nomessage.png" alt="">
            <p>暂时还没有消息哦~</p>
        </div>
        <v-foot></v-foot>
    </div>
</template>
<script>
    import footer from '../public/footer.vue'
    export default {
        data() {
            return {
                curr:'2'
            }
        },
        components: {

            'v-foot': footer
        }
    }
</script>
<style lang="scss" scoped src="../../../static/assets/css/news.scss"></style>
