import Fluxible from 'fluxible';
import fetchrPlugin from 'fluxible-plugin-fetchr';
import Application from './components/Application';
import ApplicationStore from './stores/ApplicationStore';
import ItemStore from './stores/ItemStore';
import RouteStore from './stores/RouteStore';

const app = new Fluxible({
  component : Application
});

app.plug(fetchrPlugin({
  corsPath : 'https://qiita.com',
  xhrPath  : '/api/v2'
}));

app.registerStore(ApplicationStore);
app.registerStore(ItemStore);
app.registerStore(RouteStore);

export default app;
