import React, { useEffect, useState } from 'react';
import GraphsBar from '../components/GraphsBar';
import ChartWindow from '../components/ChartWindow';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Home() {
  const [chartPeriod, setChartPeriod] = useState(1);
  const [dates, setDates] = useState([]);
  const [values, setValues] = useState([]);


  //parse data from json file to correct format
  const prepareData = (jsonData) => {

    const dates = [];
    const values = [];

    // loop through all timestamps
    for (const timestamp in jsonData.REPLY) {
      console.log(timestamp);
      const data = jsonData.REPLY[timestamp];
      const date = new Date(timestamp);
      const value = data[0];

      // add date to dates array
      dates.push(date);

      // add values to values array
      values.push(parseFloat(value.slice(0, 4)));
    }

    // create missing dates
    const startDate = dates[0]; // start date
    const endDate = dates[dates.length - 1]; // end date

    const filledDates = [];
    const filledValues = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      const timestamp = currentDate.toISOString();

      // if date is in original data, add value from original data
      const dataIndex = dates.findIndex(date => Math.abs(date - currentDate) <= 300000); // tolerance 5 minutes
      if (dataIndex !== -1) {
        filledValues.push(values[dataIndex]);
      } else {
        filledValues.push(null);
      }

      // fill dates array
      filledDates.push(timestamp);

      // move date by 5 minutes
      currentDate.setTime(currentDate.getTime() + (5 * 60 * 1000));
    }
    setDates(filledDates);
    setValues(filledValues);
  }

  // Fetch data from json file
  useEffect(() => {
    (async () => {
      await fetch('./data.json')
        .then((response) => response.json())
        .then((data) => {
          prepareData(data);
        });
    })();
  }, []);

  return (
    <>
      {/* Tabs component */}
      <Tabs defaultActiveKey="Graphs" id="dashboardTabs" className="w-75 m-auto pt-5">
        <Tab eventKey={'Details'} title="Details">
          <div className="w-75 m-auto py-5 text-center">
            <h3>Comming soon</h3>
          </div>
        </Tab>
        <Tab eventKey={'Graphs'} title="Graphs">
          {/* Topbar */}
          <GraphsBar chartPeriod={chartPeriod} setChartPeriod={setChartPeriod} />
          {/* Chart component */}
          <ChartWindow dates={dates} values={values} />
        </Tab>
        <Tab eventKey={'Ports'} title="Ports">
          <div className="w-75 m-auto py-5 text-center">
            <h3>Comming soon</h3>
          </div>
        </Tab>
        <Tab eventKey={'ONT Firmware'} title="ONT Firmware">
          <div className="w-75 m-auto py-5 text-center">
            <h3>Comming soon</h3>
          </div>
        </Tab>
        <Tab eventKey={'User and SSH Session'} title="User and SSH Session">
          <div className="w-75 m-auto py-5 text-center">
            <h3>Comming soon</h3>
          </div>
        </Tab>
        <Tab eventKey={'Operating System'} title="Operating System">
          <div className="w-75 m-auto py-5 text-center">
            <h3>Comming soon</h3>
          </div>
        </Tab>
        <Tab eventKey={'DHCP Snooping'} title="DHCP Snooping">
          <div className="w-75 m-auto py-5 text-center">
            <h3>Comming soon</h3>
          </div>
        </Tab>
        <Tab eventKey={'DHCP Server'} title="DHCP Server">
          <div className="w-75 m-auto py-5 text-center">
            <h3>Comming soon</h3>
          </div>
        </Tab>
        <Tab eventKey={'GPON Profiles'} title="GPON Profiles">
          <div className="w-75 m-auto py-5 text-center">
            <h3>Comming soon</h3>
          </div>
        </Tab>
      </Tabs>
    </>
  );
}

export default Home;
