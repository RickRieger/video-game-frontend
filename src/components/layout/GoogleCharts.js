import React from 'react';
import Chart from 'react-google-charts';
import randomColor from 'randomcolor';

function GoogleCharts(props) {
  //CHART DATA/OPTIONS
  let data = props.dataToBeDisplayed;
  if (props.consoleCollection) {
    for (const console in props.consoleCollection) {
      data.push([
        console,
        parseInt(props.consoleCollection[console].toFixed(2)),
        randomColor(),
      ]);
    }
  }

  return (
    <Chart
      chartType={props.chartType}
      data={data}
      options={props.chartOptions}
    />
  );
}

export default GoogleCharts;
