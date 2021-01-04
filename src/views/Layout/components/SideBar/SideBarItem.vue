<template>
    <div>
        <div v-for="(menu, index) in permission" :key="index">
            <el-submenu class="test" v-if="hasTrueChildren(menu)" :index="menu.path">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span class="menu-txt">{{ menu.meta.title }}</span>
                </template>
                <el-menu-item-group>
                    <side-bar-item :permission="menu.children" :base-path="menu.path"></side-bar-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item v-else>
                <router-link :to="resolvePath(menu.path)">
                    <i class="el-icon-setting"></i>
                    <span class="menu-txt">{{ menu.meta.title }}</span>
                </router-link>
            </el-menu-item>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Action, Getter} from 'vuex-class';
import path from 'path';

const namespace: string = 'app';

@Component({})
export default class SideBarItem extends Vue {
    // 拥有权限的菜单
    @Prop({type: Array, default: () => []})
    private permission: any[] | undefined;

    @Prop({type: String, default: ''})
    private basePath: string | undefined;

    @Action('fetchData', {namespace}) private fetchData: any;
    @Getter('fullName', {namespace}) private fullName: string | undefined;

    // 是否存在子数组
    private hasTrueChildren(item: any) {
        return item && item?.children && Array.isArray(item?.children) && item.children.length;
    }

    //  路由解析
    private resolvePath(routePath: string = '') {
        return path.resolve(this.basePath as string, routePath);
    }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
.menu-txt
    color #fff
</style>
