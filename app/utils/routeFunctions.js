import {matchPath} from 'react-router-dom';
import routes from '../routes';

export const getMatchedRoute = location => {
    const path = routes.find(route => matchPath(location.pathname, route));
    return path || null;
}