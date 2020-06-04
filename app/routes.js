import HomePage from 'containers/HomePage/Loadable';
import Report from 'containers/ReportPage/Loadable';
import Chart from 'containers/VisualisationPage/Loadable';

export default [
    {
        path: '/report',
        component: Report,
        exact: true,
        page: 'report'
    },
    {
        path: '/chart',
        component: Chart,
        exact: true,
        page: 'chart'
    },
    {
        path: `/:category?/:id(\\d+)`,
        component: HomePage,
        exact: true,
        page: 'dashboard'
    },
    {
        path: '/',
        component: HomePage,
        exact: true,
        page: 'dashboard'
    }
];