<template>
    <div class="container">
        <div class="container">
            <div class="form-content">
                <div class="logo">
                    <img :src="logo" height="100%" alt="房屋租赁系统">
                </div>
                <!-- login -->
                <div class="login-form" v-show="loginFlag">
                    <p><span class="error" v-show="error" v-text="errorMsg"></span></p>
                    <p>
                        <input class="field" type="text" placeholder="手机/邮箱">
                        
                    </p>
                    <p>
                        <input class="field" type="password" placeholder="密码">
                    </p>
                    <div class="tips">
                        <p>
                            <span>
                                还没账号？<a href="javascript:void(0)" @click="switchPanel">立即注册</a>
                            </span>
                            <span></span>
                            <a href="">忘记密码</a>
                        </p>
                    </div>
                    <p>
                        <el-button type="default" plain @click="login">现在登录</el-button>
                    </p>
                </div>

                <!-- register -->
                <div class="regist-form" v-show="!loginFlag">
                    <p><span class="error" v-show="error" v-text="errorMsg"></span></p>
                    <p class="field-p">
                        <input class="field" type="text" placeholder="昵称">
                    </p>
                    <p class="field-p">
                        <input class="field" type="text" placeholder="手机/邮箱">
                        
                    </p>
                    <p class="field-p">
                        <input class="field" type="password" placeholder="密码">
                    </p>
                    <div class="tips">
                        <p>
                            <span>
                                已有账号？<a href="javascript:void(0)" @click="switchPanel">现在登录</a>
                            </span>
                        </p>
                    </div>
                    <p>
                        <el-button type="default" plain @click="regist">马上注册</el-button>
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return{
            logo: require('@/assets/images/logo/logo.png'), // logo image
            error: false, // error flag
            errorMsg: "", // error msg
            loginFlag: true // switch to login or regist
        }
    },
    methods: {
        login(){
            this.$message("")
            this.error = true
            this.errorMsg = "用户名或者密码错误"
        },
        // switch login or registration
        switchPanel(){
            this.loginFlag = !this.loginFlag;
            this.errorMsg = ""
        },
        // regist
        regist(){
            this.$message({type:"success",message:""})
            this.error = true
            this.errorMsg = "必填项不能为空"
        }
    }

}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: #f7f7f7;
    }

    .container .form-content{
        width: 420px;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .container .form-content .logo {
        width: 100%;
        height: 82px;
        border-bottom: 2px solid #6495ed;
    }

    .login-form,.regist-form {
        width: 70%;
        height: auto;
        margin: 40px auto 0;
    }

    .field {
        display: block;
        width: 100%;
        height: 50px;
        border: none;
        outline: none;
        color: #6495ed;
        padding: 4px 10px 0px 10px;
        border-bottom: 1px solid #6495ed;
        box-sizing: border-box;
    }

    .field:focus{
        border: none;
        border-bottom: 1px solid #6495ed;
    }

    .regist-form .field-p{
        position: relative;
    }

    .regist-form>.field-p::after{
        position: absolute;
        right: 0px;
        top: 20px;
        display: inline-block;
        content: "*";
        width: 20px;
        height: 20px;
        color: #ff0000;
    }

    .error{
        font-size: 12px;
        color: #ff0000;
    }
    
    .tips p{
        font-size: 14px;
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
     }

    .tips a{
        color: #6495ed;
        text-decoration-color: #6495ed;
        text-decoration: none;
     }

</style>>
