export default {
  buildModules: [
    '../src/module.ts'
  ],
  ackee: {
    server: '',
    domainId: '',
    detailed: 'opt-in',
    ignoreLocalhost: false,
    ignoreOwnVisits: false
  },
  publicRuntimeConfig: {
    ackeeTestEvent: ''
  }
}
