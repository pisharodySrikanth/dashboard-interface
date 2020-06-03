import HomePage from 'containers/HomePage/Loadable';
import Report from 'containers/ReportPage/Loadable';
import Chart from 'containers/VisualisationPage/Loadable';

const attributes = ['films', 'people', 'planets', 'species', 'starships', 'vehicles'];

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
        path: `/:category(${attributes.join('|')})?/:id(\\d+)`,
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