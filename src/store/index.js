import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';
Vue.use(Vuex);
// 这里为全局的，模块内的请在模块内动态注册
const store = new Vuex.Store({
    strict: true,
    state: {
        curSystemMenu: null,//菜单
        userInfo: {//用户信息
            userId: "",//ID
            stuNum:"",//学号
            stuSex:"",//性别
            firstLogin:"",//是否首次登录
            userFace: "",//头像地址
            name: "",//姓名
            userTel: "",//电话
            userEmail: "",//邮箱
            userType: "",//身份
            userName:''//用户名
        }
    },
    getters: {},
    mutations,
    actions
});
export default store;
