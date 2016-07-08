function fetchItem(context, payload, done) {
  const config = {
    cors : true
  };

  context.service.read('item', payload.params, config, (error, response) => {
    if (error) {
      return done(error);
    }

    context.dispatch('fetch-item', {
      data : response
    });

    done();
  });
}

export default { fetchItem };
