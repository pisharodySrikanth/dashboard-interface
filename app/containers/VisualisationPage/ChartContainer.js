import React, { useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import { Chart, Line } from 'react-chartjs-2';
import { createStructuredSelector } from 'reselect';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import * as zoom from 'chartjs-plugin-zoom';
import 'chartjs-adapter-date-fns';
import parse from 'date-fns/parse';
import toDate from 'date-fns/toDate';
import differenceInDays from 'date-fns/differenceInDays';
import makeSelectVisualisationPage from './selectors';
import { applyParams } from './actions';

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

const useStyles = makeStyles(theme => ({
  container: {
    height: '400px',
    margin: 'auto',
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
}));

const enableZooming = () => {
  Chart.pluginService.register(zoom);
};

const getLineProps = () => {
  const color = getRandomColor();

  return {
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
  };
};

const ChartContainer = ({ visualisationPage, applyParams }) => {
  const classes = useStyles();
  const {
    resources,
    granularity,
    category
  } = visualisationPage;
  const dateFormat =
    granularity === 'day' ? 'dd-MM-yyyy' : 'dd-MM-yyyy hh:mm:ss';

  useEffect(() => {
    enableZooming();
  }, []);

  const data = useMemo(
    () => ({
      datasets: resources.map(r => ({
        ...getLineProps(),
        label: r.name,
        data: r.impressions.map(i => ({
          x: parse(i.date, dateFormat, new Date()),
          y: i.impressions,
        })),
      })),
    }),
    [resources],
  );

  // creating the options
  const options = useMemo(
    () => ({
      maintainAspectRatio: false,
      plugins: {
        zoom: {
          pan: {
            enabled: false,
          },
          zoom: {
            enabled: granularity === 'day',
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
                  applyParams({
                    granularity: 'hour',
                    start: toDate(left),
                    end: toDate(right),
                    category,
                  });
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
              unit: granularity,
              minUnit: granularity,
              parser: dateFormat,
            },
            ticks: {
              maxRotation: 0,
            },
          },
        ],
        yAxes: [
          {
            type: 'linear',
            ticks: {
              beginAtZero: true,
              stepSize: 1,
            },
          },
        ],
      },
    }),
    [granularity, dateFormat, category],
  );

  return (
    <Paper elevation={8} className={classes.container}>
      {resources.length === 0 ? (
        <Typography variant='h3'>
          No data found
        </Typography>
      ) : (
        <Line data={data} redraw options={options} />
      )}
    </Paper>
  );
};

const mapStateToProps = createStructuredSelector({
  visualisationPage: makeSelectVisualisationPage()
});

export default connect(
  mapStateToProps,
  {
    applyParams,
  },
)(ChartContainer);
