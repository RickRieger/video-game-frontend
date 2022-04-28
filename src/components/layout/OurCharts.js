import React from 'react'
import Chart from 'react-google-charts';
import randomColor from 'randomcolor';

function OurCharts(props) {
 //CHART DATA/OPTIONS
 const color = randomColor();
 let data = [['Element', 'Density', { role: 'style' }]];
 if (props.consoleCollection) {
   for (const console in props.consoleCollection) {
     data.push([
       console,
       parseInt(props.consoleCollection[console].toFixed(2)),
       randomColor(),
     ]);
   }
   console.log(data);
 }

 const options = {
   title: 'Global Game Sales Per Console',
   width: 1000,
   height: 650,
   bar: { groupWidth: '95%' },
   legend: { position: 'none' },
   margin: 'auto',
 };


console.log('=>',props.consoleCollection)



  return (
    <Chart chartType="ColumnChart" width="100%" height="400px" data={data} options={options} />
   
  )
}

export default OurCharts




















