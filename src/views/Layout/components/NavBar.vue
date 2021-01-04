<template>
    <div class="nav-bar-container">
        <!--菜单展开关闭按钮控制-->
        <!--面包屑-->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(route, index) in currentRouters" :key="index" :to="{ path: route.path}">
                {{ route.meta.title }}
            </el-breadcrumb-item>
        </el-breadcrumb>
        <!--右侧附加功能-->
    </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import {RouteRecord, Route} from 'vue-router';

@Component({})
export default class NavBar extends Vue {
    // 当前路由
    private currentRouters: RouteRecord[] = [];

    private created() {
        this.getRoutes(this.$route);
    }

    @Watch('$route')
    private onRouterChange(val: Route): void {
        this.getRoutes(val);
    }

    private getRoutes(routers: Route): void {
        this.currentRouters = routers.matched.filter((key: RouteRecord) => key.path !== '/' && key.path);
    }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
.nav-bar-container {
    display flex
    align-items center
}
</style>
