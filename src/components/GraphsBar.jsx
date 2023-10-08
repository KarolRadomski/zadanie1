import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
function GraphsBar({ chartPeriod, setChartPeriod }) {
  // Handle dropdown select
  const handleSelect = (eventKey) => {
    setChartPeriod(eventKey);
  };
  // Render top bar with dropdown to select chart period (not implemented)
  return (
    <div className="bg-light d-flex justify-content-between align-items-center px-3 w-75 mx-auto mt-3 p-2">
      <div>CPU load</div>
      <div>
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Selected period: {chartPeriod}h
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey={1}>1h</Dropdown.Item>
            <Dropdown.Item eventKey={4}>4h</Dropdown.Item>
            <Dropdown.Item eventKey={24}>24h</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default GraphsBar;
