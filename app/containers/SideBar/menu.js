import DashboardIcon from '@material-ui/icons/Dashboard';
import TableChartIcon from '@material-ui/icons/TableChart';
import ShowChartIcon from '@material-ui/icons/ShowChart';

export default [
    {
        text: 'Dashboard',
        icon: DashboardIcon,
        id: 'dashboard',
        to: '/'
    },
    {
        text: 'Report',
        icon: TableChartIcon,
        id: 'report',
        to: '/report'
    },
    {
        text: 'Visualisation',
        icon: ShowChartIcon,
        id: 'chart',
        to: '/chart'
    }
]