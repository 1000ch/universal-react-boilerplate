import BaseStore from 'fluxible/addons/BaseStore';

export default class ItemStore extends BaseStore {
  static storeName = 'ItemStore';

  static handlers = {
    'fetch-item'  : 'handleFetchItem',
    'fetch-items' : 'handleFetchItems'
  };

  item = {};
  items = [];

  constructor(dispatcher) {
    super(dispatcher);
  }

  getItem() {
    return this.item;
  }

  getItems() {
    return this.items;
  }

  handleFetchItem(payload) {
    this.item = payload.data;
    this.emitChange();
  }

  handleFetchItems(payload) {
    this.items = payload.data;
    this.emitChange();
  }

  dehydrate() {
    return {
      item  : this.item,
      items : this.items
    };
  }

  rehydrate(state) {
    this.item = state.item;
    this.items = state.items;
  }
}
