export const Api = {
  url: 'http://localhost:3000/musicas',
  fetchGet: () => fetch(Api.url),
  fetchGetById: (id) => fetch(Api.url + '/findById/' + id),
  fetchPost: (body) => {
    return fetch(Api.url + '/add', {
      method: 'POST',
      headers: new Headers({
        "Content-type": "application/json"
      }),
      body: JSON.stringify(body)
    })
  },
}