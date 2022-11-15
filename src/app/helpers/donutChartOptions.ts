import { Options } from 'highcharts';

export const donutChartOptions: Options = {
  chart: {
    type: 'pie',
    plotShadow: false,
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      innerSize: '99%',
      colors: [
        '#50B432', 
        '#ED561B', 
        '#DDDF00', 
        '#24CBE5', 
        '#64E572', 
        '#FF9655', 
        '#FFF263', 
        '#6AF9C4'
      ],
      borderWidth: 40,
      borderColor: "",
      slicedOffset: 20,
      dataLabels: {
        enabled:true,
        connectorWidth:0,
      },
      showInLegend: true
    },
  },
  title: {
    text: '',
    style: {
        display: 'none'
    }
  },
  legend: {
    align: 'right',
    verticalAlign: 'top',
    layout: 'vertical',
    borderWidth:0,
    symbolRadius: 5,
    x: -50,
    y: 120,
    itemMarginTop: 5,
    itemMarginBottom: 5,
    itemStyle: {
      fontWeight: 'bold',
      fontSize: '19px'
    }
  },
  series: [
    {
      type: 'pie',
      data: [
        { name: 1, y: 1, color: '#eeeeee' },
        { name: 'b', y: 2, color: '#393e46' },
        { name: 'c', y: 3, color: '#00adb5' },
        { name: 'd', y: 4, color: '#eeeeee' },
        { name: 'e', y: 5, color: '#506ef9' },
      ],
    },
  ],
};
