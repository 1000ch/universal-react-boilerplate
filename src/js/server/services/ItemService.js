import ApiServiceClient from './ApiServiceClient';
import ServiceFactory from './ServiceFactory';

const ItemService = ServiceFactory.create({
  name : 'item',
  read : (request, resource, params, options, callback) => {
    const apiService = new ApiServiceClient();

    apiService
      .get(`/items/${params.itemId}`)
      .then(response => callback(null, response.data))
      .catch(error => callback(error));
  }
});

export default ItemService;
