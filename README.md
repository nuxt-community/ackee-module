# Using this template

1. Clone this repo locally
   ```bash
   npx degit https://github.com/nuxt-community/module-template.git my-new-project
   cd my-new-project
   yarn # or npm install
   ```
2. Search and replace all templated names:
   * `@nuxtjs/ackee` => the name of your chosen npm package - e.g. `@nuxtjs/http`
   * `ackee` => a camel-cased version of your npm package for namespacing your module options - e.g. `http`
   * `nuxt-community/ackee-module` => your GitHub repo - e.g. `nuxt-community/ackee-module`

3. Remove this section of the `README.md` and dive in!

---

# @nuxtjs/ackee

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@nuxtjs/ackee` dependency to your project

```bash
yarn add @nuxtjs/ackee # or npm install @nuxtjs/ackee
```

2. Add `@nuxtjs/ackee` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    '@nuxtjs/ackee',
  ],
  ackee: {
    // module options
  }
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install`
3. Start development server using `yarn dev`

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/ackee/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/ackee

[npm-downloads-src]: https://img.shields.io/npm/dm/@nuxtjs/ackee.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/ackee

[github-actions-ci-src]: https://github.com/nuxt-community/ackee-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/nuxt-community/ackee-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/ackee-module.svg
[codecov-href]: https://codecov.io/gh/nuxt-community/ackee-module

[license-src]: https://img.shields.io/npm/l/@nuxtjs/ackee.svg
[license-href]: https://npmjs.com/package/@nuxtjs/ackee
