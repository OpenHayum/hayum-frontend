exports.badRequest = () => {
  const error = new Error('Bad Request');
  error.status = 400;
  return error;
};

exports.notFound = (message) => {
  const error = new Error(message || 'Not Found');
  error.status = 404;
  return error;
};
