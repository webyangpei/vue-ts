<template>
    <div>
        <div id="test">ughjklkvhjbkn</div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class DashBoard extends Vue {
    private testEcharts: any;
    private $echarts: any;

    private mounted() {
        this.testEcharts = this.$echarts.init(document.getElementById('test'));
    }
}
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
