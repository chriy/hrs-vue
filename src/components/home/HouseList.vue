<template>
    <div class="house-list">
        <div class="list-nav">
            <div class="list-title">
                <span>精选房源</span>
            </div>
            <div class="count">
                <span>当前找到 <strong style="color: #6495ed">8</strong> 套房源信息</span>
            </div>
            <div class="order">
                <div class="bg" ref="bg"></div>
                <a href="javascript:void(0)" class="order-link"
                    v-for="(item,index) in orderList" :key="item.key"
                    :class="{active:currIndex === index}" v-text="item.label"
                    @click='switchOrder(index)'>
                </a>
            </div>
        </div>

        <div class="list-item">
            <div class="item" v-for="i in 10" :key="i">
                <div class="lazy-image">
                    <img :src="require('@/assets/images/house/image.jpg')" height="100%" alt="">
                </div>
                <div class="house-desc">
                    <h2 class="desc">海月花园一期 房子业主诚心卖 看期 房子业主诚心卖 看期 房子业主诚心卖 看期 房子业主诚心卖 看期 房子业主诚心卖 看房方便 大三房</h2>
                    <el-divider></el-divider>
                </div>
                <div class="house-price">
                    <span class="sale-price">1280</span>
                    <span class="sale-unit">元/月</span>
                </div>
                <div class="">

                </div>
                <div class="house-data" style="text-align:left">
                    <el-tag type="" >三室一厅</el-tag>
                    <el-divider direction="vertical"></el-divider>
                    <el-tag type="success">120 平米</el-tag>
                    <el-divider direction="vertical"></el-divider>
                    <el-tag type="warning">整租</el-tag>
                    <el-divider direction="vertical"></el-divider>
                    <el-tag type="info">高层</el-tag>
                    <el-divider direction="vertical"></el-divider>
                    <el-tag type="danger">1200 元/月</el-tag>
                    <el-divider direction="vertical"></el-divider>
                    <el-tag type="warning">张江 紫薇路667弄</el-tag>
                    <p>
                        <el-tag type="info"><span class="el-icon-view">&emsp; <b>210</b> </span></el-tag>
                    </p>
                </div>
                <div style="text-align:left">
                    <el-link>发布时间：2020-03-01</el-link>
                </div>
            </div>
            <el-divider></el-divider>
            <div class="pagination">
                <el-button disabled>上一页</el-button>
                <el-button>下一页</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HouseList',
    data(){
        return{
            orderList:[
                {key: 1, label: '默认排序'},
                {key: 2, label: '价格升序'},
                {key: 3, label: '价格降序'},
            ],
            currIndex: 0,
            fullscreenLoading: true
        }
    },
    methods: {
        switchOrder(index){
            this.currIndex = index;
            this.$refs.bg.style.left = `${ this.currIndex * 134 + 22 }px`;


            const loading = this.$loading({
                lock: true,
                text: '数据加载中，请稍后~',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });

            setTimeout(()=>{
                loading.close();
            },1000)

        }
    }

}
</script>

<style scoped>
    .house-list {
        width: 100%;
        background-color: #f7f7f7;
        overflow-y: hidden;
    }

    .house-list .list-nav{
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        flex-direction: column;
        align-items: center;

        width: 1200px;
        margin: 40px auto 10px;
        height: 50px;
        border-bottom: 2px solid #6495ed;
    }

    .house-list .list-nav .list-title{
        width: 120px;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        background-color: #6495ed;
        color: #fff;
    }

    .house-list .list-nav .order{
        position: relative;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        float: right;
        width: 400px;
        height: 50px;
        line-height: 50px;
        color: #fff;
        align-items: center;
        justify-items: center;
        transition: all 0.5s;
    }

    .house-list .list-nav .bg{
        position: absolute;
        top:7px;
        left: 22px;
        z-index: 8;
        display: block;
        content: "";
        width: 90px;
        height: 36px;
        /* background-image: linear-gradient(#6495ed,#fff); */
        background-color: #6495ed;
        border-radius: 4px;
        transition: all 0.5s;
    }



    .house-list .list-nav .order-link{
        position: relative;
        z-index: 9;
        display: inline-block;
        text-decoration: none;
        color: #6495ed;
        width: 90px;
        height: 36px;
        line-height: 36px;
        box-sizing: border-box;
        border-radius: 5px;
    }

    .house-list .list-nav .active{
        color: #fff;
        border-radius: 4px;
        transition: all 1s;
    }

    .house-list .count{
        text-align: left;
        color: rgb(68, 84, 153);
    }


    .house-list .list-item{
        width: 1200px;
        height: auto;
        margin: 0 auto;
    }

    .house-list .list-item .item{
        display: grid;
        grid-template-columns: 2fr 5fr 1fr;
        grid-template-rows: repeat(3,1fr);
        grid-template-areas: "a h j" "a h c" "a h c";
        justify-content: center;
        align-items: center;
        width: 1200px;
        height: 240px;
        background-color: #fff;
        margin-top: 20px;
        border-radius: 10px;
        border: 1px solid #d7dae2;
    }

    .house-list .list-item .item .lazy-image{
        grid-area: a;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
    }

    .house-list .list-item .item .house-desc{
        width: 700px;
        text-align: left;
    }

    .house-list .list-item .item .house-desc .desc{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .house-list .list-item .item .house-data{
        font-size: 14px;
        color: #409EFF;
    }

    .house-list .list-item .item .view-count{
        font-size: 14px;
        color: #e6a23c;
    }


    .house-list .list-item .item .house-price{
        display: flex;
        grid-area: c;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        align-items: center;
        justify-items: center;
        justify-content: center;
    }

    .house-list .list-item .item .house-price .sale-price{
        font-size: 26px;
        font-weight: 700;
        color: #6495ed;
    }

    .house-list .list-item .item .house-price .sale-unit{
        font-size: 14px;
        font-weight: 700;
        color: #6495ed;
    }



    .house-list .list-item .pagination{
        width: 100%;
        height: 80px;

    }

</style>

