
/**
 * AXIOS API implementation to handle data
 * communication with external databse
 */

// IMPORT Axios
import axios from 'axios';

// INSTANCE basicmost api
const api = axios.create({
  baseURL: 'https://your-api-endpoint.com',
});

// FUNCTION for fetching products
export const fetchProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};