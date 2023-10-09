import { Line } from 'react-chartjs-2';

const ChartWindow = ({ dates, values }) => {
  //chart options
  const options = {
    maintainAspectRatio: true,
    spanGaps: false, // force to not connect dots with line if data is missing (realizacja zadania 2)
    responsive: 'true',
    scales: {
      //scale y axis
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 100,
            stepSize: 20,
          },
        },
      ],
      //scale x axis and format date
      xAxes: [
        {
          ticks: {
            maxRotation: 0,
            minRotation: 0,
            maxTicksLimit: 5,
            callback: function (value, index) {
              return `${value.slice(0, 10)} ${value.slice(11, 19)}`;
            },
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
    //hide legend
    legend: {
      display: false,
    },
  };

  //prepare chart data
  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Użycie CPU (%)',
        data: values,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.5,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className="w-75 mx-auto">
      {/* Chart component from react-chartjs-2 library */}
      <Line data={data} options={options} height={100} />
    </div>
  );
};

export default ChartWindow;
