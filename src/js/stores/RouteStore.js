import { RouteStore } from 'fluxible-router';
import IndexRoute from '../routes/IndexRoute';
import ItemRoute from '../routes/ItemRoute';

export default RouteStore.withStaticRoutes({
  index : IndexRoute,
  items : ItemRoute
});
