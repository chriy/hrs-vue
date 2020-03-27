<template>
    <div class="detail-container">
        <div class="header">
            <div class="head">
                <div class="logo" style="float: left">
                    <a href="/" style="display:block;height: 60px">
                        <img :src="require('@/assets/images/logo/logo_opacity.png')" height="60px" alt="房屋租赁系统">
                    </a>
                </div>
                <div class="login">
                    <a href="/login" v-if="!isLogin">登录</a>
                    <a href="/profile" v-if="isLogin">个人中心</a>
                    <a href="javascript:void(0)" v-if="isLogin">退出</a>
                </div>
            </div>
        </div>
        <!--head title-->
        <div class="intro-content">
            <div class="intro">
                <span class="title">观海台花园 装修好价钱低看房方便</span>
                <el-button type="">预约看房</el-button>
                <el-button type="success">收藏房源</el-button>
            </div>
        </div>

        <!--image and detail-->
        <div class="intro-detail">
            <div class="image">

            </div>
            <div class="details">

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Detail',
        data() {
            return {
                isLogin: true
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .detail-container .header {
        width: 100%;
        height: 60px;
        background-color: rgba(68, 77, 93, .8);
    }

    .detail-container .header .head {
        width: 1200px;
        margin: 0 auto;
    }

    .detail-container .header .login {
        float: right;
        height: 60px;
        line-height: 60px;
    }

    .detail-container .header .login a {
        text-decoration: none;
        color: #fff;
        display: inline-block;
        width: 70px;
        height: 60px;
        font-size: 14px;
    }

    .detail-container .header .login a:hover {
        background-color: #409EFF;
    }

    .detail-container .intro-content {
        width: 100%;
        margin: 0 auto;
        height: 120px;
        display: flex;
        justify-content: center;
        justify-items: center;
        background-color: #f7f7f7;
    }

    .detail-container .intro-content .intro {
        display: flex;
        align-items: center;
        width: 1200px;
        height: 100%;
    }

    .detail-container .intro-content .intro .title {
        display: inline-block;
        font-size: 28px;
        width: 900px;
        text-align: left;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .detail-container .intro-detail {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        width: 1200px;
        height: 460px;
        margin: 0 auto;
        background-color: #498;
        padding: 10px;
        box-sizing: border-box;

    }


</style>
