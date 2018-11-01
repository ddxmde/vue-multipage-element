export default {
    //设置顶部导航实例
    setSystemNav(state, menu) {
        state.curSystemMenu = menu;
    },
    //设置用户信息
    setUserInfo(state, config) {
        for (var objName in config) {
            state.userInfo[objName] = config[objName];
        }
    }
}
