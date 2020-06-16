import HomePage from 'containers/HomePage/Loadable';
import Report from 'containers/ReportPage/Loadable';
import Chart from 'containers/VisualisationPage/Loadable';

export default [
    {
        path: '/report',
        component: Report,
        exact: true,
        page: 'report',
        title: 'Report'
    },
    {
        path: '/chart',
        component: Chart,
        exact: true,
        page: 'chart',
        title: 'Chart'
    },
    {
        path: `/:category?/:id(\\d+)`,
        component: HomePage,
        exact: true,
        page: 'dashboard',
        title: 'Dashboard'
    },
    {
        path: '/',
        component: HomePage,
        exact: true,
        page: 'dashboard',
        title: 'Dashboard'
    }
];