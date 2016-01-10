import Fluxible from 'fluxible';
import { RouteStore } from 'fluxible-router';
import fetchrPlugin from 'fluxible-plugin-fetchr';
import Application from './components/Application';
import ApplicationStore from './stores/ApplicationStore';
import IndexRoute from './routes/IndexRoute';
import ProfileRoute from './routes/ProfileRoute';

const app = new Fluxible({
  component: Application
});

app.plug(fetchrPlugin({
  xhrPath: '/api'
}));

app.registerStore(ApplicationStore);
app.registerStore(RouteStore.withStaticRoutes({
  index: IndexRoute,
  profile: ProfileRoute
}));

export default app;
