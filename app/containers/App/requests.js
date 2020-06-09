import axios from 'axios';
import { matchPath } from 'react-router-dom';

export const fetchCategories = () => {
    return axios.get('https://swapi.dev/api/').then(r => r.data);
}

export const fetchValues = (fetchUrl, categoryUrl) => {
    return fetchValueSet(fetchUrl, categoryUrl).then(({ next, results = [] }) => {
        if (true || !next) {
            return results;
        }
        
        return fetchValues(next, categoryUrl).then(arr => results.concat(arr));
    });
}

const fetchValueSet = (fetchUrl, categoryUrl) => {  //categoryUrl passed separately for extracting id from resource url
    return axios.get(fetchUrl).then(r => {
        return {
            next: r.data.next,
            results: r.data.results.map(({ name, title, ...r }) => {
                const urlFormat = `${categoryUrl}:id`;
                const match = matchPath(r.url, urlFormat);
                const result = {
                    ...r,
                    name: name || title // setting name in place of title for consistency across different categories
                };

                if (match) {
                    const {
                        params: {
                            id
                        }
                    } = match;
                    result.id = id;
                }

                return result;
            })
        };
    });
};