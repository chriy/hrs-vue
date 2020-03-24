<template>
    <div class="footer-container">
        <div class="footer">
            <div class="copyright">
                <p>
                    <span>2020 &copy; 房屋租赁系统  懂您的需求 服务于心</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'footer',
    }
</script>

<style scoped>
    .footer-container {
        width: 100vw;
        background-color: #f7f7f7;
    }

    .footer {
        width: 1000px;
        height: 100%;
        margin: 0 auto;
    }
    .footer .copyright{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #909399;
        box-shadow: #2c3e50;
        font-size: 14px;
    }
</style>
