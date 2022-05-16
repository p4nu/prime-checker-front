import axios from 'axios';

const baseUrl = '/api/checkPrime';

/**
 * Check if a number is prime. Calculation is done on the server.
 *
 * @param {string} number Number to check
 * @returns Axios promise data
 */
const checkPrime = async (number) => {
  const response = await axios.get(baseUrl, {
    params: {
      number,
    },
  });
  return response.data;
};

export default checkPrime;
