export default {
  buildModules: [
    '../src/module.ts'
  ],
  ackee: {
    server: 'https://ackee.lihbr.com',
    domainId: '6383a4e0-d3fb-4612-aee2-09fbe47e94d7',
    detailed: 'opt-in',
    ignoreLocalhost: false,
    ignoreOwnVisits: false
  },
  publicRuntimeConfig: {
    ackeeTestEvent: '7b9515fd-bbdc-4e25-a8ba-04679297c380'
  },
  server: {
    host: '192.168.1.16'
  }
}
