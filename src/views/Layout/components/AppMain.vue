<template>
  <div>
    <en-echarts :options="optinos"></en-echarts>
    <div id="test" :style="{ width: '1000px', height: '500px' }"></div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import EnEcharts from '@/components/EnEcharts';


@Component({
  components: {
    EnEcharts
  }
})
export default class Layout extends Vue {
  private testEcharts: any;
  private $echarts: any;

  private optinos: any = {
    title: {
      text: '折线图堆叠'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '直接访问',
        type: 'line',
        stack: '总量',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };


  private mounted() {
    this.testEcharts = this.$echarts.init(document.getElementById('test'));
    this.$nextTick(() => {
      setTimeout(this.testEcharts.resize);
      this.getEchartsOption();
    });
    const a = {
      b: 2,
      c: {
        d: 5,
        f: 6,
        g: {
          y: 55,
          t: () => {
             console.log(444);
             return 6;
          }
        }
      }
    };

    const b = {
      b: 5,
      c: {
        h: 556,
        r: ['23', '3434'],
        g: {
          h: false,
          y: () => []
        }
      }
    };
    // const result = merge(a, b);
    // console.log(result.c.g.t(), 888888);
  }

  private getEchartsOption() {
    const customData = [
      {
        value: 100,
        name: 'test'
      },
      {
        value: 233,
        name: 'test1'
      }
    ];
    function renderItem(params: any, api: any) {
      const xValue = api.value(0);
      const currentSeriesIndices = api.currentSeriesIndices();
      const barLayout = api.barLayout({
        barGap: '30%', barCategoryGap: '20%', count: currentSeriesIndices.length - 1
      });

      const points = [];
      for (let i = 0; i < currentSeriesIndices.length; i++) {
        const seriesIndex = currentSeriesIndices[i];
        if (seriesIndex !== params.seriesIndex) {
          const point = api.coord([xValue, api.value(seriesIndex)]);
          point[0] += barLayout[i - 1].offsetCenter;
          point[1] -= 20;
          points.push(point);
        }
      }
      const style = api.style({
        stroke: api.visual('color'),
        fill: null
      });

      return {
        type: 'polygon',
        shape: {
          points
        },
        style
      };
    }

    const option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['test', 'test1']
      },
      xAxis: {
        data: ['10.01', '10.02', '10.03']
      },
      yAxis: {},
      series: [{
        type: 'custom',
        name: 'trend',
        renderItem,
        itemStyle: {
          borderWidth: 2
        },
        data: customData,
        z: 100
      }]
    };
    this.testEcharts.setOption(option, true);
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
