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
                    pathName: "/admin/home.html"
                },
                {
                    name: "页面1",
                    pathName: "/admin/page1.html"
                },
                {
                    name: "页面2",
                    pathName: "/admin/page2.html"
                },
                {
                    name: "页面3",
                    pathName: "/admin/page3.html"
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
