import axios from 'axios';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import QueryString from 'query-string';
import config from '../../config';

export const fetchReports = params => {
  const dateFormat = 'yyyy-MM-dd';
  const req = {
    start: format(params.startDate, dateFormat),
    end: format(addDays(params.endDate, 1), dateFormat),
    dimensions: params.dimensions.map(d => {
      if (d === 'date') {
        return params.dateDimension;
      }

      return d;
    }),
  };

  const { filters } = params;
  for (const key in filters) {
    req[key] = JSON.stringify({
      type: 'i',
      value: filters[key],
    });
  }

  return axios
    .get(
      `${config.phpBase}/impressions?${QueryString.stringify(req, {
        arrayFormat: 'bracket',
      })}`,
    )
    .then(r => r.data);
};
