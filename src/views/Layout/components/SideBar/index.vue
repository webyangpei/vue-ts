<template>
    <div class="menu-container">
        <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            background-color="#001529"
            text-color="#fff"
            active-text-color="#2d8cf0"
            unique-opened
            router
        >
            <SideBarItem :permission="permission_routers" base-path="/"></SideBarItem>
        </el-menu>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {mapGetters} from 'vuex';
import SideBarItem from './SideBarItem.vue';

@Component({
    components: {SideBarItem},
    computed: {
        ...mapGetters(['permission_routers'])
    }
})
export default class SideBar extends Vue {
    // 是否展开收起
    private isCollapse: boolean = false;

    private handleClick() {
        this.$router.push({name: 'industryTools'});
    }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
.menu-container {
    color #fff
}
</style>
