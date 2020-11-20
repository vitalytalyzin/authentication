export const getFetchData = async (url, setter, errorAct, opts) => {
  await fetch(`${process.env.REACT_APP_BACKEND_URL}${url}`, opts)
    .then(response => {
      if (response.status === 401) {
        errorAct();
      }
      return response.json();
    })
    .then(data => setter(data));
};
