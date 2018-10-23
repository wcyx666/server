<template>
    <el-container>
        <el-aside class="main-left">
            <el-row class="tac">
                <el-col :span="24">
                    <el-menu
                    default-active="Article"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    router=true
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-menu-item index="Article">
                        <i class="el-icon-menu"></i>
                        <span slot="title">发布新闻</span>
                    </el-menu-item>
                    <el-menu-item index="Activity">
                        <i class="el-icon-menu"></i>
                        <span slot="title">发布活动</span>
                    </el-menu-item>
                    <el-menu-item index="Banner">
                        <i class="el-icon-menu"></i>
                        <span slot="title">上传图片</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-menu"></i>
                        <span slot="title">文章列表</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-document"></i>
                        <span slot="title">活动列表</span>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <i class="el-icon-setting"></i>
                        <span slot="title">寄语列表</span>
                    </el-menu-item>
                    <el-menu-item index="6">
                        <i class="el-icon-setting"></i>
                        <span slot="title">首页图片</span>
                    </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
                      
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    import Activity from '../activity.vue'
    export default {
        data (){
            return {

            }
        },
        components:{
            Activity
        }
    }
    

</script>

<style scoped>
    .main-left {
        background: #545c64;
        height: 100%;
    }
</style>