<template>
    <div class="detail-container">
        <div class="header">
            <div class="head">
                <div class="logo" style="float: left">
                    <a href="/" style="display:block;height: 60px">
                        <img :src="logoSrc" height="60px" alt="房屋租赁系统">
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
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>房屋详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="intro-detail">
            <div class="image">
                <el-image fit="cover" :src="src" style="height: 100%;">
                    <div slot="error" class="image-slot">
                        <el-image :src="nullImage"></el-image>
                    </div>
                </el-image>
            </div>
            <div class="details">
                <p>
                    <span class="tips">市场均价</span>
                    <span class="sale-price">8462</span>
                    <span class="sale-unit"> 元/月</span>
                </p>
                <p>
                    <span class="tips">发布时间</span>
                    <span class="publish-time">2020-03-28</span>
                    <el-divider></el-divider>
                </p>
                <div class="house-model">
                    <div>
                        <span class="type">3室2厅</span>
                        <span>户型</span>
                    </div>
                    <div>
                        <span class="area">121<b> m<sup>2</sup></b></span>
                        <span>面积</span>
                    </div>
                    <div>
                        <span class="type">坐北朝南</span>
                        <span>朝向</span>
                    </div>
                </div>
                <p>
                    <span class="tips">小区名称</span>
                    <span class="value">桃花源小区</span>
                </p>
                <p>
                    <span class="tips">房东电话</span>
                    <span class="value">18800000000</span>
                </p>
                <p>
                    <span class="tips">地理位置</span>
                    <span class="value">深圳市龙岗区</span>
                </p>
                <p>
                    <span class="tips">楼层高度</span>
                    <span class="value">32<span> 层</span></span>
                </p>
                <p>
                    <span class="tips">附近交通</span>
                    <span class="value">地铁2号线</span>
                </p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Detail',
        data() {
            return {
                isLogin: true,
                logoSrc: require('@/assets/images/logo/logo_opacity.png'),
                nullImage: require('@/assets/images/detail/null.jpg'),
                src: require('@/assets/images/detail/white-and-green-throw-pillows-1248583.jpg')
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .detail-container {
        height: 2000px;
    }

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

    .breadcrumb {
        display: flex;
        align-items: center;
        width: 1200px;
        height: 40px;
        margin: 0 auto;
        padding-left: 10px;
        box-sizing: border-box;
    }

    .detail-container .intro-detail {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        column-gap: 10px;
        width: 1200px;
        height: 460px;
        margin: 0 auto;
        padding: 0 0 10px 0;
    }

    .detail-container .intro-detail .image {
        height: 460px;
        border-radius: 2px;
    }

    .detail-container .intro-detail .image .image-slot {
        width: 100%;
        height: 100%;
        background-color: #331;
    }

    .detail-container .intro-detail .details {
        text-align: left;
        padding-left: 20px;
        box-sizing: border-box;
    }

    .detail-container .intro-detail .details .tips {
        display: inline-block;
        width: 110px;
        height: 22px;
        color: #777;
        font-size: 14px;
        line-height: 22px;
    }

    .detail-container .intro-detail .details .tips + .publish-time {
        font-size: 14px;
        color: #303133;
    }

    .detail-container .intro-detail .details .tips + .value {
        font-size: 14px;
        color: #303133;
    }

    .detail-container .intro-detail .details .house-model {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        height: 90px;
        justify-items: center;
        align-items: center;
    }

    .detail-container .intro-detail .details .house-model span {
        display: inline-block;
        width: 100%;
        padding: 6px 0;
        text-align: center;
    }

    .detail-container .intro-detail .details .house-model span:first-child {
        font-size: 22px;
        font-weight: 700;
        color: #303133;
    }

    .detail-container .intro-detail .details .house-model span:last-child {
        font-size: 14px;
        font-weight: 400;
        color: #909399;
    }

    .detail-container .intro-detail .sale-price {
        font-size: 60px;
        font-weight: 700;
        color: #6495ed;
    }

    .detail-container .intro-detail .sale-unit {
        font-size: 14px;
        font-weight: 700;
        color: #6495ed;
    }

</style>
