import React from 'react';
import Chart from 'react-google-charts';
import randomColor from 'randomcolor';

function GoogleCharts(props) {
  //CHART DATA/OPTIONS
  let data = props.dataToBeDisplayed;
  let collection = props.consoleCollection;
  console.log('props=>', props);
  console.log('collection=>', collection);
  console.log('dataBefore=>', data);
  let num = 0;
  if (collection) {
    for (const element in collection) {
      num += 1;
      console.log(num);
      // console.log(element);
      // console.log(collection[element]);
      // let x = randomColor();
      // console.log(x);
      let color = randomColor();
      let x = [element, collection[element], color];
      data.push(x);
    }
  }
  console.log('dataAfter=>', data);

  return (
    <Chart
      chartType={props.chartType}
      data={data}
      options={props.chartOptions}
    />
  );
}

export default GoogleCharts;
