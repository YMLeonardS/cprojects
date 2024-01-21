import React, { useEffect, useState } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

export default function DoubleBar({ datas, column }) {
  const [axisName, setAxisName] = useState([])
  const [series, setSeries] = useState([])


  useEffect(() => {
    const xAxisData = [...new Set(datas.map(a => a[column[0]]))];
    setAxisName(xAxisData);

    // let color1 = ["#0c4a6e", "#f97316" ];
    // // let color2 = ["#fb923c", "#a6e8e0", "#EC008C" ];
    // let color2 = [
    //   { offset0: '#0284c7', offset1: '#0c4a6e'},
    //   { offset0: '#fdba74', offset1: '#f97316'}
    // ]
    // const categories = [...new Set(datas.map(a => a.name))];
    // const lineSeries = categories.map((category, idx) => {
    //   return {
    //     name: category + ' Max Traffic',
    //     type: 'line',
    //     smooth: true,
    //     symbol: 'roundRect',
    //     symbolSize: 5,
    //     z: 1,
    //     lineStyle: { width: 2 },
    //     color: color1[idx],
    //     // areaStyle: { color: color1[idx], opacity: 0.05 },
    //     data: datas.filter(a => a.name === category).map(a => a.max_util),
    //   }
    // })

    // const barSeries = categories.map((category, idx) => {
    //   return {
    //     name: category + ' Avg Traffic',
    //     type: 'bar',
    //     // color: color2[idx],
    //     z: 0,
    //     itemStyle: {
    //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //         { offset: 0, color: color2[idx].offset0 },
    //         { offset: 1, color: color2[idx].offset1 }
    //       ]),
    //       barBorderRadius: [5, 5, 0, 0]
    //     },
    //     // itemStyle: {
    //     // },
    //     data: datas.filter(a => a.name === category).map(a => a.avg_util),
    //   }
    // })
    
    
    // setSeries(lineSeries.concat(barSeries))
  }, [])


  function capitalizeWords(str) {
    return str.replace(/_/g, ' ').replace(/\b\w/g, match => match.toUpperCase());
  }

  const option = {
    grid: {
      top: 5,
      left: 45,
      right: 40,
      bottom: 30,      
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { lineStyle: { color: '#f71c24' } },
      textStyle: { fontSize: 12 },
    },
    legend: { 
      top: 15,
      itemHeight: 5,
      itemWidth: 10,
      itemGap: 5,
      textStyle: { fontSize: 9, color: "#9e9e9e" },
    },
    yAxis: {
      type: 'value',
      nameLocation: 'middle',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: '#e8f5fa' } },
      axisLabel: { 
        interval: 0, 
        // rotate: 25,
        fontSize: 10,
        color: 'rgba(150, 150, 150)',
      },
    },
    xAxis: {
      type: 'category',
      splitNumber: 5,
      axisTick: { show: false },
      axisLine: { lineStyle: { color: "#417a94", width: 0.1 } },
      axisLabel: {
        fontSize: 10,
        // showMinLabel: false,
        // formatter: '{value}%',
        color: 'rgba(150, 150, 150)',
      },
      data: axisName,
    },
    series: [{
      name: capitalizeWords(column[1]),
      type: 'bar',
      // color: color2[idx],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#0284c7' },
          { offset: 1, color: '#0c4a6e' }
        ]),
        borderRadius: [2, 2, 0, 0]
      },
      data: datas.map(a => a[column[1]]),
    },
    {
      name: capitalizeWords(column[2]),
      type: 'bar',
      barWidth: '15%',
      // color: color2[idx],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#fdba74' },
          { offset: 1, color: '#f97316' }
        ]),
        borderRadius: [2, 2, 0, 0]
      },
      data: datas.map(a => a[column[2]]),
    }]
  };

  return (
    <div style={{ width: '100%', height: '20rem' }}>
      <ReactEcharts option={option} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
