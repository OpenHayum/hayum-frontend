import isPromise from '../utils/isPromise';

export default function errorMiddleware() {
  return next => action => {

    // If not a promise, continue on
    if (!isPromise(action.payload)) {
      return next(action);
    }

    if (action.meta.globalError === true) {
      // Dispatch initial pending promise, but catch any errors
      return next(action).catch(error => {
        if (window.ENV === 'dev') {
          console.warn(`${action.type} caught at middleware with reason: ${JSON.stringify(error.message)}.`);
        }

        return error;
      });
    }


    return next(action);
  };
}