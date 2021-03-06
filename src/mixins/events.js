// EVENTS
export default {
  data () {
    return {
      // Hilitor
      myHilitor: null,
    }
  },
  created () {

    // Search highlight
    this.$EventBus.$on('search-vgt', (/*searchTerm*/) => {

      if (window.inputSearch == null) {
        // Event empty input
        window.inputSearch = document.querySelector('.vgt-inner-wrap > .vgt-global-search > .vgt-global-search__input input')
        window.inputSearch.addEventListener('input', (event) => {
      
          this.$log.debug('EVENTS -> inputSearch')

          setTimeout(() => {
            if (event.target.value == '') {
              this.$log.debug('EVENTS -> remove')
              this.$app.myHilitor.remove()
            }
          }, 50)
        })
      }
    })

    // apiGet
    this.$EventBus.$on('apiGet', (url, callback) => {
      // Degub
      this.$log.debug('EVENTS -> apiGet', url)
      this.$api.get(url, callback)
    })
    
    // apiUpdate
    this.$EventBus.$on('apiUpdate', (url, item, callback) => {
      // Degub
      this.$log.debug('EVENTS -> apiUpdate', url)
      this.$api.update(url, item, callback)
    })
    
    // apiSave
    this.$EventBus.$on('apiSave', (url, item, callback) => {
      // Degub
      this.$log.debug('EVENTS -> apiSave', url)
      this.$api.save(url, item, callback)
    })
    
    // apiOrder
    this.$EventBus.$on('apiOrder', (url, item, callback) => {
      // Degub
      this.$log.debug('EVENTS -> apiOrder', url)
      this.$api.order(url, item, callback)
    })
    
    // apiUpload
    this.$EventBus.$on('apiUpload', (url, item, callback) => {
      // Degub
      this.$log.debug('EVENTS -> apiUpload', url)
      this.$api.upload(url, item, callback)
    })
    
    // apiDownload
    this.$EventBus.$on('apiDownload', (url, item) => {
      // Degub
      this.$log.debug('EVENTS -> apiDownload', url)
      this.$api.download(url, item)
    })
    
    // apiDelete
    this.$EventBus.$on('apiDelete', (url, item, callback, wait, id_parent) => {
      // Degub
      this.$log.debug('EVENTS -> apiDelete', url)
      this.$api.delete(url, item, callback, wait, id_parent)
    })
  }
}
