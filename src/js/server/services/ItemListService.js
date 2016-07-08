import ApiServiceClient from './ApiServiceClient';
import ServiceFactory from './ServiceFactory';

const ItemListService = ServiceFactory.create({
  name : 'items',
  read : (request, resource, params, options, callback) => {
    const apiService = new ApiServiceClient();

    apiService
      .get('/items')
      .then(response => callback(null, response.data))
      .catch(error => callback(error));
  }
});

export default ItemListService;
