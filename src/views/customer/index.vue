<template>
<div class="webcontent">
    <top-header :systemNavList="systemNavList"></top-header>
    <router-view></router-view>
    <footers></footers>
</div>
</template>
<script>
import TopHeader from '@/libs/modules/header';
import Footers from '@/libs/modules/footers/footers';
export default {
    data() {
        return {
            loadingFlag: false,
            systemNavList: [{
                    name: "首页",
                    pathName: "/customer/home.html"
                },
                {
                    name: "页面1",
                    pathName: "/customer/page1.html"
                },
                {
                    name: "页面2",
                    pathName: "/customer/page2.html"
                },
                {
                    name: "页面3",
                    pathName: "/customer/page3.html"
                }
            ]
        }
    },
    components: {
        TopHeader,
        Footers
    }
}
</script>
<style lang="less" scoped>
@import "~@/libs/css/theme/theme.less";
.webcontent {
    padding-top: 60px;
    padding-bottom: 50px;
}
</style>
