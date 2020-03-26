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
                    <div class="address">
                        <i class="el-icon-location-information "></i> <span class="address-locate"
                                                                            v-text="city"
                                                                            @click="changeAddress"></span>
                        <el-dialog
                                title="城市选择"
                                :visible.sync="changeAddressFlag"
                                append-to-body
                                width="30%">

                            <div>
                                <dl class="city-list">
                                    <dd class="city city-active" v-for="(city, index) in cityList"
                                        v-text="city.city_name" :class="{city_active: index === cityActive}"
                                        @click="cityActive = index"></dd>
                                </dl>
                                <p style="color: #909399">其他城市陆续开通中，敬请期待</p>
                            </div>

                            <span slot="footer" class="dialog-footer">
                                <el-button @click="changeAddressFlag = false">取 消</el-button>
                                <el-button type="primary" @click="changeCity">确 定</el-button>
                            </span>
                        </el-dialog>
                    </div>
                    <div class="operate">
                        <a href="/login" v-if="!isLogin">登录</a>
                        <a href="javascript:void(0)" v-if="isLogin">退出</a>
                        <a href="/profile" v-if="isLogin">个人中心</a>
                    </div>
                </div>
            </div>

            <div class="search" ref="search">
                <img :src="require('@/assets/images/logo/logo_opacity.png')" v-show="!isFixed" height="120px" alt="">
                <form action="" onsubmit="search">
                    <div>
                        <img :src="require('@/assets/images/logo/logo_opacity.png')" v-show="isFixed" height="56px"
                             style="vertical-align: middle" alt="">
                        <input type="text" ref="keywords" class="keywords" placeholder="你一定能找到你满意的">
                        <span class="el-icon-search search-btn" ref="btn" @click="search"></span>
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

        <!--house list-->
        <div class="house-list">
            <HouseList/>
        </div>

        <div class="footer">
            <Footer/>
        </div>

    </div>
</template>

<script>

    import HouseList from './HouseList'
    import Footer from '../footer/Footer';

    export default {
        name: 'Home',
        data() {
            return {
                isLogin: false,
                imgList: [
                    require('@/assets/images/banner/banner-3.jpg'),
                    require('@/assets/images/banner/banner-4.jpg'),
                    require('@/assets/images/banner/banner-1.jpg'),
                    require('@/assets/images/banner/banner-2.jpg')
                ],
                // 吸顶状态
                isFixed: false,
                // 控制城市切换 dialog
                changeAddressFlag: false,
                // 默认地址
                city: "全国站",
                // 当前选中城市ID
                cityActive: 0,
                cityList: [
                    {city_id: 1, city_name: "全国站"},
                    {city_id: 2, city_name: "北京"},
                    {city_id: 3, city_name: "上海"},
                    {city_id: 4, city_name: "深圳"},
                    {city_id: 5, city_name: "广州"},
                    {city_id: 6, city_name: "杭州"},
                    {city_id: 7, city_name: "苏州"},
                    {city_id: 8, city_name: "成都"},
                    {city_id: 9, city_name: "重庆"},
                    {city_id: 10, city_name: "武汉"},
                    {city_id: 11, city_name: "南昌"},
                    {city_id: 12, city_name: "贵州"},
                    {city_id: 13, city_name: "厦门"},
                    {city_id: 14, city_name: "佛山"},
                    {city_id: 15, city_name: "东莞"},
                    {city_id: 16, city_name: "南京"},
                    {city_id: 17, city_name: "青岛"},
                    {city_id: 18, city_name: "合肥"},
                    {city_id: 19, city_name: "天津"},
                    {city_id: 20, city_name: "郑州"},
                ]
            }
        },
        components: {
            Footer,
            HouseList
        },
        methods: {
            // 模糊查询
            search() {
                this.$message("OK")
                return false
            },
            // 显示更换城市 dialog
            changeAddress() {
                this.changeAddressFlag = true
            },

            // 切换城市
            changeCity() {
                this.city = this.cityList[this.cityActive].city_name
                this.changeAddressFlag = false
            },

            // 滚动吸顶
            handlerscroll() {
                let scrollTop = window.pageYOffset
                let oSearch = this.$refs.search
                let oKeywords = this.$refs.keywords
                let oBtn = this.$refs.btn

                if (scrollTop > 300) {
                    oSearch.style.position = 'fixed'
                    oSearch.style.top = 0
                    oSearch.style.zIndex = 12
                    oSearch.style.backgroundColor = "rgba(68, 77, 93, .8)"

                    oSearch.style.boxShadow = "0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)"
                    oSearch.style.height = '56px'
                    oKeywords.style.height = '40px'
                    oBtn.style.height = '40px'
                    this.isFixed = true
                } else {
                    oSearch.removeAttribute('style')
                    oKeywords.removeAttribute('style')
                    oBtn.removeAttribute('style')
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

    .home-container .address {
        float: left;
        width: 100px;
        height: 60px;
        line-height: 60px;
        color: #fff;
    }

    .home-container .address .address-locate {
        cursor: pointer;
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

    .city-list {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        justify-items: center;
        align-items: center;
        width: 100%;
    }

    .city-list .city {
        width: 60px;
        height: 30px;
        text-align: center;
        margin: 4px;
        box-sizing: border-box;
        line-height: 30px;
    }

    .city-list .city:hover {
        background-color: #409EFF;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
    }

    .city-list .city_active {
        background-color: #409EFF;
        color: #fff;
        border-radius: 4px;
    }


    .nav-bar .nav {
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


</style>
