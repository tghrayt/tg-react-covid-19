import React, { useState, useEffect } from 'react';
import {Line , Bar} from 'react-chartjs-2';

import { fetchDailyData } from '../../api';
import {Container , Card} from 'reactstrap';


const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infectés', 'récupérés', 'Morts'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infectés',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Morts',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );

  
  return (
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-8" align="center">
          <Container fluid>
            <div className="header-body bg-light">
              {/* Card stats */}
              <Card className="card-stats  mb-xl-0">
    
{country ? barChart : lineChart}
      </Card>
      </div>
      </Container>
    </div>
  );
}

export default Chart;
