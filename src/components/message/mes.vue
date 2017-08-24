<template>
    <div class="news">
        <ul >
            <li v-for="v in list"><router-link :to="{path:'/Newsdetail',query:{id:v.msg_id}}">
            <div class="time">
                <h1>{{ v.msg_content }}</h1>
                <span>{{ v.msg_time }}</span>
            </div>

            <p>{{ v.content }}</p>
            </router-link></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: []
            }
        },
        created() {
            this.$http.get("static/news.json", {emulateJSON: true}).then(function(res){
                res = res.body
                this.list=res.data.result
            })
        }
    }
</script>

<style lang="scss" scoped src="../../../static/assets/css/news.scss"></style>
