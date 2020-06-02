import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
    palette: {
        primary: purple,
        background: {
            default: '#eee'
        }
    },
    boxShadow: '0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(156,39,176,.4)',
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    height: '100%',
                    width: '100%'
                },
                body: {
                    height: '100%',
                    width: '100%'
                }
            },
        }
    }
});

export default theme;