<template>
    <div class="home-container">

        <!-- backTop -->
        <div class="backTop">
            <el-backtop></el-backtop>
        </div>

        <!-- 轮播图 banner -->
        <div class="header">
            <div class="nav-bar">
                <div class="nav">
                    <a href="/login" v-if="!isLogin">登录</a>
                    <a href="javascript:void(0)" v-if="isLogin">退出</a>
                    <a href="/profile" v-if="isLogin">个人中心</a>
                </div>
            </div>

            <div class="search" ref="search">
                <img :src="require('@/assets/images/logo/logo_opacity.png')" v-show="!isFixed" height="120px" alt="">
                <form action="" onsubmit="search">
                    <div>
                        <img :src="require('@/assets/images/logo/logo_opacity.png')" v-show="isFixed" height="60px"
                             style="vertical-align: middle" alt="">
                        <input type="text" ref="keywords" class="keywords" placeholder="你一定能找到你满意的">
                        <span class="el-icon-search search-btn" @click="search"></span>
                    </div>
                </form>
            </div>


            <div class="intro-tag">
                <div class="intro-item">
                    <div class="item">
                        <span class="el-icon-suitcase icon"></span>
                        <span class="type">短租</span>
                    </div>
                    <div class="item">
                        <span class="el-icon-house icon"></span>
                        <span class="type">新房</span>
                    </div>
                    <div class="item">
                        <span class="el-icon-office-building icon"></span>
                        <span class="type">二手房</span>
                    </div>
                    <div class="item">
                        <span class="el-icon-map-location icon"></span>
                        <span class="type">商铺</span>
                    </div>
                </div>
            </div>

            <div class="banner">
                <el-carousel :interval="5000" height="800px" arrow>
                    <el-carousel-item v-for="(item,index) in imgList" :key="index"
                                      :style="{background:`url(${item}) no-repeat center/cover`}">
                    </el-carousel-item>
                </el-carousel>
            </div>

        </div>


        <div class="house-list">
            <HouseList/>
        </div>

    </div>
</template>

<script>

    import HouseList from './HouseList'

    export default {
        name: 'Home',
        data() {
            return {
                isLogin: true,
                imgList: [
                    require('@/assets/images/banner/banner-3.jpg'),
                    require('@/assets/images/banner/banner-4.jpg'),
                    require('@/assets/images/banner/banner-1.jpg'),
                    require('@/assets/images/banner/banner-2.jpg')
                ],
                // 吸顶状态
                isFixed: false
            }
        },
        components: {
            HouseList
        },
        methods: {
            search() {
                this.$message("OK")
                return false
            },
            handlerscroll() {
                let scrollTop = window.pageYOffset
                let oSearch = this.$refs.search


                if (scrollTop > 300) {
                    oSearch.style.position = 'fixed'
                    oSearch.style.top = 0
                    oSearch.style.zIndex = 12
                    oSearch.style.backgroundColor = "#444d5d"
                    oSearch.style.height = '60px'
                    this.isFixed = true
                } else {
                    oSearch.removeAttribute('style')
                    this.isFixed = false
                }

            }


        },
        mounted() {
            window.addEventListener("scroll", this.handlerscroll)
        }
    }
</script>

<style scoped>
    .home-container {
        width: 100vw;
        height: auto;
    }

    .home-container .nav-bar {
        position: absolute;
        z-index: 10;
        width: 100vw;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .home-container .nav-bar .nav {
        width: 1200px;
        height: 60px;
        margin: 0 auto;
    }

    .home-container .nav-bar .nav a {
        float: right;
        display: block;
        width: 70px;
        height: 36px;
        line-height: 36px;
        text-decoration: none;
        margin: 10px;
        font-size: 14px;
        color: #fff;
    }

    .home-container .nav-bar .nav a:hover {
        background-color: #6495ed;
        border-radius: 5px;
    }

    .home-container .banner {
        z-index: -1;
    }

    /* search */
    .home-container .search {
        position: absolute;
        top: 160px;
        z-index: 10;
        width: 100%;
        min-width: 1200px;
        height: 46px;
    }

    .home-container .search .keywords {
        width: 40%;
        height: 46px;
        outline: none;
        padding: 2px 25px;
        box-sizing: border-box;
        border-radius: 40px;
        border: none;
        vertical-align: middle;
        background-color: rgb(255, 255, 255);
        color: #6495ed;
    }

    .home-container .search .search-btn {
        position: relative;
        right: 22px;
        width: 100px;
        height: 46px;
        background-color: #6495ed;
        color: #fff;
        font-size: 22px;
        font-weight: 700;
        line-height: 46px;
        border-radius: 0 40px 40px 0;
        cursor: pointer;
        vertical-align: middle;
    }

    .home-container .intro-tag {
        position: absolute;
        top: 380px;
        width: 100%;
        height: 200px;
        z-index: 10;
    }

    .home-container .intro-tag .intro-item {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        width: 1000px;
        height: 100%;
        margin: 0 auto;
        align-items: center;
        justify-self: center;
        user-select: none;
    }

    .home-container .intro-tag .intro-item .item {
        height: 160px;
        align-items: center;
        border-radius: 10px;
        cursor: pointer;
    }

    .home-container .intro-tag .intro-item .item:hover {
        background-color: rgb(100, 149, 237, .7);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .home-container .intro-tag .intro-item .item .icon {
        display: block;
        height: 100px;
        font-size: 48px;
        line-height: 100px;
        color: #fff;
    }

    .home-container .intro-tag .intro-item .item .type {
        display: block;
        font-size: 24px;
        color: #fff;
    }


    /* house list */
    .house-list {
        width: 100vw;
    }

    .fixed-top {
        backgroundColor: '#444d5d';
        height: '60px';
        position: 'fixed';
        top: 0;
    }

</style>
