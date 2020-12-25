<template>
  <div>
    <div v-for="(menu, index) in permission" :key="index">
      <el-submenu v-if="hasTrueChildren(menu)" index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{ menu.title }}</span>
        </template>
        <el-menu-item-group>
          <side-bar-item :permission="menu.children"></side-bar-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item v-else :index="index">
        <router-link :index="index + menu.name" :to="menu.path">
          <i class="el-icon-setting"></i>
          <span slot="title">{{ menu.title }}</span>
        </router-link>
      </el-menu-item>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Action, Getter} from 'vuex-class';

const namespace: string = 'app';

@Component({})
export default class SideBarItem extends Vue {
  // 拥有权限的菜单
  @Prop({ type: Array, default: () => [] })
  public permission: any[] | undefined;

  @Action('fetchData', {namespace}) private fetchData: any;
  @Getter('fullName', {namespace}) private fullName: string | undefined;

  private mounted() {
    console.log(this.permission, '权限组');
  }

  // 是否存在子数组
  private hasTrueChildren(item: any) {
    return item && item?.children && Array.isArray(item?.chsildren) && item.children.length;
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
