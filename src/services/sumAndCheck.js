import axios from 'axios';

const baseUrl = '/api/sumAndCheck';

/**
 * Check if a sum of numbers is prime. Calculation is done on the server.
 *
 * @param {string} numbers numbers to check
 * @returns Axios promise data
 */
const sumAndCheck = async (numbers) => {
  const response = await axios.get(baseUrl, {
    params: {
      numbers,
    },
  });
  return response.data;
};

export default sumAndCheck;
