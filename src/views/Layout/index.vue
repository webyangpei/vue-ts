<template>
  <div class="app-wrapper">
	  <el-container class="app-container">
		  <el-header>
			  <Header></Header>
		  </el-header>
		  <el-container class="main-container">
			  <!--左侧菜单-->
			  <el-aside width="200px" class="sidebar-container">
				  <SideBar class="sidebar-container"></SideBar>
			  </el-aside>
			  <!--右侧主体-->
			  <el-main>
				  <NavBar></NavBar>
				  <TagViews></TagViews>
          <AppMain></AppMain>
			  </el-main>
		  </el-container>
	  </el-container>
  </div>
</template>

<script lang="ts">
// 在主应用中注册微应用
import {Component, Vue} from 'vue-property-decorator';
import {SideBar, AppMain, NavBar, TagViews, Header} from './components/index';

@Component({
  components: {
    SideBar,
    AppMain,
    NavBar,
    TagViews,
    Header
  }
})
export default class Layout extends Vue {
  get sidebar() {
    return this.$store.state.app.sidebar;
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
.app-wrapper {
  width 100%
  height 100vh
	.app-container {
		width 100%
	}
	.main-container {
		width 100%
		height calc(100vh - 60px)
	}

  .sidebar-container {
    width: 100%
    height 100%
    background-color #001529
  }
}
</style>
