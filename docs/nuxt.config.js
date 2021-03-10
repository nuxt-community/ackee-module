import { withDocus } from 'docus'

export default withDocus({
  docs: {
    colors: {
      primary: '#65deb1'
    }
  },
  generate: {
    fallback: true
  },
  buildModules: [
    'vue-plausible'
  ],
  plausible: {
    domain: 'ackee.nuxtjs.org'
  }
})
