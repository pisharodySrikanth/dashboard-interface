import axios from 'axios';
import config from '../../config';
import format from 'date-fns/format';

export const fetchReports = (params) => {
    const dateFormat = 'yyyy-MM-dd';
    const req = {
        start: format(params.startDate, dateFormat),
        end: format(params.endDate, dateFormat),
        dimensions: params.dimensions.map(d => {
            if(d === 'date') {
                return params.dateDimension;
            }

            return d;
        })
    };

    const filters = params.filters;
    for(let key in filters) {
        req[key] = {
            type: 'i',
            value: filters[key]
        };
    }

    console.log(req);

    return Promise.resolve();
}