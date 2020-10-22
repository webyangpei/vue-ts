<template>
	<div class="menu-container">
		<!--logo-->
		<div class="logo">
			<img src="" alt="">
		</div>
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
			<SideBarItem :permission="permission_routers"></SideBarItem>
		</el-menu>
	</div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import SideBarItem from './SideBarItem.vue';

    @Component({components: { SideBarItem }})
    export default class Layout extends Vue {
        // 是否展开收起
        private isCollapse: boolean = false;
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
 .menu-container {
	 color #fff
	 .logo {
		 width 100%
		 height 70px
	 }
 }
</style>