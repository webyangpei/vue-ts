<template>
	<div class="app-wrapper">
		<!--如果是手机设备-->
		<div v-if="device === 'phone'" @click="handleClickout"></div>
		<!--左侧菜单-->
		<SideBar class="sidebar-container"></SideBar>
		<!--右侧主体-->
		<div class="main-content">
			<NavBar></NavBar>
			<TagViews></TagViews>
			<AppMain></AppMain>
		</div>
	</div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  // import { reactive, computed, toRefs } from '@vue/composition-api';
  import { SideBar, AppMain, NavBar, TagViews } from './components/index';

  @Component({
    components: {
		  SideBar,
      AppMain,
      NavBar,
      TagViews
    }
  })
  export default class Layout extends Vue {
      get device() {
          return this.$store.state.app.device;
      }
      get sidebar() {
          return this.$store.state.app.sidebar;
      }

      private  static handleClickout() {
          console.log('Please click it!');
      }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
	.app-wrapper {
		width 100%
		height 100vh
		display grid
		grid-template-columns 280px calc(100% - 280px)
		.sidebar-container {
			width: 100%
			height 100%
			background-color #001529
		}
	}
</style>