import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Chart, Line } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import * as zoom from 'chartjs-plugin-zoom';
import 'chartjs-adapter-date-fns';
import parse from 'date-fns/parse';
import differenceInDays from 'date-fns/differenceInDays';

const useStyles = makeStyles(theme => ({
  container: {
    height: '400px',
    // width: '85%',
    margin: 'auto',
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
}));

const enableZooming = () => {
  Chart.pluginService.register(zoom);
};

const getLineProps = ({ color }) => ({
  fill: false,
  lineTension: 0.1,
  backgroundColor: 'rgba(75,192,192,0.4)',
  borderColor: color,
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: color,
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: color,
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
});

const data1 = {
  labels: [
    '05/06 14:00',
    '07/06 13:00',
    '08/06 15:00',
    '09/06 00:30',
    '10/06 10:30',
    '11/06 14:45',
    '12/06 12:00',
    '13/06 07:30',
    '14/06 22:30',
    '15/06 17:33',
    '16/06 16:13',
    '17/06 11:11',
    '18/06 18:59',
    '19/06 18:32',
    '20/06 16:50',
    '21/06 12:19',
    '22/06 14:55',
    '23/06 15:45',
    '24/06 17:34',
  ],
  datasets: [
    {
      ...getLineProps({ color: 'red' }),
      label: 'Sky Walker',
      data: [
        10,
        20,
        5,
        30,
        15,
        34,
        56,
        78,
        89,
        10,
        20,
        5,
        30,
        15,
        34,
        56,
        78,
        89,
        23,
        10,
        20,
        5,
        30,
        15,
        34,
        56,
        78,
        89,
        10,
        20,
        5,
        30,
        15,
        34,
        56,
        78,
        89,
        23,
      ],
    },
    // {
    //     ...getLineProps({ color: 'blue' }),
    //     label: 'L2-D2',
    //     data: [20, 55, 0, 10, 21, 89, 78, 56, 34]
    // }
  ],
};

const data2 = {
  labels: [
    '05/06 12:00',
    '05/06 13:00',
    '05/06 15:00',
    '06/06 00:30',
    '06/06 10:30',
    '06/06 14:45',
    '07/06 10:30',
    '07/06 14:45',
  ],
  datasets: [
    {
      ...getLineProps({ color: 'red' }),
      label: 'Sky Walker',
      data: [10, 20, 5, 30, 15, 34, 56, 78, 89, 10, 20, 5, 30],
    },
    // {
    //     ...getLineProps({ color: 'blue' }),
    //     label: 'L2-D2',
    //     data: [20, 55, 0, 10, 21, 89, 78, 56, 34]
    // }
  ],
};

const dateFormat = 'dd/MM HH:mm';

data1.labels = data1.labels.map(d =>
  // return moment(d, "DD/MM HH:mm");
  parse(d, dateFormat, new Date()),
);

data2.labels = data2.labels.map(d =>
  // return moment(d, "DD/MM HH:mm");
  parse(d, dateFormat, new Date()),
);

const ChartContainer = props => {
  const classes = useStyles();
  const [type, setType] = useState('day');
  const chartInstance = useRef(null);

  const data = useMemo(() => (type == 'day' ? data1 : data2), [type]);

  const shouldZoom = type === 'day';

  useEffect(() => {
    enableZooming();
  }, []);

  return (
    <Paper elevation={8} className={classes.container}>
      <Line
        ref={chartInstance}
        data={data}
        options={{
          maintainAspectRatio: false,
          plugins: {
            zoom: {
              pan: {
                enabled: false,
              },
              zoom: {
                enabled: shouldZoom,
                drag: true,
                mode: 'x',
                speed: 0.05,
                threshold: 2,
                sensitivity: 3,
                onZoomComplete({ chart }) {
                  const scale = chart.scales['x-axis-0'];
                  if (scale.margins) {
                    const left = scale.getValueForPixel(scale.left);
                    const right = scale.getValueForPixel(scale.right);

                    if (differenceInDays(left, right) === 0) {
                      chart.resetZoom();
                      setType('hour');
                    }
                  }
                },
              },
            },
          },
          scales: {
            xAxes: [
              {
                type: 'time',
                time: {
                  unit: type,
                  minUnit: type,
                  parser: dateFormat,
                },
                ticks: {
                  maxRotation: 0,
                },
              },
            ],
          },
        }}
      />
    </Paper>
  );
};

export default ChartContainer;
