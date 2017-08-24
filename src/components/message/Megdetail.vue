<template>
    <div class="content">
        <div class="news-info">
            <h1>站内消息</h1>
            <span>2016-02-14</span>
            <div class="news-about">
                <p>dhaoshfoahfoafhshoahoashfoahoahoash</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return{}
        },
        created() {
            console.log(this.$route.query.id)//获取地址栏的参数。so easy
        }
    }
</script>
<style lang="scss" scoped src="../../../static/assets/css/news.scss"></style>
