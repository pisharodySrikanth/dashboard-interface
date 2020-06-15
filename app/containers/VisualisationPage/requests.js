import axios from 'axios';
import QueryString from 'query-string';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import config from '../../config';

export const fetchResources = params => {
  const dateFormat = 'yyyy-MM-dd';

  const query = QueryString.stringify({
    start: format(params.start, dateFormat),
    end: format(addDays(params.end, 1), dateFormat),
    granularity: params.granularity,
  });

  return axios
    .get(`${config.phpBase}/${params.category}/resources?${query}`)
    .then(r => r.data);
};
