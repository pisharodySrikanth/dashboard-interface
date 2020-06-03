import DashboardIcon from '@material-ui/icons/Dashboard';
import TableChartIcon from '@material-ui/icons/TableChart';
import ShowChartIcon from '@material-ui/icons/ShowChart';

export default [
    {
        text: 'Dashboard',
        icon: DashboardIcon,
        page: 'dashboard',
        to: '/',
        subMenu1: [
            {
                text: 'Dashboard 1',
                icon: DashboardIcon,
                page: 'dashboard',
                to: '/',
            }, {
                text: 'Dashboard 2',
                icon: DashboardIcon,
                page: 'dashboard2',
                to: '/',
            }, {
                text: 'Dashboard',
                icon: DashboardIcon,
                page: 'dashboard3',
                to: '/',
            }
        ]
    },
    {
        text: 'Report',
        icon: TableChartIcon,
        page: 'report',
        to: '/report'
    },
    {
        text: 'Visualisation',
        icon: ShowChartIcon,
        page: 'chart',
        to: '/chart'
    }
]