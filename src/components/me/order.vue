<template>
    <div class="content">
      <div class="order">
        <div class="order-h">
          <router-link to="/me" class="arrow-left"></router-link>
          <h1>我的订单</h1>
        </div>
        <div class="order-c">
          <ul class="order-c-h">
            <li v-for="(list,i) in lists" :key="i"  @click="choice($event,i)" :class="{ 'on': curr === i }" >
              <span>{{ list.name }}</span>
            </li>
          </ul>

          <div class="order-info" v-if="data_list">
            <div class="order-list">
              <div class="order-list-result">
                <span>订单号：201654248456425</span>
                <em>交易失败</em>
              </div>
              <div class="order-list-det">
                <router-link to="/orderDet">
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
              <div class="order-list-d pd20">
                <span>删除订单</span>
              </div>
            </div>
            <div class="order-list">
              <div class="order-list-result">
                <span>订单号：201654248456425</span>
                <em>交易成功</em>
              </div>
              <div class="order-list-det">
                <router-link to="">
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

          <div class="order-no-msg" v-else>
            <div class="no-data">
              <img src="/static/assets/images/me/od_ordercompleted.png" alt="">
              <p>暂无订单</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    import qs from 'qs'

    var user  = JSON.parse(localStorage.getItem('userinfo'))
    export default {
      data() {
        return {
          data_list: true,
          lists: [
            {'name': '全部','id': '0' },
            {'name': '待接单','id': '1' },
            {'name': '待配送','id': '2' },
            {'name': '已配送','id': '3' },
            {'name': '已完成','id': '4' },
          ],
          curr: 0,
          result: {},
          userInfo: {},
          page: 1
        }
      },
      // computed是计算属性，实时响应的
      computed:{},
      // methods是个方法,点击事件要执行一个方法
      methods:{
        
        choice(e,i){
          var that = this
          this.curr = i
          var data = qs.stringify({
            'token': user.token,
            'order_status': that.curr,
            'type' : 0,
            'page': that.page
          })
          this.$ajax({
                url: '/api/Api/Order/index',
                method: 'POST',
                whithCredentials: true,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: data,
                responseType: 'json'
            }).then(function(res){
                // console.log(res.data)
                if(res.data.code == 200){
                  that.result = res.data.data;
                  if(res.data.data.length <= 0 ){
                    that.data_list = false;
                  }else{
                    that.data_list = true;
                  }
                }
                
            }).catch(function(res){
                console.log(res)
          })
        }
        
      },
      created() {
        this.userInfo = user
        var that = this
        // console.log(that.curr)
        var data = qs.stringify({
          'token': user.token,
          'order_status': that.curr,
          'type' : 0,
          'page': that.page
        })
        this.$ajax({
              url: '/api/Api/Order/index',
              method: 'POST',
              whithCredentials: true,
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
              },
              data: data,
              responseType: 'json'
          }).then(function(res){
              // console.log(res.data)
              if(res.data.code == 200){
                that.result = res.data.data;
                if(res.data.data.length <= 0 ){
                  that.data_list = false;
                }else{
                  that.data_list = true;
                }
              }
              
          }).catch(function(res){
              console.log(res)
        })
      }
    }
</script>
<style lang="scss" scoped src="../../../static/assets/css/me.scss"></style>
