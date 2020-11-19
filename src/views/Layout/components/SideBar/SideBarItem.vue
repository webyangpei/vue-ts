<template>
  <div>
    <router-link v-for="(menu, index) in permission" :key="index" :index="index + menu.name" :to="menu.path">

    </router-link>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
<!--      <el-menu-item-group>-->
<!--        <span slot="title">分组一</span>-->
<!--        <el-menu-item index="1-1">选项1</el-menu-item>-->
<!--        <el-menu-item index="1-2">选项2</el-menu-item>-->
<!--      </el-menu-item-group>-->
<!--      <el-menu-item-group title="分组2">-->
<!--        <el-menu-item index="1-3">选项3</el-menu-item>-->
<!--      </el-menu-item-group>-->
<!--      <el-submenu index="1-4">-->
<!--        <span slot="title">选项4</span>-->
<!--        <el-menu-item index="1-4-1">选项1</el-menu-item>-->
<!--      </el-submenu>-->
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Action, Getter} from 'vuex-class';

const namespace: string = 'app';

@Component({})
export default class SideBarItem extends Vue {
  // 拥有权限的菜单
  @Prop(Array)
  public permission: any[] | undefined;

  @Action('fetchData', {namespace}) private fetchData: any;
  @Getter('fullName', {namespace}) private fullName: string | undefined;

  private mounted() {
    // fetching data as soon as the component's been mounted
    // this.fetchData();
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
