import React from 'react';
import Chart from 'react-google-charts';


function GoogleCharts(props) {
  //CHART DATA/OPTIONS
  let data = props.dataToBeDisplayed;
  
 

  return (
    <Chart
      chartType={props.chartType}
      data={data}
      options={props.chartOptions}
    />
  );
}

export default GoogleCharts;
