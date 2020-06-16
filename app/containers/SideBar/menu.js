import DashboardIcon from '@material-ui/icons/Dashboard';
import TableChartIcon from '@material-ui/icons/TableChart';
import ShowChartIcon from '@material-ui/icons/ShowChart';

export default [
    {
        text: 'Dashboard',
        icon: DashboardIcon,
        page: 'dashboard',
        to: '/'
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