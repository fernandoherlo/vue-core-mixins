// EVENTS
export default {
  created () {
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
    
    // apiDelete
    this.$EventBus.$on('apiDelete', (url, item, callback, wait, id_parent) => {
      // Degub
      this.$log.debug('EVENTS -> apiDelete', url)
      this.$api.delete(url, item, callback, wait, id_parent)
    })
  }
}
