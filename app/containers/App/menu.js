import DashboardIcon from '@material-ui/icons/Dashboard';
import TableChartIcon from '@material-ui/icons/TableChart';
import ShowChartIcon from '@material-ui/icons/ShowChart';

export default [
    {
        text: 'Dashboard',
        icon: DashboardIcon,
        to: '/'
    },
    {
        text: 'Report',
        icon: TableChartIcon,
        to: '/report'
    },
    {
        text: 'Visualisation',
        icon: ShowChartIcon,
        to: '/chart'
    }
]