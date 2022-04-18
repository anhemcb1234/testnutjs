export default function ({$axios, redirect}) {

  $axios.onResponse(response => {
    return response.data;
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      return Promise.reject(error.response.data)
    }
    if (code == 401) {
      redirect('/login');
    }
  })
};
