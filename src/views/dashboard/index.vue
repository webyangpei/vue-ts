<template>
	<div>
		<div id="test">ughjklkvhjbkn</div>
	</div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class Layout extends Vue {
      private testEcharts: any;
      private $echarts: any;

      private mounted() {
        this.testEcharts = this.$echarts.init(document.getElementById('test'));
        // this.$nextTick(() => {
        //   setTimeout(this.testEcharts.resize);
        //   this.getEchartsOption();
        // });
      }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
