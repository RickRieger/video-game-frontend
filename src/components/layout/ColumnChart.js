import React from 'react';
import Chart from 'react-google-charts';
import randomColor from 'randomcolor';

function ColumnChart(props) {
  //CHART DATA/OPTIONS
  const color = randomColor();
  //  let data = [['Element', 'Density', { role: 'style' }]];
  //  if (props.consoleCollection) {
  //    for (const console in props.consoleCollection) {
  //      data.push([
  //        console,
  //        parseInt(props.consoleCollection[console].toFixed(2)),
  //        randomColor(),
  //      ]);
  //    }
  //    console.log(data);
  //  }

  const dummyData = [
    ['Element', 'Density', { role: 'style' }],
    ['Copper', 8.94, '#b87333'], // RGB value
    ['Silver', 10.49, 'silver'], // English color name
    ['Gold', 19.3, 'gold'],
    ['Platinum', 21.45, 'color: #e5e4e2'], // CSS-style declaration
    ['Copper', 8.94, '#b87333'], // RGB value
    ['Silver', 10.49, 'silver'], // English color name
    ['Gold', 19.3, 'gold'],
    ['Platinum', 21.45, 'color: #e5e4e2'], // CSS-style declaration
  ];
  const chartOptions = {
    title: 'Global Game Sales Per Console in millions $',
    width: '100%',
    height: '100%',
    bar: { groupWidth: '95%' },
    legend: { position: 'none' },
    margin: 'auto',
  };

  return (
    <Chart chartType='ColumnChart' data={dummyData} options={chartOptions} />
  );
}

export default ColumnChart;
