export default ($axios) => ({
  getData(input) {
    return $axios.get(`?q=${input}&from=2022-03-18&sortBy=publishedAt&apiKey=1f5210480a3d48d487a6e90bd780eadc`)
}
})
