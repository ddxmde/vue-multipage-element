var context =require("../src/libs/interface/context.js");

module.exports = [{
    path: context.name + '/admin',
    name: '/admin',
    meta: {
        title: '管理员',
        author: 'luohao'
    },
    component: resolve => resolve(require('./views/admin/index.vue')),
    children: [{
        path: context.name + '/admin/home.html',
        name:'/admin/home.html',
        meta: {
            title: '首页',
            author: 'luohao'
        },
        component: resolve => resolve(require('./views/admin/home/index.vue'))
    },{
        path: context.name + '/admin/page1.html',
        name: '/admin/page1.html',
        meta: {
            title: '页面1',
            author: 'luohao'
        },
        component: resolve => resolve(require('./views/admin/page1/index.vue'))
    },{
        path: context.name + '/admin/page2.html',
        name: '/admin/page2.html',
        meta: {
            title: '页面2',
            author: 'luohao'
        },
        component: resolve => resolve(require('./views/admin/page2/index.vue'))
    },{
        path: context.name + '/admin/page3.html',
        name: '/admin/page3.html',
        meta: {
            title: '页面3',
            author: 'luohao'
        },
        component: resolve => resolve(require('./views/admin/page3/index.vue'))
    }]
},
{
    path: context.name + '/customer',
    name: '/customer',
    meta: {
        title: '游客',
        author: 'luohao'
    },
    component: resolve => resolve(require('./views/customer/index.vue')),
    children: [
        {
            path: context.name + '/customer/home.html',
            name:'/customer/home.html',
            meta: {
                title: '首页',
                author: 'luohao'
            },
            component: resolve => resolve(require('./views/customer/home/index.vue'))
        },
        {
            path: context.name + '/customer/page1.html',
            name: '/customer/page1.html',
            meta: {
                title: '页面1',
                author: 'luohao'
            },
            component: resolve => resolve(require('./views/customer/page1/index.vue'))
        },
        {
            path: context.name + '/customer/page2.html',
            name: '/customer/page2.html',
            meta: {
                title: '页面2',
                author: 'luohao'
            },
            component: resolve => resolve(require('./views/customer/page2/index.vue'))
        },
        {
            path: context.name + '/customer/page3.html',
            name: '/customer/page3.html',
            meta: {
                title: '页面3',
                author: 'luohao'
            },
            component: resolve => resolve(require('./views/customer/page3/index.vue'))
        }
    ]
},
{
    path: context.name + '/login.html',
    name: '/login.html',
    meta: {
        title: '登录',
        author: 'luohao'
    },
    component: resolve => resolve(require('./views/login/login.vue'))
}];
