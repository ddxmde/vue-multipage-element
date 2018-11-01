<template>
    <div class="headerBox">
        <div class="content">
            <div class="logoBox"></div>
            <div class="menuBox">
                <a v-for="(item, index) in systemNavList" :key="index"
                    @click="changeSystemNav(item)"
                    :class="['menuNode', {'active': item.pathName == curSystemMenu}]">
                    {{item.name}}
                </a>
            </div>
            <div class="userInfoBox"></div>
        </div>
    </div>
</template>

<script>
import interfaceUrl from '@/libs/interface/public.js'
import {mapState,mapMutations} from "vuex";
export default {
    props:{
        systemNavList:{
            type:Array,
            default:[]
        }
    },
    data(){
        return {
            curSystemMenu:""
        }
    },
    computed: {
        ...mapState(["userInfo"])
    },
    watch:{
        $route(newRoute,oldRoute){
            this.curSystemMenu=newRoute.meta.parentRouter || newRoute.name;
            window.scrollTo(0, 0);
        }
    },
    mounted() {
      this.curSystemMenu=this.$route.meta.parentRouter || this.$route.name;
    },
    methods: {
        ...mapMutations(["setSystemNav"]),
        changeSystemNav(option){
            this.$router.push({name:option.pathName});
        },
        logout(){
            this.$ajax.get(interfaceUrl.logoutUrl).then(res => {
                var data = this.$ajaxCheck(res);
                if (!data) return;
                this.$router.push({
                    name:"/login.html"
                })
            }).catch(err => {
                this.$ajaxError(err);
            })
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/libs/css/theme/theme.less";
.headerBox{
    width: 100%;
    height: 60px;
    background-color: #3988f7;
    position: fixed;
    top: 0;
    z-index: 999;
    .content{
        width: 1200px;
        margin:0px auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .logoBox{
            width: 170px;
            height: 37px;
            margin: 13px 0px 10px;
        }
        .menuBox{
            margin-top: 15px;
            height: 35px;
            flex: 1;
            text-align: center;
            border-right: 1px solid #5797fc;
            border-left: 1px solid #5797fc;
            .menuNode{
                display: inline-block;
                padding-top: 4px;
                line-height: 25px;
                color: #aedbff;
                font-size: 16px;
                margin: 0px 25px;
                cursor: pointer;
                transition: all ease 200ms;
                &.active{
                    color: #fff;
                    border-bottom: 1px solid #fff;
                }
                &:hover{
                    color: #fff;
                }
            }
        }
        .userInfoBox{
            width: 140px;
            height: 60px;
            padding: 10px 0px;
            position: relative;
            display: flex;
            justify-content:flex-end;
        }
    }
}
</style>
