import axios from "axios";
const { VITE_API_URL, VITE_API_KEY } = import.meta.env;
// Default config for the axios instance
const axiosParams = {
  baseURL: VITE_API_URL,
};

// Create axios instance with default params
const axiosInstance = axios.create(axiosParams);

const didAbort = (error) => axios.isCancel(error);

const getCancelSource = () => axios.CancelToken.source();

const withAbort =
  (fn) =>
  async (...args) => {
    const originalConfig = args[args.length - 1];
    // Extract abort property from the config
    let { abort, ...config } = originalConfig;

    // Create cancel token and abort method only if abort
    // function was passed
    if (typeof abort === "function") {
      const { cancel, token } = getCancelSource();
      config.cancelToken = token;
      abort(cancel);
    }

    try {
      // Pass all arguments from args besides the config
      return await fn(...args.slice(0, args.length - 1), config);
    } catch (error) {
      // Add "aborted" property to the error if the request was cancelled
      didAbort(error) && (error.aborted = true);
      throw error;
    }
  };

// Main api function
const api = (axios) => {
  return {
    get: (url, config = {}) => withAbort(axios.get)(url, config),
    post: (url, body, config = {}) => withAbort(axios.post)(url, body, config),
    put: (url, body, config = {}) => withAbort(axios.put)(url, body, config),
    patch: (url, body, config = {}) =>
      withAbort(axios.patch)(url, body, config),
    delete: (url, config = {}) => withAbort(axios.delete)(url, config),
  };
};

export default api(axiosInstance);
