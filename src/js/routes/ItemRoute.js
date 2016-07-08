import { fetchItem } from '../actions/ItemAction';

export default {
  path    : '/items/:itemId',
  method  : 'get',
  page    : 'item',
  title   : 'Item',
  handler : require('../pages/ItemPage'),
  action  : (context, payload, done) => {
    const params = payload.params;
    const itemId = params.itemId;

    Promise.all([
      context.executeAction(fetchItem, {
        params : {
          itemId
        }
      })
    ]).then(() => done());
  }
};
