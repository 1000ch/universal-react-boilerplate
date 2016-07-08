const REX_ID_STR_PATTERN = /^(id|[a-zA-Z]+Id|[a-zA-Z_]+id)$/;

export default {
  create : (crudServiceObject) => {
    const crud = ['create', 'read', 'update', 'delete'];
    for (const method of crud) {
      const originalMethod = crudServiceObject[method];

      if (typeof originalMethod !== 'function') {
        continue;
      }

      crudServiceObject[method] = function() {
        const newArgs = Array.from(arguments);
        const params = newArgs[2];

        if (params != null) {
          newArgs[2] = Object.keys(params).reduce((rv, key) => {
            rv[key] = params[key];

            if (REX_ID_STR_PATTERN.test(key)) {
              rv[key] += '';
            }

            return rv;
          }, {});
        }

        originalMethod.apply(this, newArgs);
      };
    }

    return crudServiceObject;
  }
};
