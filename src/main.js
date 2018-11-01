import 'babel-polyfill';
import Vue from 'vue';
import 'vuex';
import VueRouter from 'vue-router';
import store from './store/index.js';
import "./libs/css/public.less";
import "./libs/js/public.js";
const routers = require("./router.js");

import ajax from "./libs/js/vueExtend/ajax.js";
import download from "./libs/js/vueExtend/download.js";
import routePlugin from "./libs/js/vueExtend/routePlugin.js";
import loadingView from "./libs/js/vueExtend/loadingView";
import log from "./libs/js/vueExtend/log.js";
import eventBus from "./libs/js/vueExtend/eventBus.js";
import scoped from "./libs/js/vueExtend/scoped.js";
import index from "./views/index.vue";
import { Button,Loading, Select, Option, Carousel,CarouselItem,Container,Aside,Main,Input,Rate,Progress,Message,MessageBox,Table, TableColumn,Checkbox, Scrollbar, Form, FormItem, Tooltip, Dialog ,DatePicker,Col} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Message.install = function (Vue, options) {
    Vue.prototype.$message = Message;
}
MessageBox.install = function (Vue, options) {
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
}

//element组件
Vue.use(Button)
Vue.use(Message)
Vue.use(MessageBox)
Vue.use(Loading)
Vue.use(Select)
Vue.use(Option)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Container)
Vue.use(Col)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Input)
Vue.use(Rate)
Vue.use(Progress)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Checkbox)
Vue.use(Scrollbar)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tooltip)
Vue.use(Dialog)
Vue.use(DatePicker)

Vue.use(VueRouter);
Vue.use(ajax);
Vue.use(scoped);
Vue.use(download);
Vue.use(routePlugin);
Vue.use(loadingView);
Vue.use(eventBus);
Vue.use(log);//输出console；生产环境会自动屏蔽

let router = new VueRouter({
    routes: routers,
    mode: "history"//history
});
var firstRouter=null;//第一次访问的路由

window.router=router;

router.beforeEach((to, from, next) => {
    if (!firstRouter) {
        firstRouter = to;
        next(false);
    }else{
        next();
    }
});

let mainVue = window.WebSiteApp = new Vue({
    el: '#app',
    router: router,
    store: store,
    render: (h) => {
        return h(index,{
            props: {
                firstRouter: firstRouter
            }
        });
    }
});
