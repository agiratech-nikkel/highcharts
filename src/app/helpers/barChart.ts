import { Options } from 'highcharts';

export const barChart: Options = {
  chart: {
    type: 'column'
 },
 title: {
  text: '',
  style: {
      display: 'none'
  }
 },
 subtitle : {
  style: {
    display: 'none'
}  
 },
 legend : {
  align: 'left',
  verticalAlign: 'top',
  layout: 'horizontal',
  borderWidth:0,
  symbolRadius: 5,
  x: 650,
  y: 0,
  itemStyle: {
    fontWeight: 'bold',
    fontSize: '19px'
  }
 },
 xAxis:{
    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'], title: {
       text: null
    }, 

 },
 yAxis:[{
  endOnTick:false,
  lineColor:'#999',
  lineWidth:1,
  gridLineColor: 'transparent',
  tickColor:'#666',
  tickLength:3,
  title:{
      style:{
          display:'none'
      }
  }
},
{
  visible:false
}],
 tooltip : {
    valueSuffix: ' millions'
 },
 plotOptions : {
    column: {
       dataLabels: {
          enabled: true
       }
    },
    series: {
       stacking: 'normal'
    }
 },
 credits:{
    enabled: false
 },
 series: [
    {
       name: 'Year 1800',
       type:'column',
       data: [107, 131, 234, 203, 122]
    }, 
    {
       name: 'Year 1900',
       type:'column',
       data: [133, 156, 123, 108, 145]
    }, 
 ]
};

