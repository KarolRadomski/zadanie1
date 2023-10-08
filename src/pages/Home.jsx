import React, { useEffect, useState } from 'react';
import GraphsBar from '../components/GraphsBar';
import ChartWindow from '../components/ChartWindow';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function Home() {
  const [chartPeriod, setChartPeriod] = useState(1);
  const [rawData, setRawData] = useState([]);

  // Fetch data from json file
  useEffect(() => {
    (async () => {
      await fetch('./data.json')
        .then((response) => response.json())
        .then((data) => {
          setRawData(data);
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
          <ChartWindow rawData={rawData} />
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
