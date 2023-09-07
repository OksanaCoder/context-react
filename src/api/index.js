import queryString from 'query-string';

/**
 *
 * @param {object} options
 * @param {number} options.results
 * @param {number} options.page
 * @returns {Promise}
 */
export const getUsers = (options = {}) => {
  const defaultOptions = {
    results: 10,
    page: 1,
    seed: 'fm20231',
    nat: 'gb'
  };
  const readyOptions = { ...defaultOptions, ...options }; 

  return fetch(
    `https://randomuser.me/api/?${queryString.stringify(readyOptions)}`
  ).then((response) => response.json());
};
