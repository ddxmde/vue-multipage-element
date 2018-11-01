<template>
    <div class="container">
        <el-button @click="linkTo('/admin/home.html')">管理员</el-button>
        <el-button @click="linkTo('/customer/home.html')">游客</el-button>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {}
    },
    methods: {
        linkTo(routerName) {
            this.$router.push({
                name: routerName
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .container {
        display: flex;
        justify-content: center;
        padding-top: 100px;
    }
</style>


