<template>
	<div class="header-container">
<!--    logo-->
<!--		tool-->
	</div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class Layout extends Vue {
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
	.header-container {
		width 100%
		height 60px
		display flex
		padding 0 20px
		border-bottom 1px solid #d8dce5
		box-shadow 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04)
	}
</style>