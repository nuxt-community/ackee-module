import { resolve } from 'path'
import defu from 'defu'
import { Module } from '@nuxt/types'
import consola from 'consola'
const log = consola.withScope('nuxt:ackee')

export interface ModuleOptions {
  server?: string;
  domainId?: string;
  detailed?: boolean | 'opt-in' | 'opt-out';
  ignoreLocalhost?: boolean;
  ignoreOwnVisits?: boolean;
  storageKey?: string;
}
const DEFAULTS: ModuleOptions = {
  server: '',
  domainId: '',
  detailed: false,
  ignoreLocalhost: true,
  ignoreOwnVisits: true,
  storageKey: 'nuxt-ackee'
}
const CONFIG_KEY = 'ackee'

const nuxtModule: Module<ModuleOptions> = /* async */ function (moduleOptions: ModuleOptions) {
  const options = defu<ModuleOptions, ModuleOptions>(this.options[CONFIG_KEY]!, moduleOptions, DEFAULTS)
  // const { nuxt } = this

  if (!options.server || !options.domainId) {
    return log.warn('Could not activate @nuxtjs/ackee module, `server` and `domainId` properties are required')
  }

  this.addPlugin({
    src: resolve(__dirname, '../templates', 'plugin.server.js'),
    fileName: 'nuxt-ackee.server.js',
    options
  })
  this.addPlugin({
    src: resolve(__dirname, '../templates', 'plugin.client.js'),
    ssr: false,
    fileName: 'nuxt-ackee.client.js',
    options
  })
}

  ; (nuxtModule as any).meta = require('../package.json')

declare module '@nuxt/types' {
  interface NuxtConfig { [CONFIG_KEY]?: ModuleOptions } // Nuxt 2.14+
  interface Configuration { [CONFIG_KEY]?: ModuleOptions } // Nuxt 2.9 - 2.13
}

export default nuxtModule
