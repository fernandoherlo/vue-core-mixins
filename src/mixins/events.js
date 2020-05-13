import { EventBus } from '@/mixins/event-bus';

// EVENTS
export default {
  created () {
    // apiGet
    EventBus.$on('apiGet', (url, callback) => {
      // Degub
      this.$log.debug('EVENTS -> apiGet', url)
      this.$api.get(url, callback)
    })
    
    // apiUpdate
    EventBus.$on('apiUpdate', (url, item, callback) => {
      // Degub
      this.$log.debug('EVENTS -> apiUpdate', url)
      this.$api.update(url, item, callback)
    })
    
    // apiSave
    EventBus.$on('apiSave', (url, item, callback) => {
      // Degub
      this.$log.debug('EVENTS -> apiSave', url)
      this.$api.save(url, item, callback)
    })
    
    // apiDelete
    EventBus.$on('apiDelete', (url, item, callback, wait, id_parent) => {
      // Degub
      this.$log.debug('EVENTS -> apiDelete', url)
      this.$api.delete(url, item, callback, wait, id_parent)
    })
  }
}
