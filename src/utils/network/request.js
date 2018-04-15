/**
 * Function: request
 * Description: Make a request to the server and return a promise.
 */
async function request(url, options) {
  if (!url) {
    throw new Error('Preflight request error: URL parameter required');
  }

  if (!options) {
    throw new Error('Preflight request error: options parameter required');
  }

  // Fetch returns a promise
  return fetch(url, options)
    .then(response => {
      if (response.status > 300) {
        const error = new Error(`Server error: ${response.status} status`);
        error.response = response;

        throw error;
      }

      return response.json();
    })
    .then(response => {
      if (response.errors) {
        const error = new Error(`Server error: ${response.errors.message}`);
        error.response = response;

        throw error;
      }

      return response;
    });
}

export default request;
