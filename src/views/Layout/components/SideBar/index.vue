<template>
	<div class="menu-container">
		<!--logo-->
		<div class="logo">
			<img src="" alt="">
		</div>
		<!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
			<!--<el-radio-button :label="false">展开</el-radio-button>-->
			<!--<el-radio-button :label="true">收起</el-radio-button>-->
		<!--</el-radio-group>-->
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
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">导航一</span>
				</template>
				<el-menu-item-group>
					<span slot="title">分组一</span>
					<el-menu-item index="1-1">选项1</el-menu-item>
					<el-menu-item index="1-2">选项2</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="分组2">
					<el-menu-item index="1-3">选项3</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="1-4">
					<span slot="title">选项4</span>
					<el-menu-item index="1-4-1">选项1</el-menu-item>
				</el-submenu>
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
		</el-menu>
	</div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import SideBarItem from './SideBarItem.vue';

    @Component({
		    components: { SideBarItem }
    })
    export default class Layout extends Vue {
        private isCollapse:boolean = false;
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