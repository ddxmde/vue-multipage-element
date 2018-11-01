<!--
    by: luohao 2018.11.01
    name: 入口路由
    notes: 登陆后根据路由进行分发
-->
<template lang="html">
    <div v-loading.fullscreen="loading">
        <router-view></router-view>
    </div>
</template>

<script>
import url from "@/libs/interface/public.js";
export default {
  data() {
    return {
      loading: true
    };
  },
  props: {
    firstRouter: {
      type: Object
    }
  },
  methods: {
    judgeRole() {
      this.loading = true;
    //   this.$store.commit("setUserInfo", data);
      if (
        this.firstRouter.path !== "/" &&
        this.firstRouter.path !== "/index.html"
      ) {
        this.$router.replace(Object.assign({}, this.firstRouter));
      } else {
          this.$router.push({
              name: '/admin/home.html'
          })
        // if (userType == "admin") {
        //   this.$router.replace({
        //     name: "/admin/home.html"
        //   });
        // } else {
        //   this.$router.replace({
        //     name: "/customer/home.html"
        //   });
        // }
      }
      this.loading = false;
    }
  },
  mounted() {
    this.judgeRole();
  }
};
</script>
