import React from 'react';
import Chart from 'react-google-charts';
import randomColor from 'randomcolor';

function GoogleCharts(props) {
  //CHART DATA/OPTIONS
  let data = props.dataToBeDisplayed;
  let collection = props.consoleCollection;
 

  return (
    <Chart
      chartType={props.chartType}
      data={data}
      options={props.chartOptions}
    />
  );
}

export default GoogleCharts;
