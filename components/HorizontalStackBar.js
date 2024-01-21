import React, { useEffect, useState } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

export default function HorizontalStackBar({ }) {

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: { 
      right: 20,
      bottom: 0,
      top: '30%',
      orient: 'vertical',
      itemHeight: 8,
    },
    grid: {
      top: 10,
      left: 45,
      right: 80,
      bottom: 10,
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: { show: false },
      splitLine: { show: false },
    },
    yAxis: {
      type: 'category',
      splitLine: { show: false },
      axisTick: { show: false },
      axisLine: { lineStyle: { color: "#417a94", width: 0.1 } },
      axisLabel: { 
        interval: 0, 
        // rotate: 25,
        fontSize: 10,
        color: 'rgb(130, 130, 130)',
      },
      data: ['Bahan Penunjang Pertanian', 
      'Mesin dan Peralatan Pertanian', 
      'Mesin dan Peralatan Pertambangan', 
      'Mesin dan Peralatan Migas', 
      'Alat Berat, Konstruksi dan Material Handling', 
      'Mesin dan Peralatan Pabrik',
      'Bahan Bangunan/Konstruksi',
      'Logam dan Barang Logam',
      'Bahan Kimia dan Barang Kimia',
      'Peralatan Elektronika',
      'Peralatan Kelistrikan',
      'Peralatan Telekomunikasi',
      'Alat Transport',
      'Bahan dan Peralatan Kesehatan',
      'Peralatan Laboratrorium',
      'Komputer dan Peralatan Kantor',
      'Pakaian dan Perlengkapan Kerja',
      'Peralatan Olahraga dan Pendidikan',
      'Sarana Pertahanan',
      'Barang Lainnya'
      ]
    },
    series: [
      {
        name: '<25%',
        type: 'bar',
        stack: 'asd',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#EE3D37' },
            { offset: 1, color: '#ffb3b0' }
          ]),
        },
        data: [61,42,12,290,16,11,125,107,590,476,284,56,27,377,0,33,9,13,1,526]
      },
      {
        name: '25-40%',
        type: 'bar',
        stack: 'asd',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#09589E' },
            { offset: 1, color: '#5db2fc' }
          ]),
        },
        data: [172,304,25,623,55,51,353,510,931,1258,855,700,163,5270,4,193,113,259,5,1863]
      },
      {
        name: '>40%',
        type: 'bar',
        stack: 'asd',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#7AC043' },
            { offset: 1, color: '#b5ed8a' }
          ]),
          borderRadius: [0, 2, 2, 0]
        },
        data: [1353,450,20,492,26,45,4882,2384,1553,986,3249,161,190,3671,1,828,852,351,156,7763]
      }
    ]
  };

  return (
    <div style={{ width: '100%', height: '20rem' }}>
      <ReactEcharts option={option} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
