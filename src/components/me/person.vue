<template>
    <div class="content">
        <div class="person">
            <div class="person-h">
                <router-link to="/me" class="arrow-left"></router-link>
                <h1>个人资料</h1>
            </div>
            <div class="person-c">
                <ul>
                    <li class="pes-avatar">
                        <router-link to="">
                            <span>头像</span>
                            <em><span class="avatar"><img src="/static/assets/images/me/default1.jpg" alt=""></span><i class="arrow-right"></i></em>
                            <input type="file">
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <span>昵称</span>
                            <em><span>小呆</span><i class="arrow-right"></i></em>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <span>性别</span>
                            <em><span>未设置</span><i class="arrow-right"></i></em>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <span>生日</span>
                            <em><span>0000-00-00</span><i class="arrow-right"></i></em>
                        </router-link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    // import MyClass from 'MyClass';
    // export { default } from 'foo';
    
    export default{}
</script>
<style lang="scss" scoped src="../../../static/assets/css/me.scss"></style>
