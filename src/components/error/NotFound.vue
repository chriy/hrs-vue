<template>
    <div class="error-page">
        <img :src="require('@/assets/images/error/404.gif')" height="300px" alt="404 Not Found">
        <h3>Page Not Found</h3>
        <h1>你访问的界面去火星啦</h1>
        <el-button type="primary" round @click="backHome">返回首页</el-button>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
    methods: {
        backHome(){
            this.$router.push('/')
        }
    }
}
</script>

<style>
    .error-page{
        width: 100vw;
        display: flex;
        align-items: center;
        align-content: flex-start;
        flex-direction: column;
        
        height: 100vh;
        background-color: #333;
        color: #fff;
        user-select: none;
    }
</style>