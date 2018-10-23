<template>
    <div class="login">
        <div class="login-main">
            <div class="container">
                <div class="form">
                    <div class="form-group field-email">
                        <el-input v-model="name" placeholder="请输入正确的邮箱"></el-input>   
                    </div>
                    <div class="form-group form-password">
                        <el-input v-model="pasw" placeholder="密码不能为空"></el-input>    
                    </div>
                    <el-button type="primary" @click="main">登录</el-button>
                </div>
            </div>
        </div>   
    </div>          
</template>
<script>
    export default {
        data(){
            return {
                name:'', // 用户名
                pasw:"", // 密码
            }
        },
        mounted() {
            
        },
        methods:{
            main(){
                this.$router.push({ path: '/main'}) // -> /user
            }
        }
    }
</script>
<style scoped>
    .login-main {
        position: absolute;
        left: 0;
        right: 0;
        top: 60px;
        bottom: 60px;
        height: 85%;
    }
    .login-main .container {
        width: 100%;
        height: 100%;
        display: -webkit-flex;
        justify-content: center;
        align-items: center;
    }
    .login-main .container .form {
        width: 300px;
        padding-bottom: 100px;
    }
    .login-main .container .form input {
        width: 100%;
    }
    .el-button {
        width: 100%;
    }
    .form-group {
        padding-bottom: 2rem;
    }
</style>

