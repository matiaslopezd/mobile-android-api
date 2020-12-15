

module.exports = function () {
  return context => {
    const {params, method} = context;

    if (['patch', 'remove', 'create'].includes(method)) context.data.user = params.user._id;
    else if (['get', 'find'].includes(method)) context.params.query.user = params.user._id;

    return context;
  };
};
