export function fetchItems(context, payload, done) {
  const config = {
    cors : true
  };

  context.service.read('items', payload.params, config, (error, response) => {
    if (error) {
      return done(error);
    }

    context.dispatch('fetch-items', {
      data : response
    });

    done();
  });
}
